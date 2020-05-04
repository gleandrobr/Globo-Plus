// react imports
import React from 'react'

// third imports
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

// local imports
import {
  Container,
  PhotoContainer,
  NewsPhotos,
  TitleContainer,
  Title,
  ContainerIcons,
  Description,
  AgeMin
} from './style'
import { View } from 'react-native'

const NewsSession = ({ title, text, image, color, hate, type, like, marginTop, description, play, timeDuration, minAge }) => {

  const renderStars = () => {
    let elements = []
    for (let i = 0; i < 5; i++) {
      elements.push(
        <IoniconsIcon
          key={i}
          name='md-star'
          color='#ffc107'
          size={18} />
      )
    }
    return elements
  }

  let params = {}
  if(marginTop != undefined)
    params['top'] = marginTop

  return (
    <Container marginTop={marginTop}>
      <PhotoContainer>
        <NewsPhotos source={image} />

        {
          play && (
            <AntDesignIcon name='playcircleo' size={70} style={{ position: 'absolute' }} color='#fff' />
          )
        }
      </PhotoContainer>
      {
        type && (
          <Title color={color}>{title}</Title>
        )
      }
      <TitleContainer>
        <Title>{text}</Title>
        {
          timeDuration && (
            <Description margin='2%' width='auto'>{timeDuration}</Description>
          )
        }
      </TitleContainer>
      {
        hate && (
          <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '2%' }}>
            {renderStars()}
            {
              minAge && (
                <AgeMin>
                  <Title color='white'>{minAge}</Title>
                </AgeMin>
              )
            }
          </View>
        )
      }

      {
        description && (
          <Description>{description}</Description>
        )
      }

      <ContainerIcons>
        <AntDesignIcon
          onPress={() => alert('compartilhou')}
          style={{ marginLeft: 15 }}
          name='sharealt'
          color='#333333'
          size={25} />
        <FontistoIcon
          onPress={() => alert('salvou')}
          style={{ marginLeft: 15 }}
          name='bookmark'
          color='#333333'
          size={25} />
        {
          like && (
            <IoniconsIcon
              onPress={() => alert('curtiu')}
              style={{ marginLeft: 15 }}
              name='ios-heart-empty'
              color='#333333'
              size={25} />
          )
        }
      </ContainerIcons>
    </Container>
  )
}

export default NewsSession