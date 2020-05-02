// local imports
import {
  LOGIN_USER,
  REGISTER_USER,
  CHECK_USER_TOKEN
} from './types'
import { requests } from '../utils'

export const loginUser = (data) =>
  requests.post('login', data, {}, LOGIN_USER)

export const registerUser = (data) =>
  requests.post('register', data, {}, REGISTER_USER)

export const checkUserToken = (token) => {
  return requests.post('check_login', {}, {
    headers: { Authorization: `Bearer ${token}` }
  }, CHECK_USER_TOKEN)
}