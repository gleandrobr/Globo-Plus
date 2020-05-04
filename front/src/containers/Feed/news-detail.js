// react imports
import React from 'react'
import { ScrollView } from 'react-native'

// local imports
import {
  Container,
} from './style'
import NewsSession from '../../components/news'

const NewsDetails = () => {
  return (
    <Container>
      <ScrollView>
        <NewsSession
          image={require('../../static/images/receita.jpg')}
          like={false}
          type={true}
          hate={true}
          color='#2ED57B'
          text='Ana maria braga cria livro de receitas para pessoas de todas as idades' />
      </ScrollView>
    </Container>
  )
}

export default NewsDetails