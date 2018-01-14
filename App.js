import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'

import { Button, Header, Spinner } from './src/components/common'
import LoginForm from './src/components/loginForm'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = { loggedIn: null }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCdsq-Wyegwi5Hvbvp17pEAgDdVoTPb2eo',
      authDomain: 'paliao-auth.firebaseapp.com',
      databaseURL: 'https://paliao-auth.firebaseio.com',
      projectId: 'paliao-auth',
      storageBucket: 'paliao-auth.appspot.com',
      messagingSenderId: '867835900259'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true})
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return(
        <Button 
          text='Log Out!'
          onPress={ () => firebase.auth().signOut() }
          />
        )
      case false:
        return <LoginForm/>
      default:
        return <Spinner />
    }
  }

  render() {
    return (
      <View style={{height: 125}}>
        <Header title='Header' />
        {this.renderContent()}
      </View>
    )
  }
}