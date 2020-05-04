// React imports
import React from 'react'
import { ScrollView } from 'react-native'

// third imports
import IconOcticons from 'react-native-vector-icons/Octicons'

//local imports
import {
  GlobalStyle,

  Container,
  ListItem,
  Text,
  Avatar,
  Reminder,
  ContainerView
} from './style'
import user from '../../static/images/person.png'

const NotificationScreen = () => {
  return (
    <Container>
      <ScrollView>
        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>

        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>

        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>

        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>

        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>

        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>

        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>

        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>

        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>

        <ListItem>
          <ContainerView>
            <Avatar source={user} />
            <IconOcticons
              style={GlobalStyle.Icon}
              size={20}
              name='bell'
              color='#4623DE' />
          </ContainerView>
          <Text color={'#333'} size={'18px'}>Compartilhou sua publicação</Text>
          <Reminder />
        </ListItem>
      </ScrollView>
    </Container>
  )
}

export default NotificationScreen