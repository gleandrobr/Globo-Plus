// local imports
import { LOGIN_USER, REGISTER_USER } from './types'

const initial_state = {}

export default (state = initial_state, action) => {
  switch(action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
      return action.payload
    default:
      return state
  }
}