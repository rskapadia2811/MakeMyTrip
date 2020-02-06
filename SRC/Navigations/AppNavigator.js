import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {color} from '../Helpers/variableHelper';
// Components
import HomeMainComponent from '../Components/Home/homeMainComponent';
import WelcomeSplashComponent from '../Components/WelcomeSplash/welcomeSplashComponent';
import LoginSignUpMainComponent from '../Components/Auth/LoginSignUp/loginSignUpMainComponent';
import MAIN from '../Components/MAIN';
import RegisterPasswordMainComponent from '../Components/Auth/RegisterPassword/registerPasswordMainComponent';
import RegisterFnameLnameDetailMainComponent from '../Components/Auth/FirstNameLastNameDetail/registerFnameLnameDetailMainComponent';
import LoginPasswordMainComponent from '../Components/Auth/LoginPassword/loginPasswordMainComponent';
import LoginOTPMainComponent from '../Components/Auth/LoginOTP/loginOTPMainComponent';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/screenHelper';

// Load Fonts
SimpleLineIcons.loadFont();
Entypo.loadFont();
MaterialCommunityIcons.loadFont();
Feather.loadFont();

// Login Signup Switch Navigator

const LoginSignUpStackNavigator = createStackNavigator(
  {
    LoginSignUpComponent: LoginSignUpMainComponent,
    RegisterPasswordComponent: RegisterPasswordMainComponent,
    LoginPasswordComponent: LoginPasswordMainComponent,
    RegisterFnameLnameDetailComponent: RegisterFnameLnameDetailMainComponent,
    LoginOTPComponent: LoginOTPMainComponent,
  },
  {
    headerMode: 'none',
  },
);
// Home Bottom Tab Stack avigator

const HomeStackNavigator = createStackNavigator(
  {
    HomeComponent: HomeMainComponent,
  },
  {headerMode: 'none'},
);

// Trips Bottom Tab Stack avigator

const TripsStackNavigator = createStackNavigator(
  {
    HomeComponent: HomeMainComponent,
  },
  {headerMode: 'none'},
);

// MMT Bottom Tab Stack avigator

const MMTStackNavigator = createStackNavigator(
  {
    HomeComponent: HomeMainComponent,
  },
  {headerMode: 'none'},
);

// Trip Ides Bottom Tab Stack avigator

const TripsIdeasStackNavigator = createStackNavigator(
  {
    HomeComponent: HomeMainComponent,
  },
  {headerMode: 'none'},
);

// Help Bottom Tab Stack avigator

const HelpStackNavigator = createStackNavigator(
  {
    HomeComponent: HomeMainComponent,
  },
  {headerMode: 'none'},
);

// Bottom Tab Navigator

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
            source={require('../Assets/Images/mmtLogo.png')}
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

const WelcomeSwitchNavigator = createSwitchNavigator({
  MAIN,
  LoginSignUpStackNavigator,
  WelcomeSplashComponent,
  BottomTabNavigator,
});

const AppNavigator = createAppContainer(WelcomeSwitchNavigator);
export default AppNavigator;

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
