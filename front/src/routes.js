import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// components
import SplashScreen from './containers/Splash'
import LoginScreen from './containers/Authentication/login'
import RegisterScreen from './containers/Authentication/register'
import ProfileScreen from './containers/Profile'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Profile'
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
          name='Profile'
          component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes