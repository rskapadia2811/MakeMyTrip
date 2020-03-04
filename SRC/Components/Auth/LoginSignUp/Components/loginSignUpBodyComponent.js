import React, {useState} from 'react';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import CustomCheckBox from '../../../../Common/CustomCheckBox';
import CustomTextInput from '../../../../Common/CustomTextInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomIcon from '../../../../Common/CustomIcon';
import {fonts} from '../../../../Helpers/variableHelper';
import LinearGradient from 'react-native-linear-gradient';
import {emailValidation, isNumber} from '../../../../Helpers/validationHelper';
import {myColors} from '../../../../Helpers/ColorHelper';
const LoginSignUpBodyComponent = ({emailMobileCheck, theme}) => {
  const forceUpdate = reRender();
  let [isMobileNumber, setIsMobileNumber] = useState('none');
  const [visibleButton, setVisibleButton] = useState(false);
  const [isReferal] = useState([]);
  const [mobileEmail, setMobileEmail] = useState('');
  return (
    <View style={Styles.loginSignUpBodyContainer}>
      <Text
        style={{
          ...Styles.loginCreateAccountText,
          color: myColors.primaryTextColor[theme],
        }}>
        Login/Create Account
      </Text>
      <Text
        style={{
          ...Styles.toViewOrEditProfileText,
          color: myColors.primaryTextColor[theme],
        }}>
        to view or edit your profile
      </Text>
      <View style={{...Styles.textInputContainer}}>
        <View
          style={{
            ...Styles.countrySelectionContainer,
            display: isMobileNumber,
          }}>
          <Image
            source={require('../../../../Assets/Images/Flags/indiaFlag.png')}
            style={{height: wp(5), width: wp(7)}}
          />
          <Text
            style={{
              ...Styles.plus91Text,
              color: myColors.primaryTextColor[theme],
            }}>
            +91
          </Text>
        </View>
        <View>
          <CustomTextInput
            style={{
              width: isMobileNumber === 'flex' ? wp(50) : wp(70),
            }}
            returnKeyType={'next'}
            placeHolderText={'Enter Mobile No./Email'}
            onChangeText={text => {
              setMobileEmail(text);
              if (text.length >= 3 && isNumber(text) && text.length <= 10) {
                setIsMobileNumber('flex');
                if (text.length === 10) {
                  setVisibleButton(true);
                } else {
                  setVisibleButton(false);
                }
              } else {
                setIsMobileNumber('none');
                if (emailValidation(text)) {
                  setVisibleButton(true);
                } else {
                  setVisibleButton(false);
                }
              }
            }}
          />
        </View>
        <TouchableOpacity
          disabled={!visibleButton}
          onPress={() => {
            let type, data;
            if (isMobileNumber === 'flex') {
              type = 'phone';
              data = {phone: mobileEmail};
            } else {
              type = 'email';
              data = {email: mobileEmail};
            }
            emailMobileCheck(type, data);
          }}>
          <LinearGradient
            colors={
              visibleButton
                ? myColors.primaryGradiantColor[theme]
                : myColors.gradiantColor2[theme]
            }
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={Styles.goBtnContainer}>
            <CustomIcon
              IconType={AntDesign}
              name={'arrowright'}
              color={myColors.white}
              size={wp(7)}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={{...Styles.referralCodeContainer}}>
        <CustomCheckBox
          checkBoxData={['I have a Referral Code']}
          initialData={isReferal}
          onPress={() => {
            forceUpdate();
          }}
          openCheckBoxStyle={{color: myColors.lightGrey, size: 27}}
          selectedCheckBoxStyle={{
            color: theme === 'dark' ? myColors.darkPink : myColors.lightBlue,
            size: 27,
          }}
          labelStyle={{fontSize: 15}}
        />
      </View>
      <View
        style={{
          display: isReferal.length == 1 ? 'flex' : 'none',
        }}>
        <CustomTextInput
          style={{width: wp(90)}}
          showLabel={false}
          placeHolderText={'Referrel Code'}
        />
        <TouchableOpacity
          style={{
            ...Styles.btnApply,
            backgroundColor: myColors.primaryBGColor[theme],
          }}>
          <Text
            style={{
              ...Styles.applyText,
              color: theme === 'dark' ? myColors.darkPink : myColors.lightBlue,
            }}>
            APPLY
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={Styles.orConnectText}>Or connect with</Text>
      </View>
      <View style={{...Styles.socialMediaConnectContainer}}>
        <View style={{...Styles.singleSocialMediaConnectContainer}}>
          <Image
            source={require('@assets/Images/SocialMedia/google.png')}
            style={{height: 25, width: 25}}
          />
          <Text>Google</Text>
        </View>
        <View style={{...Styles.singleSocialMediaConnectContainer}}>
          <Image
            source={require('@assets/Images/SocialMedia/fb.png')}
            style={{height: 25, width: 25, borderRadius: 3}}
          />
          <Text>Facebook</Text>
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
  },
  loginCreateAccountText: {
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
    padding: wp(1.8),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  plus91Text: {
    marginLeft: wp(2),
    fontSize: wp(4.1),
    fontFamily: fonts.latoRegular,
  },
  textInputContainer: {
    marginTop: wp(5.5),
    flexDirection: 'row',
  },
  btnApply: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: wp(3),
  },
  applyText: {
    fontSize: wp(4),

    fontFamily: fonts.latoBold,
  },
  goBtnContainer: {
    marginLeft: wp(2),
    padding: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(20),
    height: wp(12),
    borderRadius: 25,
  },
  referralCodeContainer: {
    marginTop: wp(10),
  },
  referrelCode2Container: {},
  orConnectText: {
    fontSize: wp(3),
    fontFamily: fonts.latoBold,
    color: myColors.lightGrey,
    marginTop: wp(8),
  },
  socialMediaConnectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: wp(6),
  },
  singleSocialMediaConnectContainer: {
    backgroundColor: myColors.white,
    flexDirection: 'row',
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
});
export default LoginSignUpBodyComponent;
