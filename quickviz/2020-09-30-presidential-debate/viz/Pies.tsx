import { select } from 'd3-selection'
import { arc, pie } from 'd3-shape'
import * as React from 'react'
import { equals } from 'remeda'

import { colorScaleByName, formatPct, formatSec } from '../util'
import { Margin } from './types'

import rawData from '../data/per-second-speech.json'

const total = (id: number) =>
  Object.entries(rawData).filter(d => d[1].some(dd => dd === id)).length
const shared = (ids: number[]) =>
  Object.entries(rawData).filter(d => equals(d[1].sort(), ids.sort())).length

export const data = [
  {
    name: 'Biden',
    total: total(1),
    bars: [
      { name: 'Trump', total: shared([1, 0]), parent: 'Biden' },
      { name: 'Wallace', total: shared([1, 2]), parent: 'Biden' },
    ],
  },
  {
    name: 'Trump',
    total: total(0),
    bars: [
      { name: 'Biden', total: shared([0, 1]), parent: 'Trump' },
      { name: 'Wallace', total: shared([0, 2]), parent: 'Trump' },
    ],
  },
  {
    name: 'Wallace',
    total: total(2),
    bars: [
      { name: 'Trump', total: shared([2, 0]), parent: 'Wallace' },
      { name: 'Biden', total: shared([2, 1]), parent: 'Wallace' },
    ],
  },
]

type Datum = typeof data[0]

const totalSecs = data.reduce((tot, d) => tot + d.total, 0)

const Pie = ({
  data,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  width,
  height,
  top,
}: {
  data: Datum
  margin?: Partial<Margin>
  width: number
  height: number
  top: number
}) => {
  const ref = React.useRef<SVGSVGElement>()
  React.useLayoutEffect(() => {
    const svg = select(ref.current).attr(
      'viewBox',
      [-width / 2, -height / 2, width, height].join(),
    )

    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const chartWidth = width - (margin.left + margin.right)
    const chartHeight = height - (margin.top + margin.bottom)

    type PieDatum = { value: number; name: string }
    const pieGen = pie<PieDatum>().value(d => d.value)

    const arcGen = arc<PieDatum>()
      .outerRadius(chartHeight / 2)
      .innerRadius(chartHeight / 3)

    chart
      .selectAll('.slice')
      .data(
        pieGen([
          ...data.bars.map(dd => ({ value: dd.total, name: dd.name })),
          {
            value:
              data.total - data.bars.reduce((tot, dd) => tot + dd.total, 0),
            name: data.name,
          },
        ]),
      )
      .join('path')
      .attr('class', 'slice')
      .attr('d', arcGen)
      .style('fill', d => colorScaleByName(d.data.name))
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <svg ref={ref} width={width} height={height} />
      <div
        style={{
          position: 'absolute',
          top,
          left: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: colorScaleByName(data.name),
          }}
          className="pieName"
        >
          {data.name}
        </span>
        <span>
          <span
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
            className="time"
          >
            {formatSec(data.total)}
          </span>{' '}
          <span className="small">
            ({formatPct(data.total / totalSecs)} of debate)
          </span>
        </span>
        <span
          style={{
            fontStyle: 'italic',
            marginTop: '1rem',
            marginBottom: '0.5rem',
          }}
          className="speaking-interlude"
        >
          speaking at the same time:
        </span>
        {data.bars.map(bar => (
          <span key={bar.name}>
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
              className="time"
            >
              {formatSec(bar.total)}
            </span>{' '}
            <span className="small">
              ({formatPct(bar.total / totalSecs)}) w/{' '}
              <span
                style={{ color: colorScaleByName(bar.name) }}
                className="name"
              >
                {bar.name}
              </span>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

const Pies = ({ width = 2000, top = 110 }) => {
  return (
    <>
      <span className="chartTitle">Total time spent speaking</span>
      <span className="chartDesc">
        How long every participant spoke for in total and at the same time with
        others.
      </span>
      <div
        style={{
          marginBottom: '2rem',
        }}
      />
      <div
        style={{
          display: 'flex',
          width,
          justifyContent: 'space-evenly',
        }}
        className="pies"
      >
        {data.map(d => (
          <Pie
            top={top}
            data={d}
            key={d.name}
            height={width / 3}
            width={width / 3}
          />
        ))}
      </div>
    </>
  )
}

export default Pies
