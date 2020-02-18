import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {myColors} from '../../../../../Helpers/ColorHelper';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import moment from 'moment';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../Helpers/screenHelper';
import {fonts} from '../../../../../Helpers/variableHelper';
import CustomSeperator from '../../../../../Common/CustomSeperator';
import CustomIcon from '../../../../../Common/CustomIcon';
import DontMissDealComponent from './dontMissDealComponent';

const FlightSearchOneWayComponent = ({
  navigation,
  oneWayFromCityData,
  roundTrip = false,
  oneWayToCityData,
  fromDate = new Date(),
  toDate = new Date().setDate(new Date().getDay() + 1),
  setTrip = () => {},
  theme,
}) => {
  let oneWayFromCityData1 = oneWayFromCityData
    ? oneWayFromCityData
    : {city: 'New Delhi', cityCode: 'DEL'};
  let oneWayToCityData1 = oneWayToCityData
    ? oneWayToCityData
    : {city: 'Mumbai', cityCode: 'BOM'};
  const [depatureDate, setDepatureDate] = useState(new Date(fromDate));
  const [returnDate, setReturnDate] = useState(new Date(returnDate));
  const cDate = new Date();
  const maxDepatureDate = new Date();
  maxDepatureDate.setMonth(cDate.getMonth() + 8);
  return (
    <View
      style={{
        backgroundColor:
          theme === 'dark' ? myColors.shadeBlack : myColors.backWhite,
      }}>
      <View
        style={{
          ...Styles.tvScreenBottom,
          backgroundColor: myColors.primaryBGColor[theme],
        }}
      />
      <View
        style={{
          ...Styles.oneWayContainer,
          backgroundColor: myColors.primaryBGColor[theme],
        }}>
        {/* From Container */}
        <TouchableOpacity
          style={{...Styles.oneSlotMainContainer}}
          onPress={() =>
            navigation.navigate('SearchAirportCityComponent', {
              wayData: 'oneWayFromCityData',
            })
          }>
          <Text style={{...Styles.labelText}}>FROM</Text>
          <Text
            style={{
              ...Styles.cityName,
              color: myColors.primaryTextColor[theme],
            }}>
            {oneWayFromCityData1.city}
            <Text style={{...Styles.cityCode}}>
              &nbsp;{oneWayFromCityData1.cityCode}
            </Text>
          </Text>
        </TouchableOpacity>
        <CustomSeperator />
        {/* To Container */}
        <TouchableOpacity
          style={{...Styles.oneSlotMainContainer}}
          onPress={() =>
            navigation.navigate('SearchAirportCityComponent', {
              wayData: 'oneWayToCityData',
            })
          }>
          <Text style={{...Styles.labelText}}>TO</Text>
          <Text
            style={{
              ...Styles.cityName,
              color: myColors.primaryTextColor[theme],
            }}>
            {oneWayToCityData1.city}
            <Text style={{...Styles.cityCode}}>
              &nbsp; {oneWayToCityData1.cityCode}
            </Text>
          </Text>
        </TouchableOpacity>
        <CustomSeperator />
        <View
          style={{
            ...Styles.depatureReturnContainer,
            ...Styles.oneSlotMainContainer,
          }}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() =>
                navigation.navigate('DateSelectionComponent', {
                  way: 'depature',
                })
              }>
              <Text style={{...Styles.labelText}}>DEPATURE</Text>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text
                    style={{
                      ...Styles.dateText,
                      color: myColors.primaryTextColor[theme],
                    }}>
                    {moment(fromDate).format('DD')}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      ...Styles.monthYearText,
                      color: myColors.primaryTextColor[theme],
                    }}>
                    {moment(fromDate).format('MMM')}{' '}
                    {moment(fromDate).format('YYYY')}
                  </Text>
                  <Text style={{...Styles.dayText}}>
                    {moment(fromDate).format('dddd')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/*RETURN*/}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setTrip(1);
              navigation.navigate('DateSelectionComponent', {
                date: moment(fromDate).format('YYYY-MM-DD'),
                way: 'return',
              });
            }}>
            <Text style={{...Styles.labelText}}>RETURN</Text>
            {roundTrip === true ? (
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text
                    style={{
                      ...Styles.dateText,
                      color: myColors.primaryTextColor[theme],
                    }}>
                    {moment(toDate).format('DD')}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      ...Styles.monthYearText,
                      color: myColors.primaryTextColor[theme],
                    }}>
                    {moment(toDate).format('MMM')}{' '}
                    {moment(toDate).format('YYYY')}
                  </Text>
                  <Text style={{...Styles.dayText}}>
                    {moment(toDate).format('dddd')}
                  </Text>
                </View>
              </View>
            ) : (
              <Text
                style={{
                  ...Styles.bookRoundText,
                  color: myColors.primaryTextColor[theme],
                }}>
                Book round trips{'\n'} for great savings
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <CustomSeperator />
        <View
          style={{
            ...Styles.travellersCabinContainer,
            ...Styles.oneSlotMainContainer,
          }}>
          <TouchableOpacity style={{flex: 1}}>
            <Text style={{...Styles.labelText}}>TRAVELLERS</Text>
            <Text
              style={{
                ...Styles.travellerText,
                color: myColors.primaryTextColor[theme],
              }}>
              01
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
            }}>
            <Text style={{...Styles.labelText}}>CABIN CLASS</Text>
            <Text
              style={{
                ...Styles.classText,
                color: myColors.primaryTextColor[theme],
              }}>
              Economy Class
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={myColors.primaryGradiantColor[theme]}
            style={{...Styles.searchButtonContainer}}>
            <Text style={{...Styles.searchText}}>SEARCH</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={{...Styles.botomContainer}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{width: wp(100) * 5}}>
          <View style={{...Styles.dontMissOutContainer}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', marginRight: wp(10)}}>
                <Text
                  style={{
                    ...Styles.dontMissText,
                    color: myColors.primaryTextColor[theme],
                  }}>
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
                <DontMissDealComponent theme={theme} />
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
    paddingTop: wp(10),
    paddingBottom: wp(0),
  },
  tvScreenBottom: {
    width: wp(100) * 5,
    height: wp(100) * 5,
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp(95),
    borderRadius: wp(500),
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: 'black',
    elevation: 0,
    zIndex: -1,
  },
  labelText: {
    color: 'grey',
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
  },
  cityName: {
    fontFamily: fonts.latoBold,
    fontSize: wp(6),
  },
  cityCode: {
    color: myColors.grey,
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
  travellersCabinContainer: {
    flexDirection: 'row',
  },
  dateText: {
    fontFamily: fonts.latoBold,
    marginRight: wp(2),
    fontSize: wp(10),
  },
  monthYearText: {
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
  },
  dayText: {
    color: 'grey',
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
  },
  bookRoundText: {
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
    marginTop: wp(1.5),
  },
  travellerText: {
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
    color: myColors.white,
    fontFamily: fonts.latoBlack,
  },
  botomContainer: {
    marginTop: wp(30),
    paddingLeft: wp(5),
  },
  dontMissOutContainer: {},
  dontMissText: {
    fontFamily: fonts.latoRegular,
    fontSize: wp(5),
  },
});
export default FlightSearchOneWayComponent;
