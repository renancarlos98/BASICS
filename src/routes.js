import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import InitScreen from './screens/InitScreen';
import GameArea from './screens/GameArea';
import MainScreen from './screens/MainScreen';
import FinalScreen from './screens/FinalScreen';
import TrophyScreen from './screens/TrophyScreen';
import TestScreen from './screens/TestScreen';

const MainNavigator = createStackNavigator({
  Init: {screen: InitScreen},
  Main: {screen: MainScreen},
  Game: {screen:GameArea},
  Final: {screen:FinalScreen},
  Trophy: {screen:TrophyScreen},
  TesTe:{screen:TestScreen}
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
   );

const App = createAppContainer(MainNavigator);

export default App;

