import styled from 'styled-components'
import { StyleSheet } from 'react-native'

export const GlobalStyle = StyleSheet.create({
  Icon: {
    zIndex: 1,
    position: 'absolute',
    left: 65,
    top: 60,
  }
})

export const Container = styled.SafeAreaView`
  flex: 1;
`
export const ContainerList = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  margin: 1% 0;
  padding: 3%;
  align-items: center;
`
export const Reminder = styled.View`
  background: #0311FC;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  left: 90%;
`

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  left: 10%;
  border-radius: 50px;
  border-width: 2px;
  border-color: #4623DE;
`

export const Text = styled.Text`
  left: 30%;
  width: 50%;
  text-align: center;
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.size || '16px'};
`