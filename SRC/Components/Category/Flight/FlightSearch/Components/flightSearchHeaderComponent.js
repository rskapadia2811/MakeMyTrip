import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomIcon from '../../../../../Common/CustomIcon';
import {fonts} from '../../../../../Helpers/variableHelper';
import {
  widthPercentageToDP as wp,
} from '../../../../../Helpers/screenHelper';

const FlightSearchHeaderComponent = ({navigation}) => {
  return (
    <View style={{...Styles.flightSearchHeaderMainContainer}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CustomIcon
          IconType={Ionicons}
          name={'ios-arrow-round-back'}
          color={'#000000'}
          size={wp(10)}
          style={{...Styles.backIcon}}
        />
      </TouchableOpacity>
      <Text style={{...Styles.flightText}}>Flight</Text>
      <Text style={{...Styles.searchText}}>Search</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  flightSearchHeaderMainContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: wp(4),
    paddingHorizontal: wp(3),
    shadowOffset: {x: 0, y: 50},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    elevation: 10,
  },
  backIcon: {
    marginRight: wp(5),
  },
  flightText: {
    marginRight: wp(2),
    fontFamily: fonts.latoLight,
    fontSize: wp(7),
  },
  searchText: {
    fontFamily: fonts.latoBold,
    fontSize: wp(7),
  },
});
export default FlightSearchHeaderComponent;
