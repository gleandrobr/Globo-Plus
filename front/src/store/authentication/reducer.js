// local imports
import {
  LOGIN_USER,
  REGISTER_USER,
  CHECK_USER_TOKEN,
  CLEAN_AUTHENTICATION,
  FAIL_LOGIN,
  FAIL_REGISTER,
  LOGIN_LOADING,
  REGISTER_LOADING
} from './types'

const initial_state = {}

export default (state = initial_state, action) => {
  switch(action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
    case CHECK_USER_TOKEN:
    case FAIL_LOGIN:
    case FAIL_REGISTER:
    case LOGIN_LOADING:
    case REGISTER_LOADING:
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