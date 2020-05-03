import styled from 'styled-components'
import { StyleSheet } from 'react-native'

export const GlobalStyle = StyleSheet.create({
  Icon: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
  }
})

export const Container = styled.SafeAreaView`
`
export const ContainerView = styled.View`
  width: 70px;
  height: 70px;
`

export const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  margin: 1% 0;
  padding: 3%;
  align-items: center;
`
export const Reminder = styled.View`
  background: #0311FC;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  margin-left: 15%;
`

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border-width: 2px;
  border-color: #4623DE;
`

export const Text = styled.Text`
  margin-left: 5%;
  width: 50%;
  text-align: center;
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.size || '16px'};
`