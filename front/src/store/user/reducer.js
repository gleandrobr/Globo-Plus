import {
  IS_USER_FIRST_LOGIN
} from './types'

export default (state = {}, action) => {
  switch(action.type) {
    case IS_USER_FIRST_LOGIN:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}