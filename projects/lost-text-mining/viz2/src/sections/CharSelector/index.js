import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import { select, addGroup, removeGroup } from 'store/charSelection'
import Selector from './CharSelector'

export default compose(
  hot(module),
  connect(
    state => ({
      charSelection: state.charSelection,
      options: state.personalities.map(p => p.char_name).sort(),
    }),
    {
      select,
      addGroup,
      removeGroup,
    },
  ),
)(Selector)
