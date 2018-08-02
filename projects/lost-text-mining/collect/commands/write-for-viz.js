import * as R from 'ramda'
import Promise from 'bluebird'

import { getPool, queries } from '../db'
import { logger, writeFile, prettyJson } from '../util'

const log = logger('tone')
const pad2 = str => (str.toString().length < 2 ? `0${str}` : str)
const episodeKey = (season, episode) => `S${pad2(season)}-E${pad2(episode)}`

export default async function writeForViz() {
  const pool = getPool()

  const dataFiles = [
    {
      filename: 'episodes',
      query: queries.allEpisodes(),
      process: R.addIndex(R.map)(({ season, episode }, index) => ({
        season,
        episode,
        key: episodeKey(season, episode),
        index,
      })),
    },
    {
      filename: 'wordCount',
      query: queries.wordCount(),
      process: R.map(row => ({
        ...row,
        density: (row.uniq / row.total) * 100,
      })),
    },
    {
      filename: 'linesPerChar',
      query: queries.linesPerChar(),
      process: R.map(row => ({
        ...row,
        lines: +row.lines,
        key: episodeKey(row.season, row.episode),
      })),
    },
    {
      filename: 'charWordFrequencies',
      query: queries.charWordFrequencies(),
      process: R.identity,
    },
    {
      filename: 'personalities',
      query: queries.personalities(),
      process: R.identity,
    },
    {
      filename: 'charCooccurrence',
      query: queries.charCooccurrence(),
      process: R.identity,
    },
    {
      filename: 'flashes',
      query: queries.flashbacksAndSideways(),
      process: R.map(d => ({
        season: d.season,
        episode: d.episode,
        flashbacks: R.transpose([d.flashback, d.flashsideways, d.chars]).reduce(
          (acc, [flashback, flashsideways, chars]) => {
            if (!acc.length) {
              return [
                {
                  flashback,
                  flashsideways,
                  chars,
                },
              ]
            }

            if (R.last(acc).flashback != flashback) {
              acc.push({
                flashback,
                flashsideways,
                chars,
              })
              return acc
            }

            if (R.last(acc).flashsideways != flashsideways) {
              acc.push({
                flashback,
                flashsideways,
                chars,
              })
              return acc
            }

            acc[acc.length - 1] = {
              ...R.last(acc),
              chars: R.last(acc).chars + chars,
            }
            return acc
          },
          [],
        ),
      })),
    },
    {
      filename: 'sceneTone',
      query: queries.sceneTone(),
      process: R.pipe(
        R.groupBy(ep => `${ep.season}-${ep.episode}`),
        Object.values,
        R.map(scenes => {
          let start = 0
          return {
            season: scenes[0].season,
            episode: scenes[0].episode,
            scenes: scenes.map(scene => {
              const ret = {
                start,
                length: scene.length,
                tones: scene.document_tone ? scene.document_tone.tones : [],
              }
              start += scene.length
              return ret
            }),
          }
        }),
      ),
    },
    {
      filename: 'countsPerEpisode',
      query: `
        select distinct season, episode,
          count(*) filter (where type='stageDirection') as num_stagedirections,
          count(*) filter (where type='scene')+1 as num_scenes,
          count(distinct char_name) filter (where type='dialog') as num_chars
        from dialog
        group by season, episode
        order by season, episode asc
        ;
			`,
      process: R.map(
        R.evolve({
          num_stagedirections: parseInt,
          num_scenes: parseInt,
          num_chars: parseInt,
        }),
      ),
    },
    {
      filename: 'episodeReadingLevel',
      query: 'select * from episode_readinglevel',
      process: R.identity,
    },
    {
      filename: 'charReadingLevel',
      query: 'select * from char_readinglevel',
      process: R.identity,
    },
    {
      filename: 'charAppearance',
      query: `
        select char_name, season, episode, count(*) from (
          select char_name, season, episode
          from dialog
          where type='dialog' and
          char_name in (
            select char_name from total_lines_by_char limit 8
          )
          group by season, episode, scene, char_name
          order by season, episode
        ) t
        group by char_name, season, episode
        order by season, episode
      `,
      process: R.pipe(
        R.groupBy(r => r.char_name),
        // R.map(R.map(rr => +rr.count)),
      ),
    },
  ]

  await Promise.map([dataFiles[11]], async dataFile => {
    log('doing', dataFile.filename)
    const { rows } = await pool.query(dataFile.query)
    const data = dataFile.process(rows)
    return writeFile(
      `../viz2/src/data/${dataFile.filename}.json`,
      prettyJson(data),
    )
  })

  log('done')

  return pool.end()
}
