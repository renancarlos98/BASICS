import React, { Component } from 'react';

import { View, Dimensions, Fragment, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TouchableHighlight  } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Tts from 'react-native-tts';


const {width:WIDTH}=Dimensions.get('screen');
const {height:HEIGHT}=Dimensions.get('screen');
// import { Container } from './styles';


export default class InitScreen extends Component {

  state = {
    voices: [],
    ttsStatus: "initiliazing",
    selectedVoice: null,
    speechRate: 0.5,
    speechPitch: 1,
    text: "This is an example text"
  };

  readText = async () => {
    Tts.stop();
    Tts.speak(this.state.text);
  };

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={{flex:1, backgroundColor:'rgba(76, 144, 205,0.7)'}}>
        <TouchableHighlight onPress={()=> navigate('Main')}>
        <View style={styles.buttonInit}>
          <Image source={require('../../resources/img/Basics.png')} style={styles.logo}/>
          <Text style={styles.textButton}>Pressione para continuar</Text>
        </View>
        </TouchableHighlight>
        
        </View>
    )
  }
};

const styles=StyleSheet.create({
    logo:{
        width:WIDTH-70,
        height:HEIGHT/2,
        alignSelf:'center',
        resizeMode:'contain'
    },
    buttonInit:{
      width:WIDTH-40,
      height:HEIGHT-60,
      alignSelf:'center',
      backgroundColor:'white',
      justifyContent:'center',
      borderWidth:1,
      borderRadius:10,
      elevation:10,
      margin:10,
    },
    textButton:{
      fontSize:20,
      alignSelf:'center',
      fontWeight:'bold',
      marginTop:25,
      color:'rgb(76, 144, 205)'
    }
})