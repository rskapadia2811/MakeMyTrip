import {createSwitchNavigator} from 'react-navigation';
import MAIN from '../Components/MAIN';
import LoginSignUpStackNavigator from './loginSignUpNavigator';
import BottomTabNavigator from './Bottom Tabs/bottomTabNavigator';
import WelcomeSplashComponent from '../Components/WelcomeSplash/welcomeSplashComponent';
const WelcomeSwitchNavigator = createSwitchNavigator({
  MAIN,
  LoginSignUpStackNavigator,
  WelcomeSplashComponent,
  BottomTabNavigator,
});

export default WelcomeSwitchNavigator;
