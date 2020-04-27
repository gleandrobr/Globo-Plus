// local imports
import { LOGIN_USER } from './types'
import { requests } from '../utils'

export const loginUser = () =>
  requests.post('login', LOGIN_USER)