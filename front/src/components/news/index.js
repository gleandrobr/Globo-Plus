// react imports
import React from 'react'

// third imports
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

// local imports
import {
  Container,
  NewsPhotos,
  Title,
  ContainerIcons,
} from './style'
import { View } from 'react-native'

const NewsSession = ({ title, text, image, color, hate, type, like }) => {

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

  return (
    <Container>
      <NewsPhotos source={image} />
      {
        type && (
          <Title color={color}>{title}</Title>
        )
      }
      <Title>{text}</Title>
      {
        hate && (
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {renderStars()}
          </View>
        )
      }
      <ContainerIcons>
        <AntDesignIcon
          onPress={() => alert('compartilhou')}
          style={{ marginLeft: 15 }}
          name='sharealt'
          size={35} />
        <FontistoIcon
          onPress={() => alert('salvou')}
          style={{ marginLeft: 15 }}
          name='bookmark'
          size={35} />
        {
          like && (
            <IoniconsIcon
              onPress={() => alert('curtiu')}
              style={{ marginLeft: 15 }}
              name='ios-heart-empty'
              size={35} />
          )
        }
      </ContainerIcons>
    </Container>
  )
}

export default NewsSession