import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = props => {
  const { buttonStyle, textStyle } = styles
  return(
    <TouchableOpacity onPress={props.onPress}  style={buttonStyle}>
      <Text style={textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#1263aa',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1263aa',
    marginLeft: 15,
    marginRight: 15,
    height: 35
  }
})

export { Button }