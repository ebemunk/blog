import { BaseType, select as d3select } from 'd3'
import {
  createPopper,
  Instance,
  Modifier,
  OptionsGeneric,
} from '@popperjs/core'

type PopperOptions = Partial<OptionsGeneric<Partial<Modifier<any, any>>>>

import './style.css'

const createTooltip = ({
  popperOptions,
  attachTo = 'body',
  tooltipSel,
}: {
  popperOptions?: PopperOptions
  attachTo?: string | BaseType
  tooltipSel?: (Selection) => Selection
} = {}) => {
  let popper: Instance
  let tooltipEl = d3select(attachTo)
    .append('div')
    .style('position', 'absolute')
    .style('pointer-events', 'none')
    .attr('class', 'tooltip')
    .style('display', 'none')

  tooltipSel && tooltipSel(tooltipEl)

  return {
    show({
      html,
      reference,
      popperOptionsOverride,
    }: {
      html: string
      reference: HTMLElement | SVGElement
      popperOptionsOverride?: PopperOptions
    }) {
      tooltipEl.html(html)
      tooltipEl.style('display', 'inherit')

      if (popper) popper.destroy()

      popper = createPopper(reference, tooltipEl.node(), {
        ...popperOptions,
        ...popperOptionsOverride,
      })
    },
    hide() {
      if (!popper) return
      popper.destroy()
      tooltipEl.style('display', 'none')
    },
  }
}

export default createTooltip
