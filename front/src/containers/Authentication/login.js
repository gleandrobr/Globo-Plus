// react imports
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//IconAntDesign
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFontisto from 'react-native-vector-icons/Fontisto'


// third imports
import { withFormik } from 'formik'
import SecureStorage from 'react-native-secure-storage'

// project imports
import { SecureStorageConfig, STORAGE_KEYS } from '../../utils'

// redux
import {
  loginUser,
  cleanAuthentication,
  failLogin
} from '../../store/authentication/action'
import { checkIsUserFirstLogin } from '../../store/user/action'

// local imports
import {
  Container,
  Logo,
  InputField,
  HyperLink,
  ContainerView,
  ContainerItem,
  Button,
  Text,
  ContainerForm
} from './styles'

import logo from '../../assets/logo.png'

//Global Styles
const GlobalStyle = StyleSheet.create({
  Icon: {
    position: "absolute",
    right: 1,
    bottom: 0,
  }
})

const LoginScreen = (props) => {

  useEffect(() => {
    const { authentication } = props

    if (Object.keys(authentication).length > 0) {
      if (authentication.hasOwnProperty('token')) {
        async function saveLogin() {
          await SecureStorage.setItem(STORAGE_KEYS.AUTHENTICATION_TOKEN, authentication.token, SecureStorageConfig)

          await props.checkIsUserFirstLogin(authentication.token)
        }
        saveLogin()
      }
    }
  }, [props.authentication])

  useEffect(() => {
    const callAPI = async () => {
      let authenticationToken = await SecureStorage.getItem(STORAGE_KEYS.AUTHENTICATION_TOKEN, SecureStorageConfig)

      if(authenticationToken) {
        if(props.user.is_first_login != undefined) {
          if(props.user.is_first_login) {
            props.navigation.replace('ChooseFavorites')
            await props.cleanAuthentication()
          } else {
            props.navigation.replace('Home')
            await props.cleanAuthentication()
          }
        }
      }
    }

    callAPI()
  }, [props.user])

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#333'}}>
      <Container>
        <Logo source={logo} />

        {
          props.authentication.login_fail && (
            <Text color='#ff3a24'>Verifique suas credenciais!</Text>
          )
        }

        <ContainerView>
          <ContainerItem>
            <ContainerForm>
              <InputField
                placeholder='Digite seu login'
                value={props.values.email}
                onChangeText={text => props.setFieldValue('email', text)} />
              <IconAntDesign
                style={GlobalStyle.Icon}
                name='user'
                size={25}
                color='#fff' />
            </ContainerForm>
          </ContainerItem>

          <ContainerItem>
            <ContainerForm>
              <InputField
                placeholder='Digite sua senha'
                value={props.values.password}
                secureTextEntry
                onChangeText={text => props.setFieldValue('password', text)} />
              <IconFontisto
                style={GlobalStyle.Icon}
                name='key'
                size={25}
                color='#fff' />
            </ContainerForm>
          </ContainerItem>

          <Button onPress={props.handleSubmit}>
            <Text font={'20px'} >Conectar</Text>
          </Button>

          <HyperLink
            onPress={() => {
              props.navigation.navigate('Register')
            }}>
            Criar uma nova conta
          </HyperLink>
        </ContainerView>
      </Container >
    </KeyboardAwareScrollView>
  )
}

const formikEnhancer = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  handleSubmit: async (values, { props }) => {
    await props.loginUser(values)
      .catch(() => {
        props.failLogin()
      })
  }
})(LoginScreen)

const mapStateToProps = ({ authentication, user }) => {
  return {
    authentication,
    user
  }
};

export default connect(
  mapStateToProps, {
    loginUser,
    checkIsUserFirstLogin,
    cleanAuthentication,
    failLogin
  }
)(formikEnhancer)