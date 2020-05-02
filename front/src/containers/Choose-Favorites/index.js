// react imports
import React, { useState } from 'react'
import {
  ScrollView,
  Text
} from 'react-native'

// third imports
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// local imports
import {
  Container,
  Title,
  OptionsContainer,
  OptionItem,
  OptionItemText,
  ButtonAction,
  ButtonActionText
} from './style'

const ChooseItem = ({color, icon, text, onPress, active}) => (
  <OptionItem color={color} onPress={onPress} active={active}>
    <MaterialCommunityIcons name={icon} size={90} />
    <OptionItemText>{text}</OptionItemText>
  </OptionItem>
)

const ChooseFavoritesScreen = () => {
  const [choose, setChoose] = useState([])

  const handleClick = (itemPos) => {
    let index = choose.indexOf(itemPos)
    if(index == -1)
      setChoose([...choose, itemPos])
    else {
      setChoose(choose.filter(item => item != itemPos))
    }

    console.log(itemPos)
    console.log(choose)
  }

  return (
    <Container>
      <ScrollView>
        <Title>Escolha seus favoritos</Title>

        <OptionsContainer>
          <ChooseItem
            color='#6C0A09'
            icon='movie-outline'
            text='Filme'
            active={choose.indexOf(1) != -1}
            onPress={() => handleClick(1)} />
          <ChooseItem
            color='#362516'
            icon='file-outline'
            text='Noticia'
            active={choose.indexOf(2) != -1}
            onPress={() => handleClick(2)} />
          <ChooseItem
            color='#9E8F31'
            icon='cookie'
            text='Cozinha'
            active={choose.indexOf(3) != -1}
            onPress={() => handleClick(3)} />
          <ChooseItem
            color='#90382B'
            icon='headphones'
            text='Música'
            active={choose.indexOf(4) != -1}
            onPress={() => handleClick(4)} />
          <ChooseItem
            color='#166A3A'
            icon='basketball'
            text='Esporte'
            active={choose.indexOf(5) != -1}
            onPress={() => handleClick(5)} />
          <ChooseItem
            color='#024D72'
            icon='cellphone-link'
            text='Tech'
            active={choose.indexOf(6) != -1}
            onPress={() => handleClick(6)} />
        </OptionsContainer>

        <ButtonAction>
          <ButtonActionText>Continuar</ButtonActionText>
        </ButtonAction>
      </ScrollView>
    </Container>
  )
}

export default ChooseFavoritesScreen