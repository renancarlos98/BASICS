import React, { Component } from 'react';

import { View, Dimensions, Fragment, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";
import {Icon} from 'native-base';
import Voice from 'react-native-voice';
import Tts from  'react-native-tts';

const {width:WIDTH}=Dimensions.get('screen');
const {height:HEIGHT}=Dimensions.get('screen');
// import { Container } from './styles';
//------------------------------------------------------------------------------------------------------------------
export default class GameArea extends Component {

  

  state={
    // selectedVoice: pt-br-x-afs#female_3-local,
    // speechRate: 0.34,
    // speechPitch: 1.09,
    text1:  '',
    
};
    componentDidMount(){
        this.generateRandomNumber();
        
}


constructor(props){
    super(props);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    
    this.state={
        numberResult:'',
        number1:'',
        number2:'',
        randomFunc:'',
        text:'',
        texto:'',
        
    }
    
}
readText = () => {
  
    Tts.setDefaultLanguage("pt-BR");
    Tts.speak(this.state.text1, {
        androidParams: {KEY_PARAM_PAN: -1, KEY_PARAM_VOLUME: 0.3, KEY_PARAM_STREAM: 'STREAM_MUSIC'}
    });
          
    console.log(text1);
};

onSpeechResultsHandler(result){
        this.setState({
            ...this.state,
            texto:result.value[0]
        });
   }    
      

  onStartButtonPress(e){
    Voice.start('pt-BR');
    
  }
//------------------------------------------------------------------------------------------------------------------

generateRandomNumber=()=>{
  let n=0
  while(n<10){

  var randomFunc = Math.floor(Math.random()*2) + 1;
  var randomNumber_1 = Math.floor(Math.random()*10) + 1;
  var randomNumber_2 = Math.floor(Math.random()*10) + 1;
  this.setState({ number1 : randomNumber_1 })  
  this.setState({ number2 : randomNumber_2 })

  
  if(randomFunc==1){
      this.setState({text : '+'});
      this.setState({texto:''});
       return this.setState({numberResult : (randomNumber_1)+(randomNumber_2)})
      
    }
    else{
      this.setState({text : '-'});
      this.setState({texto:''});
      this.setState({ numberResult : (randomNumber_1)-(randomNumber_2) })  

      
       if(this.state.number2 > this.state.number1){
         var randomNumber_2 = Math.floor(Math.random()*10)+1;
         this.setState({ number2 : randomNumber_2 }) 
         console.log(this.state.number2);
         return this.setState({ numberResult : (randomNumber_1)-(randomNumber_2) })

       }
      
      
    }
      this.comparaNumero();
    
    n++
    if(n==4){
     navigator.navigate('FinalScreen')
    }
};
}

   comparaNumero=()=>{
    if(this.state.texto==this.state.numberResult){
      console.log('FUNCIONA')
      this.generateRandomNumber();
    }  
    else{
      console.log('FUNCIONA, MAS ERROU!')
      this.generateRandomNumber();
    }
   }
//--------------------------------------------------------------------------------------------------------------------

  render() {
    
    return(
      <View style={{flex:1}}>
        <ImageBackground source={require('../../resources/img/back.jpeg')} style={styles.image}>
            <View style={styles.header}>
              <Text style={styles.textBox}>QUESTÃO:</Text>
              
              <View style={styles.mathArea}>
                   <Text style={styles.caractere}>{this.state.number1}</Text>
                    <Text style={styles.caractere}>{this.state.text}</Text>
                    <Text style={styles.caractere}>{this.state.number2}</Text>
                    <Text style={styles.caractere}>=</Text>
                    <Text style={styles.caractere}>{this.state.texto}</Text>
              </View>
            </View>
              <View style={styles.buttonGroup} >
                <AwesomeButtonBlue type="secondary" width={(WIDTH/2)-20} height={(HEIGHT/2)} textSize={20} style={styles.button}
                  onPress={this.generateRandomNumber}> 
                  {/* this._startRecognizing */}
                  <View style={styles.insideButton}>
                    <Text style={styles.textButton}>RESPONDER</Text>
                    <Icon type='MaterialIcons' name='reply' style={styles.icon}/>
                  </View>
                </AwesomeButtonBlue>
                <AwesomeButtonBlue type="secondary" width={(WIDTH/2)-20} height={(HEIGHT/2)} textSize={20} style={styles.button}
                  onPress={this.onStartButtonPress}>
                  <View style={styles.insideButton}>
                    <Text style={styles.textButton}>REPETIR</Text>
                    <Icon type='Feather' name='repeat' style={styles.icon}/>
                  </View>
                </AwesomeButtonBlue>
            </View> 
            <Text style={styles.crono}>TEMPO 0:30</Text>
            </ImageBackground>
        </View>
    )
  }
};


const styles=StyleSheet.create({
  header:{
    width:WIDTH-20,
    height:150,
    backgroundColor:'white',
    borderWidth:1,
    borderBottomWidth:4,
    borderBottomColor:'#4d94ff',
    elevation:10,
    alignSelf:'center',
    margin:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10
  },
  mathArea:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    width:WIDTH-20,
    height:115,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    flexDirection:'row'
  },
  buttonGroup:{
    justifyContent:'center',
    alignSelf:'center',
    margin:10,
    flexDirection:'row',
  },
  textBox:{
      fontSize:20,
      color:'white',
      fontWeight:'bold',
      padding:5,
      width:WIDTH-20,
      height:35,
      backgroundColor:'#4d94ff',
      elevation:5,
  },
  image:{
      flex:1
  },
  crono:{
      alignSelf:'center',
      color:'white',
      fontSize:40,
      opacity:10,
      margin:10,
      fontWeight:'bold'
  },
  button:{
      margin:5,
      borderRadius:10,
      justifyContent:'center',
      borderColor:'#4d94ff'
      
  },
  textButton:{
    fontSize:22,
    alignSelf:'center',
    color:'black',
    margin:5,
  },
  icon:{
    fontSize:50,
    alignSelf:'center',
    color:'#4d94ff',
    marginTop:15
    
    
  },
  result:{
    alignSelf:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:40
},
caractere:{
    fontSize:30,
    fontWeight:'800',
    margin:10
},
  insideButton:{
    justifyContent:'center',
  },
  resultText:{
    fontSize:25,
    color:'black',
    alignSelf:'center'
  }
})
