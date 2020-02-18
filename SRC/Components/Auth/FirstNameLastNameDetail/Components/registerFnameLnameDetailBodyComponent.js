import React, {useState} from 'react';
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
import {myColors} from '../../../../Helpers/ColorHelper';
import {
  emailValidation,
  isNumber,
  requiredValidation,
} from '../../../../Helpers/validationHelper';
import CustomTextInput from '../../../../Common/CustomTextInput';

//
const RegisterFnameLnameDetailBodyComponent = ({
  setVisibleButton,
  prevData,
}) => {
  return (
    <View style={{flex: 1}}>
      <View style={Styles.loginSignUpBodyContainer}>
        <Text style={Styles.loginCreateAccountText}>Welcome Aboard!</Text>
        <Text style={{...Styles.toViewOrEditProfileText}}>
          Let's know your better and make sure that you never lose access to
          your account
        </Text>
        <View style={{...Styles.textInputContainer}}>
          <View>
            <CustomTextInput
              placeHolderText={'Enter First Name'}
              autoFocus={true}
              returnKeyType={'next'}
              onChangeText={text => {
                prevData.firstname = text;
                if (
                  requiredValidation(prevData.firstname) &&
                  requiredValidation(prevData.lastname)
                ) {
                  setVisibleButton(true, prevData);
                } else {
                  setVisibleButton(false);
                }
              }}
            />
            <CustomTextInput
              style={{marginTop: wp(5)}}
              placeHolderText={'Enter Last Name'}
              returnKeyType={'next'}
              onChangeText={text => {
                prevData.lastname = text;
                if (
                  requiredValidation(prevData.firstname) &&
                  requiredValidation(prevData.lastname)
                ) {
                  setVisibleButton(true, prevData);
                } else {
                  setVisibleButton(false);
                }
              }}
            />
            <View
              style={{
                ...Styles.countrySelectionContainer,
              }}>
              <Image
                source={require('../../../../Assets/Images/Flags/indiaFlag.png')}
                style={{...Styles.indiaFlag, height: wp(5), width: wp(7)}}
              />
              <Text style={{...Styles.plus91Text}}>+91</Text>
              <CustomTextInput
                style={{
                  width: wp(70),
                  marginLeft: wp(1),
                }}
                returnKeyType={'next'}
                placeHolderText={'Enter Mobile No.'}
                onChangeText={text => {
                  prevData.phone = text;
                  if (text.length > 0) {
                    if (isNumber(text) && text.length <= 10) {
                      if (text.length === 10) {
                        setVisibleButton(true, prevData);
                      } else {
                        setVisibleButton(false);
                      }
                    } else {
                      setVisibleButton(false);
                    }
                  } else {
                    if (
                      requiredValidation(prevData.firstname) &&
                      requiredValidation(prevData.lastname)
                    ) {
                      setVisibleButton(true, prevData);
                    } else {
                      setVisibleButton(false);
                    }
                  }
                }}
              />
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
    marginTop: wp(5),
    flexDirection: 'row',
    padding: wp(2),
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: wp(90),
  },
  plus91Text: {
    marginLeft: wp(2),
    fontSize: wp(4.5),
    marginBottom: wp(1.5),
    fontFamily: fonts.latoRegular,
  },
  indiaFlag: {
    marginBottom: wp(1.5),
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
    borderBottomColor: myColors.lightBlue,
    fontFamily: fonts.latoRegular,
  },
  btnApply: {
    position: 'absolute',
    alignSelf: 'flex-end',
    backgroundColor: myColors.white,
    padding: wp(3),
  },
  applyText: {
    fontSize: wp(4),
    color: myColors.lightBlue,
    fontFamily: fonts.latoBold,
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
    flexDirection: 'row',
    backgroundColor: myColors.white,
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
export default RegisterFnameLnameDetailBodyComponent;
