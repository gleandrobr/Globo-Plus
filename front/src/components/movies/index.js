// react imports
import React from 'react'

// local imports
import {
  Container,
  Title,
  ImageMovie,
} from './style'

const MovieSession = ({ image, title }) => {
  return (
    <Container>
      <ImageMovie source={image} />
      <Title>{title}</Title>
    </Container>
  )
}

export default MovieSession