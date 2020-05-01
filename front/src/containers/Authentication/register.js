// react imports
import React from 'react'
import { connect } from 'react-redux'

import {
  Button,
  View,
  Text
} from 'react-native'

// third imports
import { withFormik } from 'formik'
// project imports
import { registerUser } from '../../store/authentication/action'

// local imports
import {
  Container,
  Logo,
  InputField,
  HyperLink
} from './style'

const RegisterScreen = (props) => {

  return (
    <Container>
      <Logo>Globo Plus</Logo>

      <View>
        <Text>Nome de usuário</Text>
        <InputField
          value={props.values.username}
          onChangeText={text => props.setFieldValue('username', text)} />

        <Text>Email</Text>
        <InputField
          value={props.values.email}
          onChangeText={text => props.setFieldValue('email', text)} />

        <Text>Senha</Text>
        <InputField
          value={props.values.password}
          onChangeText={text => props.setFieldValue('password', text)} />

        <Button
          onPress={props.handleSubmit}
          title='Cadastrar' />

        <HyperLink
          onPress={() => {
            props.navigation.navigate('Login')
          }}>
          Já possui uma conta?
        </HyperLink>
      </View>
    </Container>
  )
}

const formikEnhancer = withFormik({
  mapPropsToValues: () => ({ email: '', password: '', username: '' }),

  handleSubmit: async (values, { props }) => {
    await props.registerUser(values)
      .then(async () => {
        // then register, ask to user login again
        props.navigation.navigate('Login')
      })
      .catch(() => {
        // TODO: error feedback
      })
  }
})(RegisterScreen)

const mapStateToProps = ({ authentication }) => {
  return {
    authentication
  }
};

export default connect(
  mapStateToProps, {
    registerUser
  }
)(formikEnhancer)