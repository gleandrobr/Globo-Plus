// react imports
import React from 'react'

import {
  View,
  ScrollView
} from 'react-native'

// third imports
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import FeatherIcons from 'react-native-vector-icons/Feather'

// local imports
import {
  GlobalStyle,
  Container,

  ListItem,
  ListItemText
} from '../style'

const ProfileSettings = () => {
  return (
    <Container>
      <ScrollView>
        <SimpleLineIcons  name='settings' size={120} style={GlobalStyle.settingsIcon} />

        <View style={{ marginTop: '5%' }}>
          <ListItem>
            <MaterialIcons size={28} name='person' />
            <ListItemText style={{ marginLeft: 10 }}>Conta</ListItemText>
          </ListItem>
          <ListItem>
            <Octicons size={28} name='bell' />
            <ListItemText style={{ marginLeft: 10 }}>Notificações</ListItemText>
          </ListItem>
          <ListItem>
            <FeatherIcons size={28} name='lock' />
            <ListItemText style={{ marginLeft: 10 }}>Privacidade e segurança</ListItemText>
          </ListItem>
          <ListItem>
            <SimpleLineIcons size={28} name='question' />
            <ListItemText style={{ marginLeft: 10 }}>Ajuda e suporte</ListItemText>
          </ListItem>
          <ListItem>
            <FeatherIcons size={28} name='info' />
            <ListItemText style={{ marginLeft: 10 }}>Sobre</ListItemText>
          </ListItem>
        </View>
      </ScrollView>
    </Container>
  )
}
export default ProfileSettings