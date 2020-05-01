//react imports
import React from 'react'
import { useNavigation } from '@react-navigation/native';

//local imports
import {
  Container,
  LogoView,
  Logo,
  ContainerBtn,
  ButtonLogin,
  ButtonRegister,
  Text
} from './styles'
import logo from '../../assets/logo.png'

const Home = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <LogoView>
        <Logo source={logo} />
      </LogoView>
      <ContainerBtn>
        <ButtonLogin onPress={() => navigation.navigate('Login')}>
          <Text font={'20px'}>Entrar</Text>
        </ButtonLogin>
        <ButtonRegister onPress={() => navigation.navigate('Register')}>
          <Text font={'20px'}>Registrar</Text>
        </ButtonRegister>
      </ContainerBtn>
    </Container>
  )
}

export default Home