// react imports
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'

// third imports
import SecureStorage from 'react-native-secure-storage'

// project imports
import { SecureStorageConfig, STORAGE_KEYS } from '../../utils'

// redux
import { checkUserToken } from '../../store/authentication/action'

// local imports
import {
  Container
} from './style'

import logo from '../../assets/logo.png'

const SplashScreen = (props) => {
  const [isCalledAPI, setCalledAPI] = useState(false)

  useEffect(() => {
    const { authentication } = props

    if(isCalledAPI) {
      if(authentication.valid)
        props.navigation.navigate('Home')
      else
        props.navigation.navigate('Login')
    }

    setTimeout(async () => {
      let authenticationToken = await SecureStorage.getItem(STORAGE_KEYS.AUTHENTICATION_TOKEN, SecureStorageConfig)

      if(authenticationToken) {
        setCalledAPI(true)
        await props.checkUserToken(authenticationToken)
      } else
        props.navigation.navigate('Login')
    }, 4000)
  }, [props.authentication])

  return (
    <Container>
      <Image source={logo} />
    </Container>
  )
}

const mapStateToProps = ({ authentication }) => {
  return {
    authentication
  }
}
export default connect(
  mapStateToProps, {
    checkUserToken
  }
)(SplashScreen)