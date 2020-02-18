import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from '../../../Helpers/variableHelper';
import LinearGradient from 'react-native-linear-gradient';
import {myColors} from '../../../Helpers/ColorHelper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../Helpers/screenHelper';
const HomeTripMoneyComponent = ({theme}) => {
  debugger;
  return (
    <View
      style={{
        ...Styles.tripMoneyMainContainer,
        backgroundColor: myColors.primaryBGColor[theme],
      }}>
      <LinearGradient
        colors={myColors.gradiantColor3[theme]}
        style={Styles.tripMoneyContainer}>
        {/*Trip Money Text Container*/}
        <View style={Styles.tripMoneyTextMainContainer}>
          <View style={Styles.rsRoundOuterContainer}>
            <View style={Styles.rsRoundInnerContainer}>
              <Text style={Styles.rsText}>&#8377;</Text>
            </View>
          </View>
          <View style={Styles.tripMoneyTextContainer}>
            <Text style={Styles.tripMoneyText}>TripMoney</Text>
            <Text style={Styles.travelOnEasyEmiText}>Travel on easy EMIs</Text>
          </View>
        </View>
        <View style={Styles.twoMinTextContainer}>
          <Text style={Styles.twoMinText}>
            2 min instant approval for credit
          </Text>
          <Text style={[Styles.twoMinText, {marginTop: hp(0.5)}]}>
            upto
            <Text style={Styles.lakhRsText}>&#8377;1,00,000</Text>
          </Text>
        </View>
      </LinearGradient>
      <View
        style={{
          ...Styles.betweenDivContainer,
          backgroundColor: myColors.primaryBGColor[theme],
        }}>
        <Text
          style={{
            ...Styles.whatAreYouText,
            color: myColors.primaryTextColor[theme],
          }}>
          What are you waiting for? Get your limit now!
        </Text>
        <View style={Styles.checkAvailablityContainer}>
          <Text style={Styles.checkEligiblityText}>Check Eligiblity</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  tripMoneyMainContainer: {
    marginTop: wp(2),
    height: hp(40),
  },
  tripMoneyContainer: {
    height: hp(25),
  },
  rsRoundOuterContainer: {
    height: wp(11),
    width: wp(11),
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rsRoundInnerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: wp(10),
    width: wp(10),
    borderRadius: 20,
    borderWidth: 3,
    borderColor: myColors.royalBlue,
  },
  rsText: {
    color: myColors.royalBlue,
    fontSize: hp(2.5),
  },
  tripMoneyTextMainContainer: {
    flexDirection: 'row',
    margin: wp(4),
  },
  tripMoneyTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: wp(2.5),
  },
  tripMoneyText: {
    color: 'white',
    fontFamily: fonts.latoLight,
    fontSize: hp(2.8),
  },
  travelOnEasyEmiText: {
    color: 'white',
    fontSize: hp(2),
    fontFamily: fonts.latoRegular,
    marginTop: -2,
  },
  twoMinTextContainer: {
    marginLeft: wp(10),
  },
  fontSize: hp(2.5),
  twoMinText: {
    color: 'white',
    fontFamily: fonts.latoBold,
  },
  lakhRsText: {
    color: myColors.ukkerYellow,
  },
  betweenDivContainer: {
    width: wp(80),
    height: hp(10),
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: wp(2.5),
    paddingTop: hp(1.2),
    shadowColor: 'black',
    shadowRadius: 15,
    shadowOpacity: 0.3,
    elevation: 10,
    shadowOffset: {x: 0, y: 0},
    padding: 7,
    bottom: hp(9),
  },
  whatAreYouText: {
    fontSize: hp(1.5),
    fontFamily: fonts.latoRegular,
  },
  checkAvailablityContainer: {
    position: 'absolute',
    backgroundColor: myColors.white,
    padding: hp(1.0),
    paddingLeft: wp(6),
    paddingRight: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    right: wp(3),
    bottom: hp(-2),
    shadowColor: 'black',
    borderRadius: 15,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 10,
    shadowOffset: {x: 0, y: -5},
  },
  checkEligiblityText: {
    fontSize: hp(1.5),
    color: myColors.skyBlue,
    fontFamily: fonts.latoBlack,
  },
});

export default HomeTripMoneyComponent;
