import { SET_USER_PREFERENCES } from './types'

export default (state = {}, action) => {
  switch(action.type) {
    case SET_USER_PREFERENCES:
      return action.payload
    default:
      return state
  }
}