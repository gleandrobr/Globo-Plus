// react imports
import React from 'react'

import { ScrollView } from 'react-native'

// project imports
import MovieSession from '../../components/movies'
import ThumbSession from '../../components/thumb'
import Receita from '../../static/images/receita.jpg'

// local imports
import {
  Text,
  ContainerMovies
} from './style'

const MovieDetail = () => {
  return (
    <>
      <ScrollView>

        <ThumbSession
          image={require('../../static/images/velozes.jpg')}
          like={false}
          type={false}
          hate={true}
          play={true}
          timeDuration='1 hora e 30 min'
          title='Tecnologia'
          color='#0385CE'
          text='Velozes e furiosos 15'
          minAge='16'
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
            image={require('../../static/images/procurando.jpg')}
            title='Procurando o gustavo'
            left='auto'
            right='auto' />

          <MovieSession
            image={require('../../static/images/duro.jpg')}
            title='Procurando o gustavo'
            left='auto'
            right='auto' />
        </ContainerMovies>

        <ContainerMovies>
          <MovieSession
            image={require('../../static/images/duro.jpg')}
            title='Procurando o gustavo'
            left='auto'
            right='auto' />

          <MovieSession
            image={require('../../static/images/procurando.jpg')}
            title='Procurando o gustavo'
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
            image={require('../../static/images/procurando.jpg')}
            title='Procurando o gustavo'
            left='auto'
            right='auto' />

          <MovieSession
            image={require('../../static/images/duro.jpg')}
            title='Procurando o gustavo'
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
            image={require('../../static/images/procurando.jpg')}
            title='Procurando o gustavo'
            left='auto'
            right='auto' />

          <MovieSession
            image={require('../../static/images/duro.jpg')}
            title='Procurando o gustavo'
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
          image={require('../../static/images/Razer.jpg')}
          like={true}
          type={false}
          hate={true}
          title='Tecnologia'
          color='#0385CE'
          text='Razer anucia PC Ultra mega boladão' />


        <ThumbSession
          image={require('../../static/images/Razer.jpg')}
          like={true}
          type={false}
          hate={true}
          title='Tecnologia'
          color='#0385CE'
          text='Razer anucia PC Ultra mega boladão' />
      </ScrollView>
    </>
  )
}
export default MovieDetail