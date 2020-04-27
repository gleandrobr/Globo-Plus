import { createStore, combineReducers } from 'redux'

import PostReducer from './post/reducer'
import AuthenticationReducer from './authentication/reducer'

const rootReducer = combineReducers({
  user: PostReducer,
  authentication: AuthenticationReducer
})

export default createStore(rootReducer)