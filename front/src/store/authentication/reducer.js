// local imports
import { LOGIN_USER } from './types'

const initial_state = {}

export default (state = initial_state, action) => {
  switch(action.type) {
    case LOGIN_USER:
      console.log(action.payload)
      return {

      }

    default:
      return state
  }
}