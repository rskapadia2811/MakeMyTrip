import React from 'react';
import {
  widthPercentageToDP as wp,
} from '../../../../Helpers/screenHelper';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomIcon from '../../../../Common/CustomIcon';
const LoginPasswordHeaderComponent = ({navigation}) => {
  return (
    <View style={Styles.loginSignUpHeaderContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CustomIcon
          IconType={Ionicons}
          name={'ios-arrow-round-back'}
          color={'#858585'}
          size={wp(10)}
          style={Styles.backIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  loginSignUpHeaderContainer: {
    justifyContent: 'center',
    padding: wp(3),
  },
  backIcon: {
    marginLeft: wp(3),
  },
});
export default LoginPasswordHeaderComponent;
