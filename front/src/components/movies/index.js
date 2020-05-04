// react imports
import React from 'react'

// local imports
import {
  Container,
  Title,
  ImageMovie,
} from './style'

const MovieSession = ({ image, title, left, right, onPress }) => {
  return (
    <Container left={left} right={right} onPress={onPress}>
      <ImageMovie source={image} />
      <Title>{title}</Title>
    </Container>
  )
}

export default MovieSession