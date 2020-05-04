// react imports
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// third imports
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'

// project imports
import ProfileScreen from '../Profile'
import NotificationScreen from '../Notification'
import FeedScreen from '../Feed'
import NewsDetail from '../Feed/news-detail'
import MovieDetail from '../Feed/movie-detail'

// routes config
const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const FeedSubRoutes = () => {
  return (
    <NavigationContainer
      independent={true}>
      <Stack.Navigator
        initialRouteName='Main'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Main'
          component={FeedScreen} />
        <Stack.Screen
          name='NewsDetail'
          component={NewsDetail} />
        <Stack.Screen
          name='MovieDetail'
          component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName='Feed'
      activeColor='#fff'
      barStyle={{ backgroundColor: '#4623DE' }} >
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='person' color={color} size={26} />
          ),
        }} />
      <Tab.Screen
        name='Feed'
        component={FeedSubRoutes}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='home' color={color} size={26} />
          ),
        }} />
      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ color }) => (
            <Octicons name='bell' color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  )
}
export default MainScreen