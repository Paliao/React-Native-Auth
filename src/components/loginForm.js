import React, { Component } from 'react'
import firebase from 'firebase'

import { CardSection, Card, Button, Field } from './common'
import { Text, StyleSheet } from 'react-native'

class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state={ email: '', password: '', error: '' }

    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '' })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.'})
          })
      })
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Field
            label='Email'
            value={this.state.email}
            placeholder='user@gmail.com'
            onChangeText={ email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Field
            label='Password'
            secureTextEntry={true}
            value={this.state.password}
            placeholder='Password'
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button 
            text='Log in'
            onPress={this.onButtonPress}
          />
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

export default LoginForm