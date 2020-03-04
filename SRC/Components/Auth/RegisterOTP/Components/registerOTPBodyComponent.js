import React, {useState, useEffect} from 'react';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {myColors} from '../../../../Helpers/ColorHelper';
import {fonts} from '../../../../Helpers/variableHelper';
import {lengthValidation} from '../../../../Helpers/validationHelper';
import CustomTextInput from '../../../../Common/CustomTextInput';

//
const RegisterOTPBodyComponent = ({
  setVisibleButton,
  prevData,
  theme,
  navigation,
}) => {
  const [otp, setOtp] = useState(10);
  const [disable, setDisable] = useState(true);
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (otp != 0) {
        setOtp(otp - 1);
      } else {
        setOpacity(1);
        setDisable(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [otp]);
  return (
    <View style={{flex: 1, backgroundColor: myColors.primaryBGColor[theme]}}>
      <View style={Styles.loginSignUpBodyContainer}>
        <Text
          style={{
            ...Styles.loginCreateAccountText,
            color: myColors.primaryTextColor[theme],
          }}>
          Verify Your Mobile Number
        </Text>
        <Text
          style={{
            ...Styles.toViewOrEditProfileText,
            color: myColors.primaryTextColor[theme],
          }}>
          Enter OTP sent to {navigation.getParam('data').phone}
        </Text>
        <View style={{...Styles.textInputContainer}}>
          <View>
            <CustomTextInput
              maxLength={6}
              keyboardType={'number-pad'}
              placeHolderText={'Enter OTP'}
              autoFocus={true}
              returnKeyType={'next'}
              onChangeText={text => {
                if (!isNaN(text) && lengthValidation(text, 6, 6)) {
                  prevData.OTP = text;
                  setVisibleButton(true, prevData);
                } else {
                  setVisibleButton(false);
                }
              }}
            />
            <View style={{...Styles.autoFetchContainer}}>
              <Text style={{...Styles.autoFetchText}}>
                Auto Fetching OTP sent via SMS
              </Text>
              <Text style={{...Styles.twentySevenText}}>{otp}s</Text>
            </View>
            <View style={{...Styles.resendOtpContainer}}>
              <TouchableOpacity
                disabled={disable}
                style={{
                  opacity: opacity,
                }}>
                <Text
                  style={{
                    ...Styles.resendOTPText,
                    color:
                      theme === 'light'
                        ? myColors.lightBlue
                        : myColors.darkPink,
                  }}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  loginSignUpBodyContainer: {
    justifyContent: 'center',
    padding: wp(2),
    marginLeft: wp(3),
    marginRight: wp(3),
  },
  loginCreateAccountText: {
    color: 'black',
    fontSize: wp(6),
    fontFamily: fonts.latoBold,
  },
  toViewOrEditProfileText: {
    color: 'black',
    fontSize: wp(4),
    marginTop: wp(1),
    fontFamily: fonts.latoRegular,
  },
  countrySelectionContainer: {
    flexDirection: 'row',
    paddingBottom: wp(1.1),
    padding: wp(2),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  plus91Text: {
    marginLeft: wp(2),
    fontSize: wp(4.1),
  },
  textInputContainer: {
    marginTop: wp(5.5),
    flexDirection: 'row',
  },
  enterMobileEmailText: {
    position: 'absolute',
    color: myColors.lightBlue,
    fontFamily: fonts.latoBold,
    fontSize: wp(3),
  },
  txtInput: {
    width: wp(90),
    marginTop: wp(5.5),
    fontSize: wp(4.5),
    borderBottomWidth: 2.5,
    borderBottomColor: myColors.lightBlue,
    fontFamily: fonts.latoRegular,
  },
  autoFetchContainer: {
    flexDirection: 'row',
    marginTop: wp(4),
    justifyContent: 'space-between',
  },
  autoFetchText: {
    fontFamily: fonts.latoRegular,
    color: 'grey',
    fontSize: wp(3.5),
  },
  resendOtpContainer: {
    flexDirection: 'row',
    marginTop: wp(10),
    justifyContent: 'space-between',
  },
  resendOTPText: {
    fontFamily: fonts.latoBold,
    color: myColors.lightBlue,
    fontSize: wp(3.5),
  },
  twentySevenText: {
    fontFamily: fonts.latoBold,
    color: 'grey',
    fontSize: wp(3.5),
  },
});
export default RegisterOTPBodyComponent;
