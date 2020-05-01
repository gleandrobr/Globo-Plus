import styled from 'styled-components'
import { StyleSheet } from 'react-native'

export const GlobalStyle = StyleSheet.create({
  darkThemeSwitch: {
    marginLeft: 'auto',
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
  }
})

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`
export const ProfileImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 75px;
  margin: 5% auto;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 26px;
  color: #000C00;
  text-align: center;
`
export const SubTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: #333333;
`

export const ProfileInfoContent = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
`
export const ProfileInfoItem = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5%;
  width: 40%;
`
export const ListItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-top: 4%;
`