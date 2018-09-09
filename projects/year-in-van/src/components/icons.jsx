import React from 'react'

import {
  faTimesCircle,
  faStepBackward,
  faFastBackward,
  faStepForward,
  faFastForward,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Rewind = props => (
  <FontAwesomeIcon icon={faFastBackward} {...props} />
)
export const Back = props => (
  <FontAwesomeIcon icon={faStepBackward} {...props} />
)
export const Forward = props => (
  <FontAwesomeIcon icon={faStepForward} {...props} />
)
export const Fastforward = props => (
  <FontAwesomeIcon icon={faFastForward} {...props} />
)

export const Add = props => <FontAwesomeIcon icon={faPlus} {...props} />
export const Remove = props => (
  <FontAwesomeIcon icon={faTimesCircle} {...props} />
)
