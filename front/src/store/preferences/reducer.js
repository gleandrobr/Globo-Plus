import {
  SET_USER_FAVORITES,
  FETCH_USER_FAVORITES,
  FETCH_CATEGORIES_OPTIONS
} from './types'

export default (state = {}, action) => {
  switch(action.type) {
    case SET_USER_FAVORITES:
    case FETCH_USER_FAVORITES:
    case FETCH_CATEGORIES_OPTIONS:
      return {
        ...state,
        ... action.payload
      }
    default:
      return state
  }
}