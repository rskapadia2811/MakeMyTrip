import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, color, texts} from '../../../Helpers/variableHelper';
import {setAsyncData} from '../../../Helpers/AsyncStorage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Helpers/screenHelper';
const HomeHeaderComponent = ({navigation}) => {
  {
    /*Top Header Container*/
  }
  return (
    <View style={Styles.topBookYourTravelContainer}>
      <TouchableOpacity
        onPress={() => {
          setAsyncData('email', '');
          navigation.navigate('LoginSignUpComponent');
        }}>
        <Text style={Styles.topBookYourTravelText}>
          {texts.homeHeaderTopText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeaderComponent;

const Styles = StyleSheet.create({
  topBookYourTravelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp(1.2),
  },
  topBookYourTravelText: {
    fontFamily: fonts.latoLight,
    fontSize: hp(3),
    color: color.topHomeHeaderTextColor,
  },
});
