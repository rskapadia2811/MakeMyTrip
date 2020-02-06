import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../../Helpers/screenHelper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  KeyboardAvoidingView,
  Switch,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomIcon from '../../../../Common/CustomIcon';
import {fonts} from '../../../../Helpers/variableHelper';
import LinearGradient from 'react-native-linear-gradient';
const LoginSignUpFooterComponent = ({}) => {
  const [personalOrmyBiz, setPersonalOrMyBiz] = useState(false);
  return (
    <KeyboardAvoidingView behavior="position">
      <LinearGradient
        colors={['#065af3', '#53b2fe']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={Styles.loginSignUpFooterContainer}>
        <Text style={{...Styles.bottomText, marginRight: wp(8)}}>Personal</Text>
        <Switch
          value={personalOrmyBiz}
          onValueChange={value => setPersonalOrMyBiz(value)}
          trackColor={'#5895F8'}
          ios_backgroundColor={'#5895F8'}
          thumbColor={'#FFFFFF'}
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
    color: '#FFFFFF',
  },
});
export default LoginSignUpFooterComponent;
