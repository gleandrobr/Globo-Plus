// react imports
import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  Text
} from 'react-native'

import { connect } from 'react-redux'

// third imports
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SecureStorage from 'react-native-secure-storage'

// project imports
import { SecureStorageConfig, STORAGE_KEYS } from '../../utils'

// redux
import { setUserPreferences } from '../../store/preferences/action'

// local imports
import {
  GlobalStyle,

  Container,
  Title,
  OptionsContainer,
  OptionItem,
  OptionItemText,
} from './style'

const ChooseItem = ({color, icon, text, onPress, active}) => (
  <OptionItem color={color} onPress={onPress} active={active}>
    <MaterialCommunityIcons name={icon} size={90} />
    <OptionItemText>{text}</OptionItemText>
    {
      active && (
        <MaterialCommunityIcons name='heart' style={GlobalStyle.heathSelection} />
      )
    }
  </OptionItem>
)

const ChooseFavoritesScreen = (props) => {
  const [choose, setChoose] = useState([])

  const handleClick = (itemPos) => {
    let index = choose.indexOf(itemPos)
    if(index == -1)
      setChoose([...choose, itemPos])
    else {
      setChoose(choose.filter(item => item != itemPos))
    }
  }

  const handleNextStep = async () => {
    let authenticationToken = await SecureStorage.getItem(STORAGE_KEYS.AUTHENTICATION_TOKEN, SecureStorageConfig)

    if(authenticationToken) {
      props.setUserPreferences({ favorites_choices: choose }, authenticationToken)
    } else {
      props.navigation.navigate('Login')
    }
  }

  useEffect(() => {
    const { preferences } = props

    if(preferences.successfully)
      props.navigation.navigate('ChoosePreferences')
    else  // error on request
      return
  }, [props.preferences])

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

        <MaterialCommunityIcons
          name='arrow-right-thick'
          size={60}
          color='#fff'
          style={{ marginLeft: 'auto', marginRight: '2%' }}
          onPress={handleNextStep} />
      </ScrollView>
    </Container>
  )
}

const mapStateToProps = ({ preferences }) => {
  return {
    preferences
  }
}

export default connect(
  mapStateToProps, {
    setUserPreferences
  }
)(ChooseFavoritesScreen)