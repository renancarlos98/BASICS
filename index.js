/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/routes';
import {name as appName} from './app.json';
import InitScreen from './src/screens/InitScreen';
import TestScreen from './src/screens/TestScreen';
import FinalScreen from './src/screens/FinalScreen';
import GameArea from './src/screens/GameArea';

AppRegistry.registerComponent(appName, () => App);
