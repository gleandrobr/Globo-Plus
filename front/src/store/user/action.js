import { requests } from '../utils'

import {
  IS_USER_FIRST_LOGIN
} from './types'

export const checkIsUserFirstLogin = (token) => {
  return requests.get('is_user_first_login', {
    headers: { Authorization: `Bearer ${token}` }
  }, IS_USER_FIRST_LOGIN)
}