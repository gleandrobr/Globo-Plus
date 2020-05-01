import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'

import PostReducer from './post/reducer'
import AuthenticationReducer from './authentication/reducer'

const enhancers = []
const middleware = [thunk]
const rootReducer = combineReducers({
  user: PostReducer,
  authentication: AuthenticationReducer
})


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)
export default createStore(rootReducer, composedEnhancers)