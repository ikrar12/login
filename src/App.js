import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyByf3WJfvSBz42yk8W8bnGOSmKfzO_K45s",
      authDomain: "project1-a3f1f.firebaseapp.com",
      databaseURL: "https://project1-a3f1f.firebaseio.com",
      projectId: "project1-a3f1f",
      storageBucket: "",
      messagingSenderId: "801435830739"
    });
  }
  render() {
    return(
      <View>
        <Header tulistex= 'masukkan akun'/>
        <LoginForm />
      </View>
    );
  }
}

export default App
