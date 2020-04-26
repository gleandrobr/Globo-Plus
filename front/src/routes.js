import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// components
import HomeScreen from './containers/Home'
import DetailScreen from './containers/Detail'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Tela inicial do Globo Plus' }} />

        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={{ title: 'Tela detail do Globo Plus' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes