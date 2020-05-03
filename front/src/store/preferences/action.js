import { requests } from '../utils'

import {
  SET_USER_FAVORITES,
  FETCH_USER_FAVORITES,
  FETCH_CATEGORIES_OPTIONS
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