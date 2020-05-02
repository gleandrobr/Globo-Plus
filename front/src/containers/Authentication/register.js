// react imports
import React from 'react'
import { connect } from 'react-redux'

//Icons
import IconEf from 'react-native-vector-icons/MaterialIcons'
import IconUser from 'react-native-vector-icons/FontAwesome5'
import IconKey from 'react-native-vector-icons/Fontisto'


// third imports
import { withFormik } from 'formik'
// project imports
import { registerUser } from '../../store/authentication/action'

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
} from './styleRegister'
import logo from '../../assets/logo.png'

const RegisterScreen = (props) => {

  return (
    <Container>

      <ContainerLogo>
        <Logo source={logo} />
      </ContainerLogo>

      <ContainerView>
        <ContainerItem>
          <InputField
            placeholder='Digite seu email'
            value={props.values.username}
            onChangeText={text => props.setFieldValue('username', text)} />

          <Icon>
            <IconEf
              name='email'
              color='#fff'
              size={35}
            />
          </Icon>
        </ContainerItem>

        <ContainerItem>
          <InputField
            placeholder='Digite seu login'
            value={props.values.email}
            onChangeText={text => props.setFieldValue('email', text)} />

          <Icon>
            <IconUser
              name='user'
              color='#fff'
              size={35}
            />
          </Icon>
        </ContainerItem>

        <ContainerItem>
          <InputField
            placeholder='Digite sua senha'
            value={props.values.password}
            secureTextEntry
            onChangeText={text => props.setFieldValue('password', text)} />

          <Icon>
            <IconKey
              name='key'
              color='#fff'
              size={35}
            />
          </Icon>
        </ContainerItem>

        <Button onPress={props.handleSubmit}>
          <Text font={'20px'} >Conectar</Text>
        </Button>

        <HyperLink
          onPress={() => {
            props.navigation.navigate('Login')
          }}>
          Já possui uma conta?
        </HyperLink>
      </ContainerView>
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