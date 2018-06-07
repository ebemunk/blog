import React, { Component } from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'
import classnames from 'classnames'

import { Brush } from '../../components'
import { seasonColor, SEASONS } from '../../util'

import style from './EpisodeRangeSelector.css'

export default class EpisodeRangeSelector extends Component {
  static displayName = 'EpisodeRangeSelector'

  static defaultProps = {
    width: 800,
    height: 20,
    episodes: [],
    selection: [],
  }

  state = {
    scale: () => {},
    brushSelection: [null, null],
    isBrushing: false,
  }

  componentDidMount() {
    this.props.getEpisodes()
  }

  static getDerivedStateFromProps({
    episodes,
    width,
    selectEpisodes,
    selection,
  }) {
    console.log('drgd')

    const scale = d3
      .scalePoint()
      .domain(R.range(0, episodes.length))
      .range([0, width])
      .padding(0.5)

    // not null and not full selection
    const isBrushing = !(
      R.equals(selection, [null, null]) ||
      R.equals(selection, [0, episodes.length - 1])
    )

    let brushSelection
    if (isBrushing) {
      brushSelection = [
        scale(selection[0]) - scale.step() / 2,
        scale(selection[1]) + scale.step() / 2,
      ]
    } else {
      brushSelection = [null, null]
    }

    return {
      scale,
      brushSelection,
      isBrushing,
    }
  }

  onBrush = event => {
    if (!event) return
    if (!event.sourceEvent) return
    if (event.sourceEvent.type === 'brush') return
    if (!event.selection) return

    const { selectEpisodes } = this.props
    const { scale } = this.state

    const selection = scale
      .domain()
      .filter(
        d => event.selection[0] <= scale(d) && event.selection[1] >= scale(d),
      )

    if (selection.length) {
      selectEpisodes([R.head(selection), R.last(selection)])
    } else {
      selectEpisodes([null, null])
    }
  }

  onBrushEnd = event => {
    if (!event) return
    if (!event.sourceEvent || event.sourceEvent.type === 'end') return
    if (!event.selection) {
      this.props.selectEpisodes([null, null])
    }
  }

  render() {
    const { width, height, episodes, selectEpisodes } = this.props
    const { scale, isBrushing, brushSelection } = this.state

    if (!episodes.length) return null
    if (!scale.step) return null

    const halfStep = scale.step() * 0.5
    const brushMaskId = `brushMask-${width}`

    return (
      <div className={style.wrap}>
        <svg
          className={classnames({
            [style.episodeSelector]: true,
            [style.brushed]: isBrushing,
          })}
          width={width}
          height={height + 15}
        >
          <defs>
            <mask id={brushMaskId} x="0" y="0" width={width} height={height}>
              <rect
                y="0"
                x="0"
                width={brushSelection[0]}
                height={height}
                opacity="0.3"
                fill="white"
              />
              <rect
                y="0"
                x={brushSelection[0]}
                width={brushSelection[1] - brushSelection[0]}
                height={height}
                opacity="1"
                fill="white"
              />
              <rect
                y="0"
                x={brushSelection[1]}
                width={width - brushSelection[1]}
                height={height}
                opacity="0.3"
                fill="white"
              />
            </mask>
          </defs>
          <g
            className={style.seasons}
            style={{
              mask: isBrushing ? `url(#${brushMaskId})` : '',
            }}
          >
            {SEASONS.map(([start, end], i) => (
              <rect
                x={scale(start) - halfStep}
                y={0}
                width={scale(end) + halfStep - (scale(start) - halfStep)}
                height={height}
                fill={seasonColor(i)}
                key={[start, end]}
              />
            ))}
          </g>
          <g className={style.seasonSelectors}>
            {SEASONS.map(([start, end], i) => (
              <text
                x={scale(start) + (scale(end) - scale(start)) / 2}
                y={height + 15}
                fill={seasonColor(i)}
                key={start}
                onClick={() => selectEpisodes([start, end])}
              >
                Season {i + 1}
              </text>
            ))}
          </g>
          <g
            className={style.episodes}
            style={{
              mask: isBrushing ? `url(#${brushMaskId})` : '',
            }}
          >
            {episodes.map((episode, i) => (
              <rect
                x={scale(i) - 1.5}
                y={5}
                width={3}
                height={height - 10}
                key={i}
              />
            ))}
          </g>
          <Brush
            className={style.brush}
            extent={[[0, 0], [width, height]]}
            handleSize={2}
            onBrush={this.onBrush}
            onBrushEnd={this.onBrushEnd}
            selection={this.state.brushSelection}
          />
        </svg>
      </div>
    )
  }
}
