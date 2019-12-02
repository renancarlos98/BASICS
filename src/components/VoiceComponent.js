import React, {Component} from 'react';
import { View } from 'react-native';
import Voice from 'react-native-voice';



export default class VoiceComp extends Component{
    state={
        results:[],
    };

    constructor(props){
        super(props);
        Voice._onSpeechStart = this.onSpeechStart;
        Voice._onSpeechResults = this.onSpeechResults;

    }
    onSpeechStart = e => {
        console.log('onSpeechStart: ',e);
    };

    onSpeechResults = e =>{
        console.log('onSpeechResults: ',e);
        this.setState({
            results:evalue,
        });
    };

    _startRecognizing = async () =>{
        this.setState({
            results:[]
        });

        try{
            await Voice.start('pt-BR');
        }
        catch (e) {
            console.error(e);
        }
    };

    
}

