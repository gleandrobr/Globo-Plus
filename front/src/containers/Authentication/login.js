// react imports
import React from 'react'
import { connect } from 'react-redux'

import {
  TextInput,
  Button,
  View
} from 'react-native'

// third imports
import { withFormik } from 'formik'

// project imports
import { loginUser } from '../../store/authentication/action'

// local imports
import {
  Container,
  Logo,
  InputField
} from './style'

const LoginScreen = (props) => {
  return (
    <Container>
      <Logo>Globo Plus</Logo>

      <View>
        <InputField
          value={props.values.email}
          onChangeText={text => props.setFieldValue('email', text)} />

        <InputField
          value={props.values.password}
          onChangeText={text => props.setFieldValue('password', text)} />

        <Button
          onPress={props.handleSubmit}
          title='Login' />
      </View>
    </Container>
  )
}

const formikEnhancer = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  handleSubmit: (values, { props }) => {
    props.loginUser(values)
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