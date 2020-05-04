//react imports
import React from 'react'
import { ScrollView } from 'react-native'

//local imports
import {
  Container,
  ContainerFavorite,
  ContainerText,
  Text,
  ImageFavorite,
  ContainerMovies,
} from './style'

// prooject imports
import MovieSession from '../../components/movies'
import NewsSession from '../../components/thumb'
import Receita from '../../static/images/receita.jpg'


const Feed = () => {
  const movies = [
    {name: 'Procurando o nemo', image: '../../static/images/procurando.jpg'}
  ]

  return (
    <Container>
      <ScrollView>
        <ContainerFavorite>
          <ImageFavorite source={Receita} />
          <ContainerText>
            <Text>Ana Maria Braga cria livro de receitas para pessoas de todas as idades</Text>
          </ContainerText>
        </ContainerFavorite>

        <Text
          font='bold'
          color='#000'
          size='25px'
          top='2%'>Filmes</Text>
        <ContainerMovies>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{ width: '100%' }}>
            {
              movies.map((item, index) => (
                <MovieSession
                  key={index}
                  image={require(item)}
                  title={item.name} />
              ))
            }

          </ScrollView>
        </ContainerMovies>

        <NewsSession
          image={require('../../static/images/copaAcre.jpg')}
          like={true}
          type={true}
          title='Futebol'
          color='#2ED57B'
          text='Acre news: Brasil ganha a copa do mundo de 2002 e se torna pentacampeão' />

        <NewsSession
          image={require('../../static/images/Razer.jpg')}
          like={true}
          type={true}
          title='Tecnologia'
          color='#0385CE'
          text='Razer anucia PC Ultra mega boladão' />

        <NewsSession
          image={require('../../static/images/culinaria.jpg')}
          like={true}
          type={true}
          hate={false}
          title='Receitas'
          color='#B59F33'
          text='Receitas & cia' />

        <Text
          font='bold'
          color='#000'
          size='25px'
          top='2%'>Em destaque</Text>
        <NewsSession
          image={require('../../static/images/velozes.jpg')}
          like={false}
          type={false}
          hate={true}
          text='Velozes e furiosos 15' />

        <Text
          font='bold'
          color='#000'
          size='25px'
          top='2%'>Veja mais</Text>
        <ContainerMovies>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{ width: '100%' }}>
            {
              movies.map((item, index) => (
                <MovieSession
                  key={index}
                  image={require('../../static/images/procurando.jpg')}
                  title={item} />
              ))
            }
          </ScrollView>
        </ContainerMovies>
      </ScrollView>
    </Container>
  )
}

export default Feed