import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// components
import SplashScreen from './containers/Splash'
import LoginScreen from './containers/Authentication/login'
import RegisterScreen from './containers/Authentication/register'
import MainScreen from './containers/Main'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes