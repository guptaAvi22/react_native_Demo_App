import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from '../components/logo';
import Form from '../components/form';
export default class login extends Component {
  
  render(){
      return (
          <View style={styles.container}>
              <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
              <Logo type="Login"/>
              <Form/>
              <View style={styles.textsign}>
                <Text style={styles.signupText}>Don't have an accont yet ?</Text>
                <Text style={styles.signUpInput} 
                  onPress={() =>Actions.sign()} >Sign-in</Text>
              </View>
          </View>
      ) 
  }
}

const styles = StyleSheet.create({
    container :{
      backgroundColor : '#455a64',
      flexGrow : 1,
      alignItems : 'center',
      justifyContent : 'center',
    },
    textsign:{
      flexGrow:1,
      alignItems:'flex-end',
      justifyContent : 'flex-end',
      flexDirection: 'row',
      paddingVertical: 16,
      paddingLeft:65,
    },
    signupText:{
      fontSize:18,
      color: 'rgba(255,255,255,0.6)',

    },
    signUpInput:{
      flexGrow:1,
      fontSize:20,
      fontWeight:'500',
      color: 'rgba(255,255,255,0.8)',
    }
  });
