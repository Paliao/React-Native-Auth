import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = props => {
  const { containerStyle, textSytle } = styles
  return(
    <View style={containerStyle}>
      <Text style={textSytle}>
        {props.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    backgroundColor: '#e8e8e8',
    elevation: 10
  },
  textSytle: {
    fontSize: 20
  }
})

export { Header }