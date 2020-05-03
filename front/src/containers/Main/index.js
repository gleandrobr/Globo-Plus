// react imports
import React from 'react'

import { Text } from 'react-native'

// third imports
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'

// project imports
import ProfileScreen from '../Profile'
import NotificationScreen from '../Notification'
import FeedScreen from '../Feed'

const Profile = () => (
  <Text>Profile</Text>
)
const Tab = createMaterialBottomTabNavigator()

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
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
        name='Home'
        component={FeedScreen}
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