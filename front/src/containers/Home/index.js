// React imports
import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import {
  SafeAreaView,
  Text,
  Button
} from 'react-native'

// containers
import { Container } from './styles'

// redux
import { fetchPost } from '../../store/post/action'

const HomeScreen = (props) => {
  useEffect(() => {
    props.fetchPost({ 'teste': 'Olá pessoal vamos testar isso aqui' })
  }, [])

  return (
    <SafeAreaView>
      <Container>
        <Text>Olá mundo</Text>
        <Text>{props.user ? props.user.more : 'Carregando'}</Text>
        <Button title='Nova tela' onPress={() => {
          props.navigation.navigate('Detail')
        }} />
      </Container>
    </SafeAreaView>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(
  mapStateToProps, {
    fetchPost
  }
)(HomeScreen)