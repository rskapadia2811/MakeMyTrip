import React from 'react';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomIcon from '../../../../Common/CustomIcon';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
const LoginPasswordFooterComponent = ({
  visibleButton = false,
  onPress = () => {},
}) => {
  return (
    <KeyboardAvoidingView behavior="position">
      <View>
        <TouchableOpacity disabled={!visibleButton} onPress={() => onPress()}>
          <LinearGradient
            colors={
              visibleButton ? ['#065af3', '#53b2fe'] : ['#B4B4B4', '#B4B4B4']
            }
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={Styles.goBtnContainer}>
            <CustomIcon
              IconType={AntDesign}
              name={'arrowright'}
              color={'#FFFFFF'}
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
export default LoginPasswordFooterComponent;
