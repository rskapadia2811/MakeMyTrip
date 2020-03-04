import React, {useState} from 'react';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {myColors} from '../../../../Helpers/ColorHelper';
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
import {passwordValidation} from '../../../../Helpers/validationHelper';
import CustomTextInput from '../../../../Common/CustomTextInput';

//
const LoginPasswordBodyComponent = ({theme, setVisibleButton, prevData}) => {
  const [password, setPassword] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: myColors.primaryBGColor[theme]}}>
      <View style={Styles.loginSignUpBodyContainer}>
        <Text
          style={{
            ...Styles.loginCreateAccountText,
            color: myColors.primaryTextColor[theme],
          }}>
          Apply your credential for Login
        </Text>
        <Text
          style={{
            ...Styles.toViewOrEditProfileText,
            color: myColors.primaryTextColor[theme],
          }}>
          Use 8 or more characters with a mix of letters, numbers & symbols
          @$!%*#?&
        </Text>
        <View style={{...Styles.textInputContainer}}>
          <View>
            <CustomTextInput
              placeHolderText={'Enter Password'}
              autoFocus={true}
              returnKeyType={'next'}
              secureTextEntry={true}
              onChangeText={text => {
                setPassword(text);
                if (passwordValidation(text)) {
                  prevData.password = text;
                  setVisibleButton(true, prevData);
                } else {
                  setVisibleButton(false);
                }
              }}
            />
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
    fontSize: wp(6),
    fontFamily: fonts.latoBold,
  },
  toViewOrEditProfileText: {
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
export default LoginPasswordBodyComponent;
