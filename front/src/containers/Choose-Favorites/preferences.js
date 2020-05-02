// react imports
import React from 'react'

import {
  Switch,
  ScrollView
} from 'react-native'

// third imports
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// local imports
import {
  Container,
  Title,

  Group,
  GroupTitle,
  GroupItem,
  GroupItemText
} from './style'

const PreferenceScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Title>Escolha suas {'\n'}preferências</Title>

        <Group>
          <GroupTitle color='#2ED57B'>Esportes</GroupTitle>

          <GroupItem>
            <GroupItemText>Futebol</GroupItemText>
            <Switch
                trackColor={{ false: '#767577', true: '#4623DE' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='#3e3e3e'
                // onValueChange={toggleSwitch}
                // value={darkTheme}
                />
          </GroupItem>
          <GroupItem>
            <GroupItemText>Futebol</GroupItemText>
            <Switch
                trackColor={{ false: '#767577', true: '#4623DE' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='#3e3e3e'
                // onValueChange={toggleSwitch}
                // value={darkTheme}
                />
          </GroupItem>
          <GroupItem>
            <GroupItemText>Futebol</GroupItemText>
            <Switch
                trackColor={{ false: '#767577', true: '#4623DE' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='#3e3e3e'
                // onValueChange={toggleSwitch}
                // value={darkTheme}
                />
          </GroupItem>
        </Group>

        <Group>
          <GroupTitle color='#F2D64B'>Esportes</GroupTitle>

          <GroupItem>
            <GroupItemText>Futebol</GroupItemText>
            <Switch
                trackColor={{ false: '#767577', true: '#4623DE' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='#3e3e3e'
                // onValueChange={toggleSwitch}
                // value={darkTheme}
                />
          </GroupItem>
          <GroupItem>
            <GroupItemText>Futebol</GroupItemText>
            <Switch
                trackColor={{ false: '#767577', true: '#4623DE' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='#3e3e3e'
                // onValueChange={toggleSwitch}
                // value={darkTheme}
                />
          </GroupItem>
          <GroupItem>
            <GroupItemText>Futebol</GroupItemText>
            <Switch
                trackColor={{ false: '#767577', true: '#4623DE' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='#3e3e3e'
                // onValueChange={toggleSwitch}
                // value={darkTheme}
                />
          </GroupItem>
        </Group>

        <Group>
          <GroupTitle color='#73412F'>Esportes</GroupTitle>

          <GroupItem>
            <GroupItemText>Futebol</GroupItemText>
            <Switch
                trackColor={{ false: '#767577', true: '#4623DE' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='#3e3e3e'
                // onValueChange={toggleSwitch}
                // value={darkTheme}
                />
          </GroupItem>
          <GroupItem>
            <GroupItemText>Futebol</GroupItemText>
            <Switch
                trackColor={{ false: '#767577', true: '#4623DE' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='#3e3e3e'
                // onValueChange={toggleSwitch}
                // value={darkTheme}
                />
          </GroupItem>
          <GroupItem>
            <GroupItemText>Futebol</GroupItemText>
            <Switch
                trackColor={{ false: '#767577', true: '#4623DE' }}
                thumbColor='#f4f3f4'
                ios_backgroundColor='#3e3e3e'
                // onValueChange={toggleSwitch}
                // value={darkTheme}
                />
          </GroupItem>
        </Group>

        <MaterialCommunityIcons
          name='arrow-right-thick'
          size={60}
          color='#fff'
          style={{ marginLeft: 'auto', marginRight: '2%' }}/>
      </ScrollView>
    </Container>
  )
}

export default PreferenceScreen