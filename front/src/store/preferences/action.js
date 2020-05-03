import { requests } from '../utils'

import { SET_USER_PREFERENCES } from './types'

export const setUserPreferences = (data, token) => {
  return requests.post('add_user_favorites', data, {
    headers: { Authorization: `Bearer ${token}` }
  }, SET_USER_PREFERENCES)
}