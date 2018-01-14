import React, { Component } from 'react'
import firebase from 'firebase'

import { CardSection, Card, Button, Field, Spinner } from './common'
import { Text, StyleSheet } from 'react-native'

class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state={ email: '', password: '', error: '', loading: false }

    this.onButtonPress = this.onButtonPress.bind(this)
    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFail = this.onLoginFail.bind(this)
  }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }
  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner/>
    } else {
      return <Button text='Log in' onPress={this.onButtonPress}/>
    }
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
          {this.renderButton()}
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