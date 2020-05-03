import { requests } from '../utils'

import {
  SET_USER_FAVORITES,
  FETCH_USER_FAVORITES,
  FETCH_CATEGORIES_OPTIONS,
  SET_USER_CATEGORIES_PREFERENCES
} from './types'

export const setUserFavorites = (data, token) => {
  return requests.post('add_user_favorites', data, {
    headers: { Authorization: `Bearer ${token}` }
  }, SET_USER_FAVORITES)
}

export const fetchUserFavorites = (token) => {
  return requests.get('get_user_favorites', {
    headers: { Authorization: `Bearer ${token}` }
  }, FETCH_USER_FAVORITES)
}

export const fetchCategoriesOptions = (token) => {
  return requests.get('get_user_categories_options', {
    headers: { Authorization: `Bearer ${token}` }
  }, FETCH_CATEGORIES_OPTIONS)
}

export const setUserCategoriesPreferences = (data, token) => {
  return requests.post('set_user_categories_preferences', data, {
    headers: { Authorization: `Bearer ${token}` }
  }, SET_USER_CATEGORIES_PREFERENCES)
}