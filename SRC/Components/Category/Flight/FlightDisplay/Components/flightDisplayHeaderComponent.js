import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from '../../../../../Helpers/screenHelper';
import {myColors} from '../../../../../Helpers/ColorHelper';
import {fonts} from '../../../../../Helpers/variableHelper';
import CustomIcon from '../../../../../Common/CustomIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {get} from 'lodash';
import moment from 'moment';

const FlightDisplayHeaderComponent = ({theme, navigation}) => {
  const data = navigation.state.params.data;
  return (
    <View style={{...Styles.travellersAndClassHeaderMainContainer}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('FlightSearchComponent')}>
        <CustomIcon
          IconType={Ionicons}
          name={'ios-arrow-round-back'}
          color={myColors.primaryTextColor[theme]}
          size={wp(10)}
          style={{...Styles.backIcon}}
        />
      </TouchableOpacity>
      <Text
        style={{
          ...Styles.boldText,
          color: myColors.primaryTextColor[theme],
        }}>
        {data.originCity} to {data.destinationCity}
        <Text style={{...Styles.date}}>
          {'\n'}
          {moment(data.departureDate).format('DD MMM')}
          {data.noOfAdults > 0 ? '| ' + data.noOfAdults + ' Adults' : ''}
          {data.noOfChildren > 0 ? '| ' + data.noOfChildren + ' Children' : ''}
          {data.noOfInfants > 0 ? '| ' + data.noOfInfants + ' Infants' : ''}
          {data.classOfTravel ? '| ' + data.classOfTravel : ''}
        </Text>
      </Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  travellersAndClassHeaderMainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: wp(2.5),
    paddingHorizontal: wp(3),
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: myColors.black,
    elevation: 10,
  },
  backIcon: {
    marginRight: wp(5),
  },
  thinText: {
    marginRight: wp(2),
    fontFamily: fonts.latoLight,
    fontSize: wp(5),
  },

  boldText: {
    fontFamily: fonts.latoBold,
      fontSize: wp(5),
    },
  date: {
    fontSize: wp(3),
    color: myColors.grey,
  },
});

export default FlightDisplayHeaderComponent;
