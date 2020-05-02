// react imports
import React, { useEffect } from 'react'
import { Image } from 'react-native'

// local imports
import {
  Container
} from './style'

import logo from '../../assets/logo.png'

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login')
    }, 4000)
  }, [])

  return (
    <Container>
      <Image source={logo} />
    </Container>
  )
}
export default SplashScreen