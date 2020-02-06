import React, {useState, useEffect} from 'react';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {
  View,
  Image,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import CustomCheckBox from '../../../../Common/CustomCheckBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomIcon from '../../../../Common/CustomIcon';
import {fonts} from '../../../../Helpers/variableHelper';
import LinearGradient from 'react-native-linear-gradient';
import {lengthValidation} from '../../../../Helpers/validationHelper';
import CustomTextInput from '../../../../Common/CustomTextInput';

//
const LoginOTPBodyComponent = ({setVisibleButton, prevData, navigation}) => {
  const [otp, setOtp] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      let o = otp - 1;
      setOtp(o);
    }, 1000);
    return () => clearInterval(() => otpinterval);
  }, [otp]);

  return (
    <View style={{flex: 1}}>
      <View style={Styles.loginSignUpBodyContainer}>
        <Text style={Styles.loginCreateAccountText}>
          Verify Your Mobile Number
        </Text>
        <Text style={{...Styles.toViewOrEditProfileText}}>
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
              secureTextEntry={true}
              onChangeText={text => {
                setOtp(text);
                if (!isNaN(text) && lengthValidation(text, 6, 6)) {
                  setVisibleButton(true);
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
                style={{
                  disabled: otp == 0 ? true : false,
                  opacity: otp == 0 ? 1 : 0.5,
                }}>
                <Text style={{...Styles.resendOTPText}}>Resend OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const reRender = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
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
    color: '#2A5FBA',
    fontFamily: fonts.latoBold,
    fontSize: wp(3),
  },
  txtInput: {
    width: wp(90),
    marginTop: wp(5.5),
    fontSize: wp(4.5),
    borderBottomWidth: 2.5,
    borderBottomColor: '#2A5FBA',
    fontFamily: fonts.latoRegular,
  },
  btnApply: {
    position: 'absolute',
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF',
    padding: wp(3),
  },
  applyText: {
    fontSize: wp(4),
    color: '#2A5FBA',
    fontFamily: fonts.latoBold,
  },

  referralCodeContainer: {
    marginTop: wp(10),
  },
  referrelCode2Container: {},
  orConnectText: {
    fontSize: wp(3),
    fontFamily: fonts.latoBold,
    color: '#B4B4B4',
    marginTop: wp(8),
  },
  socialMediaConnectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: wp(6),
  },
  singleSocialMediaConnectContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: wp(3),
    width: wp(40),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {x: 5, y: 5},
    elevation: 10,
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
    color: '#2A5FBA',
    fontSize: wp(3.5),
  },
  twentySevenText: {
    fontFamily: fonts.latoBold,
    color: 'grey',
    fontSize: wp(3.5),
  },
});
export default LoginOTPBodyComponent;
