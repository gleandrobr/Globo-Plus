// react imports
import React, { useRef } from 'react'
import { ScrollView, Image } from 'react-native'

// local imports
import {
  Container,
  Text,
  ContainerNews,
  ContainerMovies
} from './style'
import ThumbSession from '../../components/thumb'
import MovieSession from '../../components/movies'
import Culinaria from '../../static/images/culinaria.jpg'

const NewsDetails = (props) => {
  const scroll = useRef(null)

  return (
    <Container>
      <ScrollView ref={scroll}>
        <ThumbSession
          onPress={() => props.navigation.navigate('NewsDetail', {
            text: 'O Brazil ta em comemoração!!!',
            image: require('../../static/images/copaAcre.jpg'),
          })}
          image={props.route.params.image}
          title={props.route.params.title}
          like={false}
          type={true}
          hate={true}
          marginTop='0px'
          text={props.route.params.text} />
        <ContainerNews>
          <Text
            textAlign='justify'
            color='#575757'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</Text>
          <Image
            source={Culinaria}
            style={{ width: "100%", marginTop: '5%', height: 200 }} />
          <Text
            textAlign='justify'
            top='5%'
            color='#575757'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</Text>

          {/* Noticias relacionadas */}
          <Text
            textAlign='left'
            font='bold'
            size='16px'
            top='5%'
            color='#000'>Noticias relacionadas</Text>
          <ThumbSession
            onPress={() => {
              props.navigation.navigate('NewsDetail', {
                title: 'Receitas & Cia.',
                image: require('../../static/images/receita.jpg'),
              })
              scroll.current.scrollTo({x: 0, y: 0})
            }}
            image={require('../../static/images/receita.jpg')}
            like={false}
            type={true}
            hate={true}
            color='#B59F33'
            marginTop='5%'
            text='Ana maria braga cria livro de receitas para pessoas de todas as idades' />

          <ThumbSession
            onPress={() => {
              props.navigation.navigate('NewsDetail', {
                title: 'Receitas & Cia.',
                image: require('../../static/images/bolo.jpg'),
              })
              scroll.current.scrollTo({x: 0, y: 0})
            }}
            image={require('../../static/images/bolo.jpg')}
            like={false}
            type={true}
            hate={true}
            color='#B59F33'
            marginTop='5%'
            text='Aprenda a fazer um bolo de cenoura muito delicioso' />

          {/* Ta afim de assistir um filme ? */}
          <Text
            font='bold'
            color='#000'
            size='18px'
            textAlign='left'
            left='2%'
            top='10%'>Ta afim de assistir um filme?</Text>
          <Text
            color='#575757'
            size='14px'
            textAlign='left'
            left='2%'
            top='2%'>Separamos alguns que são a sua cara</Text>

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
        </ContainerNews>
      </ScrollView>
    </Container>
  )
}

export default NewsDetails