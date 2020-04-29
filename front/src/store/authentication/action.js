// local imports
import { LOGIN_USER } from './types'
import { requests } from '../utils'

export const loginUser = (data) => {
  console.log('ENTREI AQUI')
  return requests.post('login', data, LOGIN_USER)
}