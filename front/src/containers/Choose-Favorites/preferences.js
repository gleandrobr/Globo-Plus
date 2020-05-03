// react imports
import React, { useEffect, useState } from 'react'

import {
  Switch,
  ScrollView,
  ActivityIndicator
} from 'react-native'

import { connect } from 'react-redux'

// third imports
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SecureStorage from 'react-native-secure-storage'

// project imports
import { SecureStorageConfig, STORAGE_KEYS } from '../../utils'

// redux
import {
  fetchUserFavorites,
  fetchCategoriesOptions
} from '../../store/preferences/action'

// local imports
import {
  Container,
  Title,

  Group,
  GroupTitle,
  GroupItem,
  GroupItemText
} from './style'

const PreferenceScreen = (props) => {
  const fetchAPI = async () => {
    let authenticationToken = await SecureStorage.getItem(STORAGE_KEYS.AUTHENTICATION_TOKEN, SecureStorageConfig)

    if(authenticationToken) {
      props.fetchUserFavorites(authenticationToken)
      props.fetchCategoriesOptions(authenticationToken)
    } else {
      props.navigation.navigate('Login')
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const { preferences } = props

    if(preferences['favorites'] != undefined && preferences['results'] != undefined)
      setIsLoading(false)
  }, [props.preferences])

  const [selectedOptions, setSelectedOptions] = useState({})
  const toggleSwitch = (category, option) => {
    if(selectedOptions.hasOwnProperty(category)) {
      if(selectedOptions[category].indexOf(option) != -1) {
        setSelectedOptions({
          ...selectedOptions,
          [category]: selectedOptions[category].filter(item => item != option)
        })
      } else {
        setSelectedOptions({
          ...selectedOptions,
          [category]: [...selectedOptions[category], option]
        })
      }
    } else {
      setSelectedOptions({
        ...selectedOptions,
        [category]: [option]
      })
    }
  }

  const handleSubmit = () => {

  }

  if(isLoading) {
    return (
      <Container>
        <ActivityIndicator size='large' color='#4623DE' />
      </Container>
    )
  }

  const { preferences } = props
  return (
    <Container>
      <ScrollView>
        <Title>Escolha suas {'\n'}preferências</Title>
        {
          Object.keys(preferences['favorites']).map((category) => {
            const preference = preferences['favorites'][category]

            return (
              <Group key={category}>
                <GroupTitle color={preference.color}>{preference.name}</GroupTitle>

                {
                  Object.keys(preferences['results'][category]).map((option) => {
                    let active = false
                    if(selectedOptions[category] != undefined) {
                      active = selectedOptions[category].indexOf(option) != -1
                    }

                    return (
                      <GroupItem key={option}>
                        <GroupItemText>{preferences['results'][category][option].name}</GroupItemText>
                        <Switch
                          trackColor={{ false: '#767577', true: '#4623DE' }}
                          thumbColor='#f4f3f4'
                          ios_backgroundColor='#3e3e3e'
                          onValueChange={() => toggleSwitch(category, option)}
                          value={active} />
                      </GroupItem>
                    )
                  })
                }
              </Group>
            )
          })
        }
        <MaterialCommunityIcons
          name='arrow-right-thick'
          size={60}
          color='#fff'
          style={{ marginLeft: 'auto', marginRight: '2%' }}
          onClick={handleSubmit} />
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
    fetchUserFavorites,
    fetchCategoriesOptions
  }
)(PreferenceScreen)