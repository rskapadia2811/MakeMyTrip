import {createStackNavigator} from 'react-navigation-stack';
import HomeMainComponent from '../../../Components/Home/homeMainComponent';
import FlightSearchMainComponent from '../../../Components/Category/Flight/FlightSearch/flightSearchMainComponent';
import SearchAirportCityMainComponent from '../../../Components/Category/Flight/SearchAirportCity/searchAirportCityMainComponent';
import DateSelectionComponent from '../../../Components/DateSelectionComponent/dateSelectionComponent';
import TravellersAndClassMainComponent from '../../../Components/Category/Flight/TravellersAndClass/travellersAndClassMainComponent';
import FlightDisplayMainComponent from '../../../Components/Category/Flight/FlightDisplay/flightDisplayMainComponent';
// Flight Stack Navigator
const FlightStackNavigator = createStackNavigator(
  {
    FlightSearchComponent: FlightSearchMainComponent,
    FlightDisplayComponent: FlightDisplayMainComponent,
    SearchAirportCityComponent: SearchAirportCityMainComponent,
    DateSelectionComponent,

    TravellersAndClassComponent: TravellersAndClassMainComponent,
  },
  {
    headerMode: 'none',
  },
);
FlightStackNavigator.navigationOptions = ({navigation}) => {
  let tabBarVisible = navigation.state.index > 0 ? false : true;
  return {
    tabBarVisible,
  };
};
// Home Bottom Tab Stack avigator

const HomeStackNavigator = createStackNavigator(
  {
    HomeComponent: HomeMainComponent,
    FlightStackNavigator,
  },
  {headerMode: 'none'},
);
HomeStackNavigator.navigationOptions = ({navigation}) => {
  let tabBarVisible = navigation.state.index > 0 ? false : true;
  return {
    tabBarVisible,
  };
};

export default HomeStackNavigator;
