// react imports
import React from 'react'

// local imports
import {
  Container,
  Title,
  ImageMovie,
} from './style'

const MovieSession = ({ image, title, left, right }) => {
  return (
    <Container left={left} right={right}>
      <ImageMovie source={image} />
      <Title>{title}</Title>
    </Container>
  )
}

export default MovieSession