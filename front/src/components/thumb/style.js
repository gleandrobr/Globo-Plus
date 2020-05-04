import styled from 'styled-components'

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop || '5%'};
`
export const PhotoContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NewsPhotos = styled.Image`
  width: 100%;
  height: 200px;
`
export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Title = styled.Text`
  margin: 2%;
  font-size: 18px;
  color: ${(props) => props.color || '#000'};
`
export const ContainerIcons = styled.View`
  margin: 2%;
  flex-direction: row-reverse;
`
export const Description = styled.Text`
  width: ${(props) => props.width || '96%'};
  margin: ${(props) => props.margin || '2% auto'};
  color: #575757;
`
export const AgeMin = styled.View`
 background-color: ${(props => props.color || "#24c74d")};
 width: ${(props) => props.width || '30px'};
 height: 30px;
 justify-content: center;
 align-items: center;
 margin-left: 3%;
`