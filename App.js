/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  Router,
  Scene,
  Stack,
}from 'react-native-router-flux';
import Login from './src/pages/login';
import Register from './src/pages/signup';




export default class App extends Component {
  render(){
    return (
        <Router>
          <Stack key="root" hideNavBar={true}>
            <Scene key="log" component ={Login} title="login" initial={true}/>
            <Scene key="sign" component ={Register} title="login"/>
          </Stack>
        </Router>
      
    );
  }
}


const styles = StyleSheet.create({
  container :{
    backgroundColor : '#455a64',
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  }
});

