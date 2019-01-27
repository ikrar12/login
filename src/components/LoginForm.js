import React, {Component} from 'react'
import { Text,} from 'react-native'
import { Button, CardSection, Card, Input } from './common'

class LoginForm extends Component{
  state= { email: '', password: '', error: '' };


  initializeFirebase() {
    const firebase = require("firebase")
    const { email,password } =this.state

      this.setState({ error: '' })

      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() =>{
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() =>{
              this.setState({ error: 'auntentication Failed.' })
            })
        })
    }


  render() {
    return(
      <Card>

        <CardSection>
          <Input
             placeholder= 'user@gmail.com'
             label = 'Email'
             value= { this.state.email }
             onChangeText= { email => this.setState ({ email })}
           />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder= 'password'
            label= 'password'
            value= { this.state.password }
            onChangeText= { password => this.setState ({ password })}
          />
        </CardSection>

        <Text style={ styles.errorTextStyle }>
          { this.state.error }
        </Text>

        <CardSection>
          <Button onPress={()=>this.setState({error})>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles ={
  errorTextStyle: {
    fontSize:20,
    alignSelf:'center',
    color: 'red'
  }
}

export default LoginForm;
