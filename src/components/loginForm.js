import React, { Component } from 'react'

import { CardSection, Card, Button, Field } from './common'

class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state={ email: '', password: '' }
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

        <CardSection>
          <Button text='Log in'/>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm