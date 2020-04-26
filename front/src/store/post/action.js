import { FETCH_POST } from './types'

export const fetchPost = (payload) => {
  return { type: FETCH_POST, payload }
}