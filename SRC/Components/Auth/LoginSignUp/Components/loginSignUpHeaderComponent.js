import React from 'react';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fonts} from '../../../../Helpers/variableHelper';
import CustomIcon from '../../../../Common/CustomIcon';
const LoginSignUpHeaderComponent = ({navigation}) => {
  return (
    <View style={Styles.loginSignUpHeaderContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeComponent')}>
        {/*<CustomIcon*/}
        {/*  IconType={Ionicons}*/}
        {/*  name={'ios-arrow-round-back'}*/}
        {/*  color={'#858585'}*/}
        {/*  size={wp(10)}*/}
        {/*  style={Styles.backIcon}*/}
        {/*/>*/}
        <Text style={{...Styles.skipText}}>SKIP</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  loginSignUpHeaderContainer: {
    justifyContent: 'center',
    padding: wp(3),
    alignItems: 'flex-end',
  },
  backIcon: {
    marginLeft: wp(3),
  },
  skipText: {
    fontSize: wp(4),
    fontFamily: fonts.latoBlack,
    color: '#858585',
  },
});
export default LoginSignUpHeaderComponent;
