// react imports
import React from 'react'

// third imports
import { Provider } from 'react-redux'

// local imports
import Routes from './routes'

import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App