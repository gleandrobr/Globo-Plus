import { createStore, combineReducers } from 'redux'

import PostReducer from './post/reducer'

const rootReducer = combineReducers({
  user: PostReducer
})

export default createStore(rootReducer)