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
import ava from '../../static/images/ava.jpg'
import buu from '../../static/images/buu.jpg'
import joao from '../../static/images/joao.jpg'
import julia from '../../static/images/julia.jpg'
import karol from '../../static/images/karol.jpg'
import marcela from '../../static/images/marcela.jpg'
import mit from '../../static/images/mit.jpg'
import paula from '../../static/images/paula.jpg'
import pedro from '../../static/images/pedro.jpg'
import sther from '../../static/images/sther.jpg'

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
            <Avatar source={ava} />
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
            <Avatar source={buu} />
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
            <Avatar source={joao} />
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
            <Avatar source={julia} />
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
            <Avatar source={sther} />
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
            <Avatar source={marcela} />
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
            <Avatar source={karol} />
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
            <Avatar source={mit} />
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
            <Avatar source={paula} />
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
            <Avatar source={pedro} />
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