import React, { Component } from 'react';

import { View, Dimensions, Fragment, Text, StyleSheet, TouchableOpacity, ImageBackground,Image } from 'react-native';
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";
import {Icon} from 'native-base';
import Lottie from 'lottie-react-native';

import trophy from '../../resources/trophy.json';



const {width:WIDTH}=Dimensions.get('screen');
const {height:HEIGHT}=Dimensions.get('screen');
// import { Container } from './styles';

export default class FinalScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={{flex:1}}>
        <ImageBackground source={require('../../resources/img/back.jpeg')} style={styles.image}>
            
            <View style={styles.scoreArea}>
                <TouchableOpacity>
                    <View style={styles.pointArea}>
                        <Text style={styles.text}>SUA PONTUAÇÃO</Text>
                        <Text style={styles.textPoint}>10</Text>
                        <Lottie  style={styles.imageTrophy} source={trophy} autoPlay loop/>
                        {/* <Image source={require('../../resources/img/trophyImage.png')} style={styles.imageTrophy}/> */}
                        <Text style={styles.textPress}>PRESSIONE PARA CONTINUAR</Text>
                       
                    </View>
                </TouchableOpacity>
            </View>
            
        </ImageBackground>
        </View>
    )
  }
};


const styles=StyleSheet.create({
  image:{
      flex:1
  },
  scoreArea:{
      width:WIDTH-40,
      height:HEIGHT-60,
      backgroundColor:'rgba(0,0,0,0.6)',
      alignSelf:'center',
      margin:20,
      elevation:10,
      borderRadius:10,
      alignItems:'center'
  },
  text:{
      fontSize:20,
      color:'white',
      alignSelf:'center'
  },
  textPoint:{
      fontSize:90,
      color:'white',
      fontWeight:'bold',
      alignSelf:'center'
  },
  pointArea:{
      width:WIDTH-60,
      height:HEIGHT-80,
      margin:10,
      elevation:10,
      borderWidth:1,
      borderColor:'white',
      borderRadius:10,
      backgroundColor:'rgba(76, 144, 205,0.7)',
      padding:10,
      alignItems:'center'
      
  },
  buttonStyle:{
    margin:10,
    justifyContent:'center',
    backgroundColor:'rgb(76, 144, 205)'
  },
  imageTrophy:{
      resizeMode:'contain',
      alignSelf:'center',
      width:WIDTH-100,
      height:WIDTH-100
  },
  textPress:{
      textAlign:'center',
      alignSelf:'center',
      color:'white',
      fontSize:25,
      margin:15,
      fontWeight:'800',
  }
})
