import React from 'react'
import Animate from 'react-move/Animate'
import classnames from 'classnames'

import Circle from './Circle'
import css from './CharCooccurrence.css'

export default class ForceGraph extends React.PureComponent {
  render() {
    const {
      transform,
      links,
      hLinks,
      nodes,
      hNodes,
      highlight,
      onNodeClick,
      linkOpacityScale,
      colorScale,
      nodeSizeScale,
      domRef,
    } = this.props

    return (
      // <Animate
      //   start={{
      //     transform: 'translate(0,0) scale(1)',
      //   }}
      //   update={{
      //     transform: [transform],
      //     timing: { duration: 750, delay: 250 },
      //   }}
      // >
      //   {({ transform }) => (
      <g className={css.viewport} transform={transform}>
        <g className={css.links}>
          {links.map(
            ({ index, source, target, value }) =>
              (!highlight || (highlight && hLinks.includes(index))) && (
                <line
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  strokeOpacity={linkOpacityScale(value)}
                  key={`${source.id}-${target.id}`}
                />
              ),
          )}
        </g>
        <g className={css.nodes} ref={domRef}>
          {nodes.map(node => (
            <Circle
              className={classnames({
                [css.op]: !hNodes.includes(node.id) && highlight,
              })}
              cx={node.x}
              cy={node.y}
              fill={colorScale(node.id)}
              r={nodeSizeScale(node.numLinksTo)}
              key={node.id}
              tooltip={node.id}
              onClick={() => onNodeClick(node.id)}
            />
          ))}
        </g>
      </g>
      //   )}
      // </Animate>
    )
  }
}
