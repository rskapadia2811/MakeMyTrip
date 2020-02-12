import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {fonts} from '../../Helpers/variableHelper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../Helpers/screenHelper';
import {getAsyncData, setAsyncData} from '../../Helpers/AsyncStorage';
import LinearGradient from 'react-native-linear-gradient';
import GLOBAL from '../GLOBAL';
import SplashScreen from 'react-native-splash-screen';
class WelcomeSplashComponent extends Component {
  constructor() {
    super();
  }
  componentDidMount(): void {
    SplashScreen.hide();
  }

  welcomeSplashData = [
    {
      id: 1,
      image: require('@assets/Images/WelcomeSplashSlider/welcome1.png'),
    },
    {
      id: 2,
      image: require('@assets/Images/WelcomeSplashSlider/welcome2.png'),
    },
    {
      id: 3,
      image: require('@assets/Images/WelcomeSplashSlider/welcome3.png'),
    },
    {
      id: 4,
      image: require('@assets/Images/WelcomeSplashSlider/welcome4.png'),
    },
    {
      id: 5,
      image: require('@assets/Images/WelcomeSplashSlider/welcome5.png'),
    },
    {
      id: 6,
      image: require('@assets/Images/WelcomeSplashSlider/welcome6.png'),
    },
    {
      id: 7,
    },
  ];
  welcomeDataLoad = this.welcomeSplashData.map((item, index) => {
    if (index === 6) {
      return (
        <GLOBAL>
          <View style={{height: hp(100), width: wp(100)}}>
            <View style={Styles.gotoScreenContainer}>
              <Image
                source={require('../../Assets/Images/mmtLogo.png')}
                style={Styles.imageDesign}
              />
              <Text style={Styles.mmtText}>MakeMyTrip</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setAsyncData('welcomePage', '1');
                  this.props.navigation.navigate('HomeComponent');
                }}>
                <LinearGradient
                  colors={['#53b2fe', '#065af3']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={Styles.continueButtonContainer}>
                  <Text style={Styles.continueToMMTText}>Conitue to MMT</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </GLOBAL>
      );
    } else {
      return (
        <View>
          <StatusBar barStyle={'light-content'} />
          <Image
            resizeMode={'stretch'}
            source={item.image}
            style={{
              height: hp(100),
              width: wp(100),
            }}
          />
        </View>
      );
    }
  });
  render() {
    return (
      <ScrollView
        scrollEnabled={true}
        pagingEnabled={true}
        horizontal={true}
        scrollEventThrottle={1}>
        {this.welcomeDataLoad}
      </ScrollView>
    );
  }
}

const Styles = StyleSheet.create({
  gotoScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageDesign: {
    height: hp(10),
    width: hp(10),
  },
  mmtText: {
    fontSize: hp(4),
    marginTop: hp(1),
    fontFamily: fonts.latoLight,
  },
  continueButtonContainer: {
    justifyContent: 'center',
    padding: hp(2),
    width: wp(80),
    alignItems: 'center',
    bottom: hp(30),
    backgroundColor: 'red',
    borderRadius: 15,
  },
  continueToMMTText: {
    fontSize: hp(2),
    color: '#FFFFFF',
    fontFamily: fonts.latoBold,
  },
});
export default WelcomeSplashComponent;
