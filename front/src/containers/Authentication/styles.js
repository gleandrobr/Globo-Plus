import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #333;
  justify-content: center;
  align-items: center;
`

export const ContainerView = styled.View`
  flex: 1;
  width: 100%;
`
export const ContainerForm = styled.View`
  margin: 15px auto;
  height: 40px;
`

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;
  width: 250px;
  margin: auto;
`

export const Logo = styled.Image`
  margin: 20% auto;
  width: 150px;
  height: 150px;
`

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: '#fff'
})`
  width: 250px;
  height: 30px;
  border: none;
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  margin: 15px auto;
  padding: 1px;
  color: #fff;
`

export const HyperLink = styled.Text`
  color: #fff;
  margin: 20% auto;
  text-decoration: underline;
`

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  padding: 1%;
  background: ${(props) => props.background || '#4623DE'};
  align-items: center;
  margin: 0 auto;
  border: none;
  border-radius: 12px;
  top: 10%;
`

export const Text = styled.Text`
  font-family: Arial;
  font-size: ${(props) => props.font || '16px'};
  color: ${(props) => props.color || '#fff'}
`