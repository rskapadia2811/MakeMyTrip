import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {widthPercentageToDP as wp} from '../../../../../Helpers/screenHelper';
import {fonts} from '../../../../../Helpers/variableHelper';
import {myColors} from '../../../../../Helpers/ColorHelper';
const FlightDisplayBodyComponent = ({theme, navigation}) => {
  const flightData = useSelector(
    state => state.SearchFlightROReducer.flightData,
  );
  const flightDataRenderData = (item, index) => {
    let carrierName;
    switch (item.carrierName) {
      case 'Go Airlines (India) Pvt Ltd': {
        carrierName = 'Go Air';
        break;
      }
      case 'SpiceJet Ltd': {
        carrierName = 'SpiceJet';
        break;
      }
      case 'AirAsia (India)': {
        carrierName = 'AirAsia';
        break;
      }
      default: {
        carrierName = item.carrierName;
        break;
      }
    }
    return (
      <View style={{...Styles.singleFlightDataContainer}}>
        <Text
          style={{
            ...Styles.carrierNameText,
            color: myColors.primaryTextColor[theme],
          }}>
          {carrierName}
          <Text style={{color: myColors.grey}}>
            {' | ' + item.carrier + ' ' + item.flightNumber}
          </Text>
        </Text>
        <View style={{...Styles.subContainer}}>
          <View>
            <Text>{carrierName}</Text>
          </View>
          <View>
            <Text
              style={{
                ...Styles.timeText,
                color: myColors.primaryTextColor[theme],
              }}>
              {item.departureTime}
            </Text>
            <Text>{item.originCity}</Text>
          </View>
          <View>
            <Text
              style={{
                ...Styles.timeText,
                color: myColors.primaryTextColor[theme],
              }}>
              {item.arrivalTime}
            </Text>
            <Text>{item.destinationCity}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={flightData}
        renderItem={({item, index}) => flightDataRenderData(item, index)}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  singleFlightDataContainer: {
    padding: wp(5),
  },
  carrierNameText: {
    fontSize: wp(3),
    fontFamily: fonts.latoBold,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
    fontSize: wp(4),
    timeText: {
    fontFamily: fonts.latoBold,
  },
});
export default FlightDisplayBodyComponent;
