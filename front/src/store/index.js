import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'

// reducers
import AuthenticationReducer from './authentication/reducer'
import UserReducer from './user/reducer'
import PreferencesReducer from './preferences/reducer'

const enhancers = []
const middleware = [thunk]
const rootReducer = combineReducers({
  authentication: AuthenticationReducer,
  preferences: PreferencesReducer,
  user: UserReducer
})


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)
export default createStore(rootReducer, composedEnhancers)