import React, {useState} from 'react';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {KeyboardAvoidingView, Switch, Text, StyleSheet} from 'react-native';
import {fonts} from '../../../../Helpers/variableHelper';
import LinearGradient from 'react-native-linear-gradient';
import {myColors} from '../../../../Helpers/ColorHelper';
const LoginSignUpFooterComponent = ({theme}) => {
  const [personalOrmyBiz, setPersonalOrMyBiz] = useState(false);
  return (
    <KeyboardAvoidingView behavior="position">
      <LinearGradient
        colors={myColors.primaryGradiantColor[theme]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={Styles.loginSignUpFooterContainer}>
        <Text style={{...Styles.bottomText, marginRight: wp(8)}}>Personal</Text>
        <Switch
          value={personalOrmyBiz}
          onValueChange={value => setPersonalOrMyBiz(value)}
          trackColor={myColors.primaryBGColor[theme]}
          ios_backgroundColor={myColors.primaryBGColor[theme]}
          thumbColor={myColors.primaryTextColor[theme]}
        />
        <Text style={{...Styles.bottomText, marginLeft: wp(8)}}>myBiz</Text>
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
export default LoginSignUpFooterComponent;
