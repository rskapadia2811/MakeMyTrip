import React from 'react';
import {createAppContainer} from 'react-navigation';
import WelcomeSwitchNavigator from './welcomeSplashNavigator';

const AppNavigator = createAppContainer(WelcomeSwitchNavigator);
export default AppNavigator;
