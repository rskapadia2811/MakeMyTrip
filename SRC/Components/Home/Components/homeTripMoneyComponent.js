import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from '../../../Helpers/variableHelper';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../Helpers/screenHelper';
const HomeTripMoneyComponent = () => {
  return (
    <View style={Styles.tripMoneyMainContainer}>
      <View style={Styles.tripMoneyContainer}>
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
        <View style={Styles.betweenDivContainer}>
          <Text style={Styles.whatAreYouText}>
            What are you waiting for? Get your limit now!
          </Text>
          <View style={Styles.checkAvailablityContainer}>
            <Text style={Styles.checkEligiblityText}>Check Eligiblity</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  tripMoneyMainContainer: {
    backgroundColor: '#FFFFFF',
    height: hp(40),
  },
  tripMoneyContainer: {
    backgroundColor: '#1e1058',
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
    borderColor: '#1E1058',
  },
  rsText: {
    color: '#1E1058',
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
    color: '#BE9731',
  },
  betweenDivContainer: {
    width: wp(80),
    height: hp(10),
    backgroundColor: 'white',
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
    bottom: hp(-6),
  },
  whatAreYouText: {
    fontSize: hp(1.5),
    fontFamily: fonts.latoRegular,
  },
  checkAvailablityContainer: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
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
    color: '#59A0F2',
    fontFamily: fonts.latoBlack,
  },
});

export default HomeTripMoneyComponent;
