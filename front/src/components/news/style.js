import styled from 'styled-components'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`
export const NewsPhotos = styled.Image`
  width: 100%;
  height: 200px;
`
export const Title = styled.Text`
  margin: 1%;
  font-size: 18px;
  color: ${(props) => props.color || '#000'};
`
export const ContainerIcons = styled.View`
  margin: 2%;
  flex-direction: row-reverse;
`