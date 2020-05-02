// react imports
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
  Button,
  View,
  Text
} from 'react-native'

// third imports
import { withFormik } from 'formik'
import SecureStorage from 'react-native-secure-storage'

// project imports
import { loginUser } from '../../store/authentication/action'
import { SecureStorageConfig, STORAGE_KEYS } from '../../utils'

// local imports
import {
  Container,
  Logo,
  InputField,
  HyperLink
} from './style'

const LoginScreen = (props) => {

  useEffect(() => {
    const { authentication } = props

    if(Object.keys(authentication).length > 0) {
      if(authentication.hasOwnProperty('token')) {
        async function saveLogin() {
          await SecureStorage.setItem(STORAGE_KEYS.AUTHENTICATION_TOKEN, authentication.token, SecureStorageConfig)

          props.navigation.navigate('Home')
        }
        saveLogin()
      }
    }
  }, [props.authentication])

  return (
    <Container>
      <Logo>Globo Plus</Logo>

      <View>
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
          title='Login' />

        <HyperLink
          onPress={() => {
            props.navigation.navigate('Register')
          }}>
          Criar uma nova conta
        </HyperLink>
      </View>
    </Container>
  )
}

const formikEnhancer = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  handleSubmit: async (values, { props }) => {
    await props.loginUser(values)
      .catch(() => {
        // TODO: Show error message when login fail
        const { authentication } = props
        console.log(authentication.message)
      })
  }
})(LoginScreen)

const mapStateToProps = ({ authentication }) => {
  return {
    authentication
  }
};

export default connect(
  mapStateToProps, {
    loginUser
  }
)(formikEnhancer)