import React from 'react';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {verifyPhoneNumberWithOTP} from '../../../../Actions/authAction';
import {myColors} from '../../../../Helpers/ColorHelper';
import CustomIcon from '../../../../Common/CustomIcon';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
const RegisterOTPFooterComponent = ({
  prevData = {},
  visibleButton = false,
  theme,
  onPress = () => {},
}) => {
  return (
    <KeyboardAvoidingView behavior="position">
      <View>
        <TouchableOpacity
          disabled={!visibleButton}
          onPress={() => {
            verifyPhoneNumberWithOTP(prevData, (uid, component) => {
              onPress(component, uid);
            });
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
    </KeyboardAvoidingView>
  );
};
const Styles = StyleSheet.create({
  loginSignUpFooterContainer: {
    position: 'absolute',
    width: wp(100),
    bottom: wp(0),
    justifyContent: 'center',
    padding: wp(3),
    flexDirection: 'row',
    height: wp(15),
  },
  goBtnContainer: {
    margin: wp(3),
    padding: wp(2),
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: wp(20),
    height: wp(12),
    borderRadius: 25,
  },
});
export default RegisterOTPFooterComponent;
