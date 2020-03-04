import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../../../Helpers/screenHelper';
import {myColors} from '../../../../../Helpers/ColorHelper';
import FlightSearchOneWayComponent from './flightSearchOneWayComponent';

const FlightSearchBodyComponent = ({
  navigation,
  state,
  index,
  fromDate,
  toDate,
  setTrip = () => {},
  theme,
}) => {
  return (
    <ScrollView style={{zIndex: -1}} keyboardShouldPersistTaps={true}>
      <View style={{...Styles.flightSearchBodyMainContainer}}>
        {index === 0 || index === 1 ? (
          <FlightSearchOneWayComponent
            theme={theme}
            setTrip={value => {
              setTrip(value);
            }}
            navigation={navigation}
            roundTrip={index === 1 ? true : false}
            fromDate={fromDate}
            toDate={toDate}
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
    backgroundColor: myColors.shadeWhite,
    height: hp(100),
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default FlightSearchBodyComponent;
