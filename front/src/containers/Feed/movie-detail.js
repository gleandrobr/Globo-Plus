// react imports
import React from 'react'

import { ScrollView } from 'react-native'

// project imports
import MovieSession from '../../components/movies'
import ThumbSession from '../../components/thumb'

// local imports
import {
  Text,
  ContainerMovies
} from './style'

const MovieDetail = (props) => {
  return (
    <>
      <ScrollView>
        <ThumbSession
          image={props.route.params.image}
          like={false}
          type={false}
          hate={true}
          play={true}
          timeDuration={props.route.params.time}
          color='#0385CE'
          text={props.route.params.title}
          minAge={props.route.params.minAge}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "
          marginTop='0px' />

        {/* Filmes relacionados */}
        <Text
          font='bold'
          color='#000'
          size='18px'
          top='2%'>Filmes relacionados</Text>

        <ContainerMovies>
          <MovieSession
            onPress={() => props.navigation.navigate('MovieDetail', {
              title: 'Velozes e furiosos 2',
              image: require('../../static/images/Velozes-furiosos-2.jpg'),
              time: '2 horas e 40 min',
              minAge: 12,
            })}
            image={require('../../static/images/Velozes-furiosos-2.jpg')}
            title='Velozes e furiosos 2'
            left='auto'
            right='auto' />

          <MovieSession
            onPress={() => props.navigation.navigate('MovieDetail', {
              title: 'Duro de matar',
              image: require('../../static/images/duro.jpg'),
              time: '2 horas e 10 min',
              minAge: 16,
            })}
            image={require('../../static/images/duro.jpg')}
            title='Duro de matar'
            left='auto'
            right='auto' />
        </ContainerMovies>

        <ContainerMovies>
          <MovieSession
            onPress={() => props.navigation.navigate('MovieDetail', {
              title: 'Pixels',
              image: require('../../static/images/pixels.jpg'),
              time: '1 horas e 40 min',
              minAge: 9,
            })}
            image={require('../../static/images/pixels.jpg')}
            title='Pixels'
            left='auto'
            right='auto' />

          <MovieSession
            onPress={() => props.navigation.navigate('MovieDetail', {
              title: 'Velozes e furiosos 8',
              image: require('../../static/images/velozes.jpg'),
              time: '2 horas e 50 min',
              minAge: 16,
            })}
            image={require('../../static/images/velozes.jpg')}
            title='Velozes e furiosos 8'
            left='auto'
            right='auto' />
        </ContainerMovies>

        {/* romance */}
        <Text
          font='bold'
          color='#000'
          size='18px'
          top='2%'>Romance</Text>

        <ContainerMovies>
          <MovieSession
            onPress={() => props.navigation.navigate('MovieDetail', {
              title: 'A culpa é da estrelas',
              image: require('../../static/images/culpa.jpg'),
              time: '2 horas e 30 min',
              minAge: 16,
            })}
            image={require('../../static/images/culpa.jpg')}
            title='A culpa é da estrelas'
            left='auto'
            right='auto' />

          <MovieSession
            onPress={() => props.navigation.navigate('MovieDetail', {
              title: 'Vida à deriva',
              image: require('../../static/images/vida.jpg'),
              time: '2 horas e 50 min',
              minAge: 18,
            })}
            image={require('../../static/images/vida.jpg')}
            title='Vida à deriva'
            left='auto'
            right='auto' />
        </ContainerMovies>

        {/* animação */}
        <Text
          font='bold'
          color='#000'
          size='18px'
          top='2%'>Animações</Text>

        <ContainerMovies>
          <MovieSession
            onPress={() => props.navigation.navigate('MovieDetail', {
              title: 'Jogador nº1',
              image: require('../../static/images/carro.jpg'),
              time: '2 horas e 20 min',
              minAge: 9,
            })}
            image={require('../../static/images/carro.jpg')}
            title='Jogador nº1'
            left='auto'
            right='auto' />

          <MovieSession
            onPress={() => props.navigation.navigate('MovieDetail', {
              title: 'Homem aranha no aranhaverso',
              image: require('../../static/images/spider.jpg'),
              time: '2 horas e 30 min',
              minAge: 9,
            })}
            image={require('../../static/images/spider.jpg')}
            title='Homem aranha no aranhaverso'
            left='auto'
            right='auto' />
        </ContainerMovies>

        {/* news */}
        <Text
          font='bold'
          color='#000'
          size='18px'
          textAlign='left'
          left='2%'
          top='10%'>Se atualize do que acontece no mundo</Text>
        <Text
          color='#575757'
          size='14px'
          textAlign='left'
          left='2%'
          top='2%'>Mantenha-se informado das principais notícias no brasil e no mundo</Text>
        <ThumbSession
          onPress={() => props.navigation.navigate('NewsDetail', {
            title: 'Razer com seu novo projeto',
            text: 'Que tal um Pc que rode tudo?',
            image: require('../../static/images/Razer.jpg'),
          })}
          image={require('../../static/images/Razer.jpg')}
          like={true}
          type={false}
          hate={true}
          title='Tecnologia'
          color='#0385CE'
          text='Razer anucia PC Ultra mega boladão' />


        <ThumbSession
          onPress={() => props.navigation.navigate('NewsDetail', {
            title: 'Aprenda a fazer pratos dos seu sonhos',
            text: 'Melhores receitas',
            image: require('../../static/images/culinaria.jpg'),
          })}
          image={require('../../static/images/culinaria.jpg')}
          like={true}
          type={false}
          hate={true}
          title='Tecnologia'
          color='#B59F33'
          text='Razer anucia PC Ultra mega boladão' />
      </ScrollView>
    </>
  )
}
export default MovieDetail