import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../Helpers/screenHelper';
import {fonts} from '../../../../../Helpers/variableHelper';
import CustomSeperator from '../../../../../Common/CustomSeperator';
import CustomIcon from '../../../../../Common/CustomIcon';
import DontMissDealComponent from './dontMissDealComponent';

const FlightSearchOneWayComponent = ({navigation}) => {
  return (
    <View>
      <View style={{...Styles.oneWayContainer}}>
        {/* From Container */}
        <TouchableOpacity
          style={{...Styles.oneSlotMainContainer}}
          onPress={() => navigation.navigate('SearchAirportCityComponent')}>
          <Text style={{...Styles.labelText}}>FROM</Text>
          <Text style={{...Styles.cityName}}>
            New Delhi <Text style={{...Styles.cityCode}}>DEL</Text>
          </Text>
        </TouchableOpacity>
        <CustomSeperator />
        {/* To Container */}
        <TouchableOpacity style={{...Styles.oneSlotMainContainer}}>
          <Text style={{...Styles.labelText}}>TO</Text>
          <Text style={{...Styles.cityName}}>
            Mumbai <Text style={{...Styles.cityCode}}>BOM</Text>
          </Text>
        </TouchableOpacity>
        <View style={{...Styles.depatureReturnContainer}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{...Styles.oneSlotMainContainer}}>
              <Text style={{...Styles.labelText}}>DEPATURE</Text>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{...Styles.dateText}}>08</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: wp(2),
                    justifyContent: 'center',
                  }}>
                  <Text style={{...Styles.monthYearText}}>Feb2020</Text>
                  <Text style={{...Styles.dayText}}>Saturday</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{...Styles.oneSlotMainContainer}}>
            <Text style={{...Styles.labelText}}>RETURN</Text>
            <Text style={{...Styles.bookRoundText}}>
              Book round trips{'\n'} for great savings
            </Text>
          </TouchableOpacity>
        </View>
        <CustomSeperator />
        <View style={{...Styles.depatureReturnContainer}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{...Styles.oneSlotMainContainer}}>
              <Text style={{...Styles.labelText}}>TRAVELLERS</Text>
              <Text style={{...Styles.travellerText}}>01</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{...Styles.oneSlotMainContainer}}>
            <Text style={{...Styles.labelText}}>CABIN CLASS</Text>
            <Text style={{...Styles.classText}}>Economy Class</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={['#53b2fe', '#065af3']}
            style={{...Styles.searchButtonContainer}}>
            <Text style={{...Styles.searchText}}>SEARCH</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={{...Styles.tvScreenBottom}} />
      <View style={{...Styles.botomContainer}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{width: wp(100) * 5}}>
          <View style={{...Styles.dontMissOutContainer}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', marginRight: wp(10)}}>
                <Text style={{...Styles.dontMissText}}>
                  DON'T MISS{'\n'}OUT
                </Text>
                <CustomIcon
                  IconType={Fontisto}
                  name={'arrow-right-l'}
                  style={{marginTop: wp(2)}}
                  color={'grey'}
                  size={wp(5)}
                />
              </View>
              <View>
                <DontMissDealComponent />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  oneWayContainer: {
    backgroundColor: '#FEFEFE',
    // backgroundColor: 'red',
    paddingTop: wp(10),
    paddingBottom: wp(0),
  },
  tvScreenBottom: {
    width: wp(100) * 5,
    height: wp(100) * 5,
    backgroundColor: '#FEFEFE',
    position: 'absolute',
    alignSelf: 'center',
    bottom: wp(50),
    borderRadius: wp(500),
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: 'black',
    elevation: 10,
    zIndex: -1,
  },
  labelText: {
    color: 'grey',
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
  },
  cityName: {
    color: '#000000',
    fontFamily: fonts.latoBold,
    fontSize: wp(6),
  },
  cityCode: {
    color: 'grey',
    fontFamily: fonts.latoBold,
    fontSize: wp(6),
  },
  oneSlotMainContainer: {
    paddingVertical: wp(4),
    paddingHorizontal: wp(10),
  },
  depatureReturnContainer: {
    flexDirection: 'row',
  },
  dateText: {
    color: '#000000',
    fontFamily: fonts.latoBold,
    fontSize: wp(10),
  },
  monthYearText: {
    color: 'black',
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
  },
  dayText: {
    color: 'grey',
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
  },
  bookRoundText: {
    color: 'black',
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
    marginTop: wp(1.5),
  },
  travellerText: {
    color: '#000000',
    fontFamily: fonts.latoBold,
    fontSize: wp(10),
  },
  classText: {
    width: wp(39),
    fontFamily: fonts.latoBold,
    fontSize: wp(5.9),
  },
  searchButtonContainer: {
    position: 'absolute',
    height: wp(22),
    alignSelf: 'center',
    width: wp(22),
    justifyContent: 'center',
    borderRadius: wp(15),
    alignItems: 'center',
    zIndex: 100000,
  },
  searchText: {
    fontSize: wp(4),
    color: '#FFFFFF',
    fontFamily: fonts.latoBlack,
  },
  botomContainer: {
    marginTop: wp(30),
    paddingLeft: wp(5),
  },
  dontMissOutContainer: {},
  dontMissText: {
    color: '#000000',
    fontFamily: fonts.latoRegular,
    fontSize: wp(5),
  },
});
export default FlightSearchOneWayComponent;
