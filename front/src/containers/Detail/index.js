import React from 'react'

import { Text, Button } from 'react-native'

const DetailScreen = ({ navigation }) => {
  return (
    <>
      <Text>Detail screen</Text>
      <Button title='Voltar' onPress={() => {
        navigation.goBack()
      }}/>
    </>
  )
}
export default DetailScreen