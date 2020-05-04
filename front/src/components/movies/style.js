import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const Container = styled.TouchableOpacity`
  display: flex;
  height: 250px;
  width: ${width * 0.40}px;
  margin-left: ${(props) => props.left || width * 0.05 + 'px'};
  margin-right: ${(props) => props.right || '0'};
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