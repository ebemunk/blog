import { connect } from 'react-redux'
import * as R from 'ramda'

import { combinedProfileSelection } from '../../selectors'

import Personalities from './Personalities'

export default connect(
  state => ({
    data: combinedProfileSelection(state)
    // data: state.personalitySelection
    // .map(
    //   g => g
    //   .map(
    //     c => state.personalities.find(p => c.value == p.char_name).profile.personality
    //     .map(big5 =>
    //       [
    //         {
    //           trait_id: big5.trait_id,
    //           percentile: big5.percentile
    //         },
    //         ...big5.children.map(c => ({
    //           trait_id: c.trait_id,
    //           percentile: c.percentile
    //         }))
    //       ]
    //     )
    //   )
    // )
  })
)(Personalities)
