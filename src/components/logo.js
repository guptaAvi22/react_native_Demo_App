import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
export default class logo extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Image  style={{width: 80, height: 90}}
                    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
                <Text  style={styles.log}>Welcome To {this.props.type} Page</Text>
            </View>
        ) 
    }
}
const styles = StyleSheet.create({
    container :{
      flexGrow : 1,
      alignItems : 'center',
      justifyContent:'center',
      
    },
    log:{
        marginVertical : 15,
        fontSize: 20,
        color: 'rgba(270,270,270,0.8)',
    }
  });