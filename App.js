import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Header } from './src/components/common'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title='Header' />
        <Text>Some random text</Text>
      </View>
    )
  }
}