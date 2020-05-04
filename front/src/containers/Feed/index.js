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


const Feed = (props) => {
  const movies = [
    { name: 'Procurando o Gustavo', image: require('../../static/images/procurando.jpg'), time: '1 hora e 30 min', age: 9 },
    { name: 'Duro de matar', image: require('../../static/images/duro.jpg'), time: '2 hora e 10 min', age: 16 },
    { name: 'Velozes e Furiosos 2', image: require('../../static/images/Velozes-furiosos-2.jpg'), time: '2 horas e 40 min', age: 12 },
    { name: 'Pixels', image: require('../../static/images/pixels.jpg'), time: '1 horas e 40 min', age: 9 },
    { name: 'Jogado nº1', image: require('../../static/images/jogador.png'), time: '2 horas e 20 min', age: 10 },
    { name: 'Moana', image: require('../../static/images/moana.jpg'), time: '2 horas', age: 9 },
    { name: 'Esquadrão suicida', image: require('../../static/images/suir.jpeg'), time: '2 horas e 60 min', age: 12 },
    { name: 'A culpa é das estrelas', image: require('../../static/images/culpa.jpg'), time: '2 horas e 30 min', age: 12 },
    { name: 'Vidas à derivas', image: require('../../static/images/vida.jpg'), time: '2 horas e 50 min', age: 12 },
    { name: 'Carros', image: require('../../static/images/carro.jpg'), time: '2 horas e 50 min', age: 12 },
    { name: 'Homem aranha no aranhaverso', image: require('../../static/images/spider.jpg'), time: '2 horas e 50 min', age: 12 }
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
                  onPress={() => props.navigation.navigate('MovieDetail', {
                    title: item.name,
                    image: item.image,
                    time: item.time,
                    minAge: item.age,
                  })}
                  key={index}
                  image={item.image}
                  title={item.name} />
              ))
            }

          </ScrollView>
        </ContainerMovies>

        <NewsSession
          onPress={() => props.navigation.navigate('NewsDetail', {
            title: 'Copa do mundo',
            text: 'O Brazil ta em comemoração!!!',
            image: require('../../static/images/copaAcre.jpg'),
          })}
          image={require('../../static/images/copaAcre.jpg')}
          like={true}
          type={true}
          title='Futebol'
          color='#2ED57B'
          text='Acre news: Brasil ganha a copa do mundo de 2002 e se torna pentacampeão.' />

        <NewsSession
          onPress={() => props.navigation.navigate('NewsDetail', {
            title: 'Razer com seu novo projeto.',
            text: 'Que tal um Pc que rode tudo?',
            image: require('../../static/images/Razer.jpg'),
          })}
          image={require('../../static/images/Razer.jpg')}
          like={true}
          type={true}
          title='Tecnologia'
          color='#0385CE'
          text='Razer anucia PC Ultra mega boladão.' />

        <NewsSession
          onPress={() => props.navigation.navigate('NewsDetail', {
            title: 'Aprenda a fazer pratos dos seu sonhos.',
            text: 'Melhores receitas.',
            image: require('../../static/images/culinaria.jpg'),
          })}
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
          onPress={() => props.navigation.navigate('MovieDetail', {
            title: 'Velozes e furiosos 8',
            image: require('../../static/images/velozes.jpg'),
            time: '2 horas e 50 min',
            minAge: 16,
          })}
          image={require('../../static/images/velozes.jpg')}
          like={false}
          type={false}
          hate={true}
          text='Velozes e furiosos 8' />

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
                  onPress={() => props.navigation.navigate('MovieDetail', {
                    title: item.name,
                    image: item.image,
                    time: item.time,
                    minAge: item.age,
                  })}
                  key={index}
                  image={item.image}
                  title={item.name} />
              ))
            }
          </ScrollView>
        </ContainerMovies>
      </ScrollView>
    </Container>
  )
}

export default Feed