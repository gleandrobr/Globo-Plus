// react imports
import { Dimensions, StyleSheet } from 'react-native'

// third imports
import styled from 'styled-components'


export const GlobalStyle = StyleSheet.create({
  heathSelection: {
    color: 'red',
    position: 'absolute',
    fontSize: 70
  }
})

export const Container = styled.SafeAreaView`
  background: black;
  flex: 1;
  flex-direction: column;
`
export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  margin-top: 10%;
`
export const OptionsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10%;
  flex-wrap: wrap;
`
export const OptionItem = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width * 0.40}px;
  height: ${Dimensions.get('window').width * 0.40}px;
  background-color: ${props => props.color};
  border-radius: 24px;
  margin: 0 5% 10%;
  justify-content: center;
  align-items: center;
`
export const OptionItemText = styled.Text`
  position: absolute;
  font-size: 30px;
  color: #ddd;
  font-style: italic;
`

export const Group = styled.View`
  margin: 10% auto 0;
  width: 90%;
`
export const GroupTitle = styled.Text`
  display: flex;
  text-align: center;
  border-bottom-width: 3px;
  border-bottom-color: ${props => props.color};
  color: ${props => props.color};
  font-size: 28px;
  font-weight: bold;
`
export const GroupItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
  margin-top: 3%;
`
export const GroupItemText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`