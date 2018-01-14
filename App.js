import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'

import { Header } from './src/components/common'
import LoginForm from './src/components/loginForm'

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCdsq-Wyegwi5Hvbvp17pEAgDdVoTPb2eo',
      authDomain: 'paliao-auth.firebaseapp.com',
      databaseURL: 'https://paliao-auth.firebaseio.com',
      projectId: 'paliao-auth',
      storageBucket: 'paliao-auth.appspot.com',
      messagingSenderId: '867835900259'
    })
  }

  render() {
    return (
      <View>
        <Header title='Header' />
        <LoginForm/>
      </View>
    )
  }
}