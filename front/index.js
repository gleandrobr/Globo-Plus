// react native imports
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native'

// local imports
import {name as appName} from './app.json'

import App from './src/app'

AppRegistry.registerComponent(appName, () => App)
