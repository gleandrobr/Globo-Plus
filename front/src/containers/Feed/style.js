import styled from 'styled-components'

export const Text = styled.Text`
  font-weight: ${(props) => props.font || 'normal'};
  margin-top: ${(props) => props.top || '0'};
  margin-left: ${(props) => props.left || '0'};
  align-content: center;
  text-align: ${(props) => props.textAlign || 'center'};
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.size || '16px'};
`
export const Container = styled.SafeAreaView`
  flex: 1;
`
export const ImageFavorite = styled.Image`
  height: 200px;
`
export const ContainerFavorite = styled.View`
  height: 200px;
  background: green;
`
export const ContainerText = styled.View`
  margin-top: auto;
  padding: 1%;
  height: 50px;
  background: rgba(0, 0, 0, .40);
`
export const ContainerMovies = styled.View`
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
`