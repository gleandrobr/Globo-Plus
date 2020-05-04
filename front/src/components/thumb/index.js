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

const NewsSession = ({ onPress, title, text, image, color, hate, type, like, marginTop, description, play, timeDuration, minAge }) => {

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
  if (marginTop != undefined)
    params['top'] = marginTop


  let colorAge = '#000'
  if (minAge < 10)
    colorAge = '#178031'
  else if (minAge < 12)
    colorAge = '#1435a3'
  else if (minAge < 14)
    colorAge = '#b5c716'
  else if (minAge < 16)
    colorAge = '#d18411'
  else if (minAge < 18)
    colorAge = '#d41b0b'

  return (
    <Container marginTop={marginTop} onPress={onPress}>
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
                <AgeMin color={colorAge} width={(minAge < 10) ? '60px' : '30px'}>
                  {
                    minAge >= 10 ? (
                      <Title color='white'>{minAge}</Title>
                    ) : (
                        <Title color='white'>Livre</Title>
                      )

                  }

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