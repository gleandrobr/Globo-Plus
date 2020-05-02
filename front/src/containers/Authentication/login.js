// react imports
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

//Icons
import IconUser from 'react-native-vector-icons/AntDesign'
import IconKey from 'react-native-vector-icons/Fontisto'


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
  HyperLink,
  ContainerLogo,
  ContainerView,
  ContainerItem,
  Icon,
  Button,
  Text
} from './styleLogin'

import logo from '../../assets/logo.png'

const LoginScreen = (props) => {

  useEffect(() => {
    const { authentication } = props

    if (Object.keys(authentication).length > 0) {
      if (authentication.hasOwnProperty('token')) {
        async function saveLogin() {
          await SecureStorage.setItem(STORAGE_KEYS.AUTHENTICATION_TOKEN, authentication.token, SecureStorageConfig)

          props.navigation.navigate('Register')  // TODO: redirect to home screen when create it
        }
        saveLogin()
      }
    }
  }, [props.authentication])

  return (
    <Container>
      <ContainerLogo>
        <Logo source={logo} />
      </ContainerLogo>
      <ContainerView>

        <ContainerItem>
          <InputField
            placeholder='Digite seu login'
            value={props.values.email}
            onChangeText={text => props.setFieldValue('email', text)}
          />
          <Icon>
            <IconUser
              name='user'
              size={35}
              color='#fff'
            />
          </Icon>
        </ContainerItem>
        <ContainerItem>
          <InputField
            placeholder='Digite sua senha'
            value={props.values.password}
            secureTextEntry
            onChangeText={text => props.setFieldValue('password', text)}
          />
          <Icon>
            <IconKey
              name='key'
              size={35}
              color='#fff'
            />
          </Icon>
        </ContainerItem>

        <Button onPress={props.handleSubmit}>
          <Text
            font={'20px'}
          >Conectar</Text>
        </Button>

        <HyperLink
          onPress={() => {
            props.navigation.navigate('Register')
          }}>
          Criar uma nova conta
        </HyperLink>
      </ContainerView>
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