import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../../../Helpers/screenHelper';
import FlightSearchOneWayComponent from './flightSearchOneWayComponent';

const FlightSearchBodyComponent = ({navigation}) => {
  return (
    <ScrollView style={{zIndex: -1}}>
      <View style={{...Styles.flightSearchBodyMainContainer}}>
        <FlightSearchOneWayComponent navigation={navigation} />
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  flightSearchBodyMainContainer: {
    backgroundColor: '#EFEDEF',
    height: hp(100),
  },
});
export default FlightSearchBodyComponent;
