import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const Container = styled.View`
  display: flex;
  height: 250px;
  width: ${width * 0.40}px;
  margin-left: ${width * 0.05}px;
`
export const Title = styled.Text`
  color: #000;
  font-size: 20px;
  text-align: center;
`
export const ImageMovie = styled.Image`
  width: 100%;
  height: 200px;
`