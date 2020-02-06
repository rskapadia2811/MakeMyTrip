// MMT Bottom Tab Stack avigator

import {createStackNavigator} from 'react-navigation-stack';
import HomeMainComponent from '../../../Components/Home/homeMainComponent';

const MMTStackNavigator = createStackNavigator(
  {
    HomeComponent: HomeMainComponent,
  },
  {headerMode: 'none'},
);

export default MMTStackNavigator;
