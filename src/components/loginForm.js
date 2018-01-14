import React, { Component } from 'react'

import { CardSection, Card, Button, Field } from './common'

class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state={ email: '' }
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Field
            label='Email'
            value={this.state.text}
            placeholder='user@gmail.com'
            onChangeText={ email => this.setState({ email })} 
            style={ {height: 20, width: 100}}/>
        </CardSection>

        <CardSection/>

        <CardSection>
          <Button text='Log in'/>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm