import { FETCH_POST } from './types'


const state_default = {}

export default (state = state_default, action) => {
  switch(action.type) {
    case FETCH_POST:
      return {
        ... action.payload,
        'more': '123 testando'
      }

    default:
      return state
  }
}