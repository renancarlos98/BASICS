import React, { Component } from 'react';

import { View, Dimensions, Fragment, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";
import {Icon} from 'native-base';


const {width:WIDTH}=Dimensions.get('screen');
const {height:HEIGHT}=Dimensions.get('screen');
// import { Container } from './styles';

export default class TrophyScreen extends Component {
  render() {
    return(
      <View style={{flex:1}}>
        <ImageBackground source={require('../../resources/img/back.jpeg')} style={styles.image}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>PONTUAÇÃO</Text>
          </View>
          <View style={styles.groupTrophy}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../../resources/img/trophyImage.png')} style={styles.imageTrophy}/>
            <Text style={styles.number}>5</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../../resources/img/trophyImage.png')} style={styles.imageTrophy}/>
            <Text style={styles.number}>2</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../../resources/img/trophyImage.png')} style={styles.imageTrophy}/>
            <Text style={styles.number}>7</Text>
          </View>
          </View>
        </ImageBackground>
    </View>
    )
  }
};


const styles=StyleSheet.create({
  header:{
    width:WIDTH-20,
    height:50,
    alignSelf:'center',
    margin:10,
    borderBottomWidth:2,
    borderColor:'white'
  },
  imageTrophy:{
    width:WIDTH/2,
    height:WIDTH/3,
    alignSelf:'center',
    resizeMode:'contain',
    margin:10

    
  },
  areaPoint:{
    width:WIDTH-20,
    height:HEIGHT/3,
    justifyContent:'center',
    alignSelf:'center',
  },
  number:{
    fontSize:80,
    color:'white',
    fontWeight:'bold',
    alignSelf:'center'
  },
  image:{
    flex:1
  }, 
  groupTrophy:{
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:'rgba(0,0,0,0.6)',
    width:WIDTH-20,
    height:HEIGHT-100,
    opacity:10,
    borderRadius:10,
    elevation:8
  },
  textHeader:{
    fontSize:30,
    alignSelf:'center',
    fontWeight:'bold',
    color:'white',
    padding:5

  }
})
