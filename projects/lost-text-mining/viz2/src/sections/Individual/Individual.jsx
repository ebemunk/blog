import React from 'react'
import * as R from 'ramda'
import { format, scaleLinear } from 'd3'

import Selector from './Selector'
import images from '../CharSelector/images'
import { combineTraits } from 'store/personalities'
import css from './Individual.css'

export default class Individual extends React.Component {
  state = { char: 'JACK' }

  render() {
    const { char } = this.state
    const { personalities } = this.props

    if (!personalities.length) return null

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

    const distinctTraits = profile.profile.personality
      .map(p => ({
        name: p.name,
        percentile: p.percentile,
        deltaPop: Math.abs(
          p.percentile -
            (averages[p.trait_id] * personalities.length - p.percentile) /
              (personalities.length - 1),
        ),
        delta: Math.abs(p.percentile - 0.5),
      }))
      .sort((a, b) => a.deltaPop < b.deltaPop)

    const pct = format('.1%')
    const colorScale = scaleLinear()
      .domain([0, 0.5])
      .range(['white', 'red'])

    return (
      <div className={css.responsive}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{
              flexBasis: '5rem',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              height: '36px',
            }}
            className="button"
            onClick={() => {
              const next =
                personalities.findIndex(p => p.char_name === char) - 1
              this.setState({
                char:
                  personalities[next < 0 ? personalities.length - 1 : next]
                    .char_name,
              })
            }}
          >
            &lt; Prev
          </button>
          <div style={{ width: '200px' }}>
            <Selector
              value={char}
              onChange={({ value }) => this.setState({ char: value })}
            />
          </div>
          <button
            style={{
              flexBasis: '5rem',
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              height: '36px',
            }}
            className="button"
            onClick={() => {
              this.setState({
                char:
                  personalities[
                    (personalities.findIndex(p => p.char_name === char) + 1) %
                      personalities.length
                  ].char_name,
              })
            }}
          >
            Next &gt;
          </button>
        </div>
        <div style={{ display: 'flex', width: '800px', flexShrink: 0 }}>
          <div
            style={{
              padding: '3rem',
              flexBasis: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={images[profile.char_name]} />
            <div>{profile.char_name}</div>
            <div>{format(',')(profile.profile.word_count)} words analyzed</div>
          </div>
          <div style={{ flexBasis: '550px' }}>
            <table style={{ fontSize: '0.75rem' }}>
              <thead>
                <tr>
                  <th>Trait</th>
                  <th>Percentile</th>
                  <th>Difference from Population Average</th>
                  <th>Difference from 50th Percentile</th>
                </tr>
              </thead>
              <tbody>
                {distinctTraits
                  .sort((a, b) => {
                    const order = [
                      'Openness',
                      'Conscientiousness',
                      'Extraversion',
                      'Agreeableness',
                      'Emotional range',
                    ]
                    return order.indexOf(a.name) - order.indexOf(b.name)
                  })
                  .map(t => (
                    <tr key={t.name}>
                      <td>{t.name}</td>
                      <td>{pct(t.percentile)}</td>
                      <td style={{ color: colorScale(t.deltaPop) }}>
                        {pct(t.deltaPop)}
                      </td>
                      <td style={{ color: colorScale(t.delta) }}>
                        {pct(t.delta)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            width: '800px',
            height: '350px',
            flexShrink: 0,
          }}
        >
          {consumptionPrefs.map(cp => (
            <div
              key={cp.name}
              style={{
                fontSize: '0.687rem',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{cp.name}</div>
              <ul>
                {cp.prefs.map(p => (
                  <li key={p.name}>{p.name.replace('Likely to', '')}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
