import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';
export default class form extends Component {
    render(){
        return (
            <View style={styles.container}>
              <TextInput 
                style={styles.inputBox} placeholder='Email-Id'
                placeholderTextColor = '#ffffff'
                selectionColor="#fff"
                keyboardType="email-address"/>  
              <TextInput style={styles.inputBox} 
                placeholder='Password'
                secureTextEntry = {true}
                placeholderTextColor = '#ffffff'
                selectionColor='#ffffff'/>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            
            </View>
        ) 
    }
}
const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
    },
    inputBox:{
        marginVertical : 10,
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:10,
        fontSize:16,
        color:'#ffffff',
    },
    button:{
      backgroundColor:'#1c313a',
        borderRadius:25,
        width:300,
        height:50,
        alignItems : 'center',
        justifyContent:'center',
        paddingHorizontal:10,
        marginVertical : 10,
    },
    buttonText:{
        fontSize:20,
        color:'#ffffff',
        alignItems : 'center',
    }
    
  });