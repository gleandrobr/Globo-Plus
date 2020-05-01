// react imports
import React, { useEffect } from 'react'

// local imports
import {
  Container,
  Logo
} from './style'

const SplashScreen = (props) => {
  useEffect(() => {
      setTimeout(() => {
      props.navigation.navigate('Login')
    }, 4000)
  }, [])

  return (
    <Container>
      <Logo>Globo Plus</Logo>
    </Container>
  )
}
export default SplashScreen