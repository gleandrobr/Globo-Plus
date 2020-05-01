// React imports
import React, { useState } from 'react'

import {
  View,
  Switch
} from 'react-native'

// third imports
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Octions from 'react-native-vector-icons/Octicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

// Project imports
// import BottomNavigation from '../../components/bottom-navigation'

// local imports
import {
  GlobalStyle,

  Container,
  Title,
  SubTitle,

  ProfileImage,
  ProfileInfoContent,
  ProfileInfoItem,

  ListItem
} from './style'

const ProfileScreen = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleSwitch = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <Container>
      <ProfileImage
        source={require('../../static/images/person.png')} />

      <Title>Profile name</Title>
      <ProfileInfoContent>
        <ProfileInfoItem>
          <SubTitle>Seguidores</SubTitle>
          <SubTitle>70</SubTitle>
        </ProfileInfoItem>
        <ProfileInfoItem>
          <SubTitle>Seguindo</SubTitle>
          <SubTitle>150</SubTitle>
        </ProfileInfoItem>
      </ProfileInfoContent>

      <View style={{ marginTop: '5%' }}>
        <ListItem>
          <FAIcon size={20} name='edit' />
          <SubTitle style={{ marginLeft: 10 }}>Alterar informações</SubTitle>
        </ListItem>
        <ListItem>
          <MaterialIcon size={20} name='local-movies' />
          <SubTitle style={{ marginLeft: 10 }}>Globo Play</SubTitle>
        </ListItem>
        <ListItem>
          <Octions size={20} name='settings' />
          <SubTitle style={{ marginLeft: 10 }}>Configurações</SubTitle>
        </ListItem>
        <ListItem>
          <FAIcon size={20} name='moon-o' />
          <SubTitle style={{ marginLeft: 10 }}>Modo escuro</SubTitle>
          <Switch
            trackColor={{ false: '#767577', true: '#4623DE' }}
            thumbColor='#f4f3f4'
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSwitch}
            value={darkTheme}
            style={GlobalStyle.darkThemeSwitch}/>
        </ListItem>
      </View>
    </Container>
  )
}
export default ProfileScreen