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
  theme,
  setVisibleButton,
  prevData,
}) => {
  return (
    <View style={{flex: 1}}>
      <View style={Styles.loginSignUpBodyContainer}>
        <Text
          style={{
            ...Styles.loginCreateAccountText,
            color: myColors.primaryTextColor[theme],
          }}>
          Welcome Aboard!
        </Text>
        <Text
          style={{
            ...Styles.toViewOrEditProfileText,
            color: myColors.primaryTextColor[theme],
          }}>
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
            {prevData && prevData.email ? (
              <View
                style={{
                  ...Styles.countrySelectionContainer,
                }}>
                <Image
                  source={require('../../../../Assets/Images/Flags/indiaFlag.png')}
                  style={{...Styles.indiaFlag, height: wp(5), width: wp(7)}}
                />
                <Text
                  style={{
                    ...Styles.plus91Text,
                    color: myColors.primaryTextColor[theme],
                  }}>
                  +91
                </Text>
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
            ) : (
              <CustomTextInput
                style={{marginTop: wp(5)}}
                placeHolderText={'Enter Email'}
                returnKeyType={'next'}
                onChangeText={text => {
                  prevData.email = text;
                  if (
                    requiredValidation(prevData.firstname) &&
                    requiredValidation(prevData.lastname) &&
                    requiredValidation(prevData.email)
                  ) {
                    setVisibleButton(true, prevData);
                  } else {
                    setVisibleButton(false);
                  }
                }}
              />
            )}
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
    fontSize: wp(6),
    fontFamily: fonts.latoBold,
  },
  toViewOrEditProfileText: {
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
});
export default RegisterFnameLnameDetailBodyComponent;
