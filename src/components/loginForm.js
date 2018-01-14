import React, { Component } from 'react'

import { CardSection, Card, Button, Field } from './common'

class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state={ text: '' }
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Field
            value={this.state.text}
            onChangeText={ text => this.setState({ text })} 
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