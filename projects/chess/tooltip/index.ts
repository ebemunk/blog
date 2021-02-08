import { select as d3select } from 'd3'
import {
  createPopper,
  Instance,
  Modifier,
  OptionsGeneric,
} from '@popperjs/core'

type PopperOptions = Partial<OptionsGeneric<Partial<Modifier<any, any>>>>

import './style.css'

const tooltip = ({
  popperOptions,
}: {
  popperOptions?: PopperOptions
} = {}) => {
  let popper: Instance
  let tooltipEl = d3select('body')
    .append('div')
    .style('position', 'absolute')
    .style('pointer-events', 'none')
    .attr('class', 'tooltip')

  return {
    show({
      html,
      reference,
      popperOptionsOverride,
    }: {
      html: string
      reference: HTMLElement
      popperOptionsOverride?: PopperOptions
    }) {
      tooltipEl.html(html)
      tooltipEl.style('display', 'inherit')
      popper = createPopper(reference, tooltipEl.node(), {
        ...popperOptions,
        ...popperOptionsOverride,
      })
    },
    hide() {
      if (!popper) return
      popper.destroy()
      // tooltipEl.remove()
      tooltipEl.style('display', 'none')
    },
  }
}

export default tooltip
