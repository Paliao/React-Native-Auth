import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = props => {
  return(
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#a8a8a8',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
})

export { Card }