import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// components
import SplashScreen from './containers/Splash'
import LoginScreen from './containers/Authentication/login'
import RegisterScreen from './containers/Authentication/register'
import MainScreen from './containers/Main'
import ProfileSettings from './containers/Profile/Config'
import ChooseFavoritesScreen from './containers/Choose-Favorites'
import ChossePreferenceScreen from './containers/Choose-Favorites/preferences'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='ProfileSettings'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Splash'
          component={SplashScreen} />
        <Stack.Screen
          name='Login'
          component={LoginScreen} />
        <Stack.Screen
          name='Register'
          component={RegisterScreen} />
        <Stack.Screen
          name='Home'
          component={MainScreen} />
        <Stack.Screen
          name='ProfileSettings'
          component={ProfileSettings} />
          name='ChooseFavorites'
          component={ChooseFavoritesScreen} />
        <Stack.Screen
          name='ChoosePreferences'
          component={ChossePreferenceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes