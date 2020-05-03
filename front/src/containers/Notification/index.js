// React imports
import React from 'react'

// third imports
import IconOcticons from 'react-native-vector-icons/Octicons'

//local imports
import {
  GlobalStyle,

  Container,
  ContainerList,
  Text,
  Avatar,
  Reminder
} from './style'
import user from '../../static/images/person.png'

const NotificationScreen = () => {
  return (
    <Container>
      <ContainerList onPress={() => alert('clicou')}>
        <IconOcticons
          style={GlobalStyle.Icon}
          size={20}
          name='bell'
          color='#4623DE' />
        <Avatar source={user} />
        <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
        <Reminder />
      </ContainerList>

      <ContainerList>
        <IconOcticons
          style={GlobalStyle.Icon}
          size={20}
          name='bell'
          color='#4623DE' />
        <Avatar source={user} />
        <Text color={'#333'} size={'18px'}>Comentou em sua publicação</Text>
        <Reminder />
      </ContainerList>

      <ContainerList>
        <IconOcticons
          style={GlobalStyle.Icon}
          size={20}
          name='bell'
          color='#4623DE' />
        <Avatar source={user} />
        <Text color={'#333'} size={'18px'}>Reagiu em sua publicação</Text>
        <Reminder />
      </ContainerList>

      <ContainerList>
        <IconOcticons
          style={GlobalStyle.Icon}
          size={20}
          name='bell'
          color='#4623DE' />
        <Avatar source={user} />
        <Text color={'#333'} size={'18px'}>Começou a te seguir</Text>
        <Reminder />
      </ContainerList>

      <ContainerList>
        <IconOcticons
          style={GlobalStyle.Icon}
          size={20}
          name='bell'
          color='#4623DE' />
        <Avatar source={user} />
        <Text color={'#333'} size={'18px'}>Marcou você em uma publição</Text>
        <Reminder />
      </ContainerList>
    </Container>
  )
}

export default NotificationScreen