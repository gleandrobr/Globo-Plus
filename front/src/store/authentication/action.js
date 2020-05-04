// local imports
import {
  LOGIN_USER,
  REGISTER_USER,
  CHECK_USER_TOKEN,
  CLEAN_AUTHENTICATION,
  FAIL_LOGIN,
  FAIL_REGISTER,
  LOGIN_LOADING,
  REGISTER_LOADING
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

export const cleanAuthentication = () => {
  return { type: CLEAN_AUTHENTICATION, payload: null }
}
export const failLogin = () => {
  return { type: FAIL_LOGIN, payload: { login_fail: true } }
}
export const failRegister = () => {
  return { type: FAIL_REGISTER, payload: { register_fail: true } }
}
export const loginLoading = (bool) => {
  return { type: LOGIN_LOADING, payload: { login_loading: bool } }
}
export const registerLoading = (bool) => {
  return { type: REGISTER_LOADING, payload: { register_loading: bool } }
}