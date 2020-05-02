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
  /* ${({ active }) => active && `
    border: 2px solid #43e051;
  `} */
`
export const OptionItemText = styled.Text`
  position: absolute;
  font-size: 30px;
  color: #ddd;
  font-style: italic;
`