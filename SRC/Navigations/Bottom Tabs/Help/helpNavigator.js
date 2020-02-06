import {createStackNavigator} from 'react-navigation-stack';
import HomeMainComponent from '../../../Components/Home/homeMainComponent';

const HelpStackNavigator = createStackNavigator(
  {
    HomeComponent: HomeMainComponent,
  },
  {headerMode: 'none'},
);

export default HelpStackNavigator;
