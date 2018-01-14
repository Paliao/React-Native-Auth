import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Field = ({ label, value, onChangeText }) => {
  return(
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ height: 20, width: 100 }}
      />
    </View>
  )
}

export { Field }