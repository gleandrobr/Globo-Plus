// local imports
import {
  LOGIN_USER,
  REGISTER_USER,
  CHECK_USER_TOKEN,
  CLEAN_AUTHENTICATION
} from './types'

const initial_state = {}

export default (state = initial_state, action) => {
  switch(action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
    case CHECK_USER_TOKEN:
      return {
        ...state,
        ...action.payload
      }
    case CLEAN_AUTHENTICATION:
      return {}
    default:
      return state
  }
}