import React, { Component } from 'react';

import { View, Dimensions, Fragment, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";
import { Icon } from 'native-base';


const {width:WIDTH}=Dimensions.get('screen');
const {height:HEIGHT}=Dimensions.get('screen');
// import { Container } from './styles';

export default class MainScreens extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={{flex:1}}>
        <ImageBackground source={require('../../resources/img/back.jpeg')} style={styles.image}>
            <View style={styles.header}>
              <Text style={styles.levelChoice}>SELECIONE A DIFICULDADE:</Text>
            </View>
              <View style={styles.buttonGroup} >
                <AwesomeButtonBlue type="secondary" width={WIDTH-20} height={(HEIGHT/3)-50} textSize={25} style={styles.buttonStyle}
                  onPress={()=> navigate('Game')}>
                  <View style={styles.insideButton}>
                    <Text style={styles.textButton}>FÁCIL</Text>
                    <Icon type='Feather' name='play' style={styles.icon}/>
                  </View>
                </AwesomeButtonBlue>
                <AwesomeButtonBlue type="secondary"  width={WIDTH-20} height={(HEIGHT/3)-50} textSize={25} style={styles.buttonStyle}
                  onPress={()=>navigate('Game')}>
                <View style={styles.insideButton}>
                    <Text style={styles.textButton}>INTERMEDIÁRIO</Text>
                    <Icon type='Feather' name='play' style={styles.icon}/>
                  </View>
                </AwesomeButtonBlue>
                <AwesomeButtonBlue type="secondary"  width={WIDTH-20} height={(HEIGHT/3)-50} textSize={25} style={styles.buttonStyle}
                  onPress={()=>navigate('Game')}>
                <View style={styles.insideButton}>
                    <Text style={styles.textButton}>DIFÍCIL</Text>
                    <Icon type='Feather' name='play' style={styles.icon}/>
                  </View>
                </AwesomeButtonBlue>
              </View> 
            </ImageBackground>
        </View>
    )
  }
};


const styles=StyleSheet.create({
  header:{
    width:WIDTH,
    height:50,
    backgroundColor:'white',
    borderWidth:1,
    borderBottomWidth:4,
    borderBottomColor:'#4d94ff',
    borderColor:'white',
    elevation:10,
    justifyContent:'center'
  },
  levelChoice:{
    color:'black',
    alignSelf: 'center',
    fontSize:25,
    fontWeight:'bold'
  },
  buttonGroup:{
  
    alignSelf:'center',
    //marginTop:30
  },
  textDific:{
    fontSize:30,
    alignSelf:'center',
    fontWeight:'bold',
    
  },
  image:{
    flex:1,
    opacity:3
  },
  buttonStyle:{
    margin:10,
    justifyContent:'center'
  },
  insideButton:{
    alignSelf:'center',
    justifyContent:'center'
  },
  icon:{
    alignSelf:'center',
    fontSize:40,
    marginTop:15,
    color:'#4d94ff',
    
  },
  textButton:{
    fontSize:30,
    fontWeight:'900'
  }
})
