// local imports
import {
  LOGIN_USER,
  REGISTER_USER
} from './types'
import { requests } from '../utils'

export const loginUser = (data) => {
  return requests.post('login', data, LOGIN_USER)
}

export const registerUser = (data) => {
  return requests.post('register', data, REGISTER_USER)
}