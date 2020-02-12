import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../../../Helpers/screenHelper';
import FlightSearchOneWayComponent from './flightSearchOneWayComponent';

const FlightSearchBodyComponent = ({navigation, state, index}) => {
    console.log(index);
  return (
    <ScrollView style={{zIndex: -1}}>
      <View style={{...Styles.flightSearchBodyMainContainer}}>
        {index === 0 ? (
          <FlightSearchOneWayComponent
            navigation={navigation}
            oneWayFromCityData={
              state.oneWayFromCityData && state.oneWayFromCityData
            }
            oneWayToCityData={state.oneWayToCityData && state.oneWayToCityData}
          />
        ) : (
          <></>
        )}
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
