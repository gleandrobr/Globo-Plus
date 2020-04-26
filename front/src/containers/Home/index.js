// React imports
import React, { } from 'react'

import {
  SafeAreaView,
  Text,
  Button
} from 'react-native'

// containers
import { Container } from './styles'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <Text>Olá mundo</Text>
        <Button title='Nova tela' onPress={() => {
          navigation.navigate('Detail')
        }} />
      </Container>
    </SafeAreaView>
  )
}
export default HomeScreen