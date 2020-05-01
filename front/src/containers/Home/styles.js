import styled from 'styled-components'

export const Container = styled.View `
  flex: 1;
  background: #333;
`

export const Text = styled.Text `
  font-family: Arial;
  font-size: ${(props) => props.font || '16px'};
  color: ${(props) => props.color || '#fff'}
`

export const LogoView = styled.View `
  margin-top: 30%;
  margin-left: 30%;

`

export const Logo = styled.Image `
  height: 150px;
  width: 150px;
`

export const ContainerBtn = styled.View`
  width: 100%;
`

export const ButtonLogin = styled.TouchableOpacity `
  margin: 20% auto 0; 
  width: 150px;
  height: 40px;
  padding: 1%;
  border: 2px solid #fff;
  background: #4CAF50;
  align-items: center;
  border-radius: 12px;
`

export const ButtonRegister = styled.TouchableOpacity `
  margin: 10% auto; 
  width: 150px;
  height: 40px;
  padding: 1%;
  border: 2px solid #fff;
  background: #1976D2;
  align-items: center;
  border-radius: 12px;
`
