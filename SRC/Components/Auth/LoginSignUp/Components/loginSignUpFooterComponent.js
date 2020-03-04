import React, {useState} from 'react';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {KeyboardAvoidingView, Switch, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {fonts} from '../../../../Helpers/variableHelper';
import LinearGradient from 'react-native-linear-gradient';
import {myColors} from '../../../../Helpers/ColorHelper';
import {changeTheme} from '../../../../Actions/ThemeAction';
const LoginSignUpFooterComponent = ({theme, ...props}) => {
  const [lightOrdark, setLightOrDark] = useState(
    theme === 'light' ? false : true,
  );
  return (
    <KeyboardAvoidingView behavior="position">
      <LinearGradient
        colors={myColors.primaryGradiantColor[theme]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={Styles.loginSignUpFooterContainer}>
        <Text style={{...Styles.bottomText, marginRight: wp(8)}}>
          Light Mode
        </Text>
        <Switch
          value={lightOrdark}
          onValueChange={value => {
            setLightOrDark(value);
            if (value == true) {
              props.changeTheme();
            } else {
              props.changeTheme();
            }
          }}
          trackColor={myColors.primaryBGColor[theme]}
          ios_backgroundColor={myColors.primaryBGColor[theme]}
          thumbColor={myColors.primaryTextColor[theme]}
        />
        <Text style={{...Styles.bottomText, marginLeft: wp(8)}}>Dark Mode</Text>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};
const Styles = StyleSheet.create({
  loginSignUpFooterContainer: {
    position: 'absolute',
    width: wp(100),
    bottom: wp(0),
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(3),
    flexDirection: 'row',
    height: wp(15),
  },
  bottomText: {
    fontSize: wp(4.5),
    fontFamily: fonts.latoBlack,
    color: myColors.white,
  },
});
const mapDispatchToProps = {
  changeTheme,
};
export default connect(
  null,
  mapDispatchToProps,
)(LoginSignUpFooterComponent);
