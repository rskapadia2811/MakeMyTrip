import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
SimpleLineIcons.loadFont();
Entypo.loadFont();
Feather.loadFont();
MaterialCommunityIcons.loadFont();
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Helpers/screenHelper';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStackNavigator from './Home/homeNavigator';
import HelpStackNavigator from './Help/helpNavigator';
import TripsStackNavigator from './Trips/tripsNavigator';
import MMTStackNavigator from './MMT/mmtNavigator';
import TripsIdeasStackNavigator from './Trip Ideas/tripIdeasNavigator';
import {color} from '../../Helpers/variableHelper';
import React from 'react';

const customTab = (navigation, focused, TintColor) => {
  const {routeName} = navigation.state;
  let IconName, title, IconTag;
  switch (routeName) {
    case 'HomeStackNavigator': {
      IconName = 'home';
      title = 'Home';
      IconTag = SimpleLineIcons;
      break;
    }
    case 'TripsStackNavigator': {
      IconName = 'suitcase';
      title = 'Trips';
      IconTag = Entypo;
      break;
    }
    case 'TripsIdeasStackNavigator': {
      IconName = 'info';
      title = 'Trips Ideas';
      IconTag = Feather;
      break;
    }
    case 'HelpStackNavigator': {
      IconName = 'message-text-outline';
      title = 'Help';
      IconTag = MaterialCommunityIcons;
      break;
    }
    case 'MMTStackNavigator': {
      return (
        <View>
          <Image
            source={require('../../Assets/Images/mmtLogo.png')}
            style={{height: wp(9), width: wp(9)}}
          />
        </View>
      );
    }
  }
  return (
    <View style={Styles.bottomBarSingleTabContainer}>
      <IconTag name={IconName} size={wp(6)} color={TintColor} />
      <Text
        style={[
          Styles.tabText,
          {
            color: TintColor,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};
const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStackNavigator,
    TripsStackNavigator,
    MMTStackNavigator,
    TripsIdeasStackNavigator,
    HelpStackNavigator,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        customTab(navigation, focused, tintColor),
    }),

    tabBarOptions: {
      style: {height: hp(7)},
      showLabel: false,
      activeTintColor: color.bottomBarActiveTabColor,
      inactiveTintColor: color.bottomIconColor,
      activeBackgroundColor: color.bottomBarActiveIconBackgroundColor,
      inactiveBackgroundColor: color.bottomBarInActiveIconBackgroundColor,
    },
  },
);

const Styles = StyleSheet.create({
  bottomBarSingleTabContainer: {
    alignItems: 'center',
    paddingTop: 4,
  },
  tabText: {
    fontSize: hp(1.3),
    textAlign: 'center',
  },
});

export default BottomTabNavigator;
