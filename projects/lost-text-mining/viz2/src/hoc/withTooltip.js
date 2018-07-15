import { compose, withState, withHandlers } from 'recompose'

const withTooltip = compose(
  withState('tooltipVisible', 'toggleTooltip', false),
  // withHandlers({
  //   show: ({ toggle }) => e => toggle(true),
  //   hide: ({ toggle }) => e => toggle(false),
  //   toggle: ({ toggle }) => e => toggle(current => !current),
  // }),
)

export default withTooltip
