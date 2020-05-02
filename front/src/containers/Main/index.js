// react imports
import React from 'react'

import { Text } from 'react-native'

// third imports
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'

// project imports
import ProfileScreen from '../Profile'
const Feed = () => (
  <Text>Feed</Text>
)
const Notifications = () => (
  <Text>Notifications</Text>
)
const Profile = () => (
  <Text>Profile</Text>
)
const Tab = createMaterialBottomTabNavigator()

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName='Profile'
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
        component={Notifications}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='home' color={color} size={26} />
          ),
        }} />
      <Tab.Screen
        name='Notifications'
        component={Profile}
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