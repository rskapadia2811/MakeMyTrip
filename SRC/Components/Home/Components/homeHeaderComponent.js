import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, color, texts} from '../../../Helpers/variableHelper';
import {setAsyncData} from '../../../Helpers/AsyncStorage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Helpers/screenHelper';
import {myColors} from '../../../Helpers/ColorHelper';
const HomeHeaderComponent = ({theme, navigation}) => {
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
        <Text
          style={{
            ...Styles.topBookYourTravelText,
            color: myColors.primaryTextColor[theme],
          }}>
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
    fontSize: wp(6),
  },
});
