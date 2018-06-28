import React from 'react'
import * as R from 'ramda'
import { format } from 'd3'

import Selector from './Selector'
import images from '../CharSelector/images'
import { combineTraits } from 'store/personalities'
import css from './Individual.css'

export default class Individual extends React.Component {
  state = { char: 'JACK' }

  render() {
    const { char } = this.state
    const { personalities } = this.props
    const profile = personalities.find(p => p.char_name === char)

    const consumptionPrefs = profile.profile.consumption_preferences
      .map(cp => ({
        prefs: cp.consumption_preferences.filter(p => p.score > 0.5).map(p => ({
          score: p.score,
          name: p.name,
        })),
        name: cp.name,
      }))
      .filter(cp => cp.prefs.length)

    const averages = R.pipe(
      combineTraits,
      R.pick([
        'big5_agreeableness',
        'big5_conscientiousness',
        'big5_extraversion',
        'big5_openness',
        'big5_neuroticism',
      ]),
      R.mapObjIndexed(v => v[0]),
    )([personalities])

    console.log(averages, 'avera')

    const distinctTraits = profile.profile.personality
      .map(p => ({
        name: p.name,
        percentile: p.percentile,
        deltaPop: Math.abs(p.percentile - averages[p.trait_id]),
        delta: Math.abs(p.percentile - 0.5),
      }))
      .sort((a, b) => a.deviation < b.deviation)
    // .filter(p => p.deviation > 0.15)
    // .slice(0, 2)

    console.log(distinctTraits, 'aha')

    const pct = format('.1%')

    return (
      <React.Fragment>
        <Selector
          value={char}
          onChange={({ value }) => this.setState({ char: value })}
        />
        <button
          onClick={() =>
            this.setState({
              char:
                personalities[
                  (personalities.findIndex(p => p.char_name === char) + 1) %
                    personalities.length
                ].char_name,
            })
          }
        >
          Next
        </button>
        {distinctTraits.map(t => (
          <div key={t.name}>
            <em>{t.name}</em> {pct(t.percentile)} - {pct(t.deltaPop)} -{' '}
            {pct(t.delta)}
          </div>
        ))}
        <div>
          <dl>
            <dt>Name</dt>
            <dd>{profile.char_name}</dd>

            <dt>Image</dt>
            <dd>
              <img src={images[profile.char_name]} />
            </dd>

            <dt>Analyzed words</dt>
            <dd>{profile.profile.word_count}</dd>
          </dl>
        </div>
        <div>
          {consumptionPrefs.map(cp => (
            <div key={cp.name}>
              <div>{cp.name}</div>
              {cp.prefs.map(p => (
                <div key={p.name}>
                  {p.name}: {p.score}
                </div>
              ))}
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
