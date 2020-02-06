// Trip Ides Bottom Tab Stack avigator

import {createStackNavigator} from 'react-navigation-stack';
import LoginSignUpNavigator from '../../loginSignUpNavigator';
import HomeMainComponent from '../../../Components/Home/homeMainComponent';

const TripsIdeasStackNavigator = createStackNavigator(
  {
    LoginSignUpStackNavigator: LoginSignUpNavigator,
    HomeComponent: HomeMainComponent,
  },
  {headerMode: 'none'},
);

export default TripsIdeasStackNavigator;
