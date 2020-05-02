import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #333;
  justify-content: center;
  align-items: center;
`
export const ContainerView = styled.View `
  flex: 1;
`

export const ContainerLogo = styled.View `
  margin: 15% auto;
`

export const ContainerItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: '#fff'
}) `
  width: 250px;
  border: none;
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  margin: 15px 0;
  padding: 1px;
  color: #fff;
`

export const HyperLink = styled.Text`
  color: #fff;
  margin: 15% auto;
  text-decoration: underline;
`

export const Icon = styled.View `
  position: absolute;
  right: 1px;
`

export const Button = styled.TouchableOpacity `
  width: 150px;
  height: 40px;
  padding: 1%;
  background: #4CAF50;
  align-items: center;
  margin: 0 auto;
  border: 2px solid #fff;
  border-radius: 12px;
  top: 5%;
`

export const Text = styled.Text `
  font-family: Arial;
  font-size: ${(props) => props.font || '16px'};
  color: ${(props) => props.color || '#fff'}
`