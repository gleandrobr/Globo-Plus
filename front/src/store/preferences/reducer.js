import {
  SET_USER_FAVORITES,
  FETCH_USER_FAVORITES,
  FETCH_CATEGORIES_OPTIONS,
  SET_USER_CATEGORIES_PREFERENCES,
  CLEAN_PREFERENCES
} from './types'

export default (state = {}, action) => {
  switch(action.type) {
    case SET_USER_FAVORITES:
    case FETCH_USER_FAVORITES:
    case FETCH_CATEGORIES_OPTIONS:
    case SET_USER_CATEGORIES_PREFERENCES:
      return {
        ...state,
        ... action.payload
      }
    case CLEAN_PREFERENCES:
      return {}
    default:
      return state
  }
}