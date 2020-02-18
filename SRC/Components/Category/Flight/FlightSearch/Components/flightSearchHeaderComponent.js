import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomIcon from '../../../../../Common/CustomIcon';
import {fonts} from '../../../../../Helpers/variableHelper';
import {widthPercentageToDP as wp} from '../../../../../Helpers/screenHelper';
import {myColors} from '../../../../../Helpers/ColorHelper';

const FlightSearchHeaderComponent = ({
  navigation,
  onPress = () => {},
  wayIndex = 0,
  theme,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(wayIndex);
  useEffect(() => {
    setSelectedIndex(wayIndex);
  }, [wayIndex]);
  const wayData = [
    {
      id: 1,
      name: 'ONE WAY',
      onPress: () => {},
    },
    {
      id: 2,
      name: 'ROUNDTRIP',
      onPress: () => {},
    },
    {
      id: 3,
      name: 'MULTICITY',
      onPress: () => {},
    },
  ];
  const wayRenderData = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedIndex(index), onPress(index);
        }}>
        <View
          style={[
            selectedIndex === index
              ? Styles.selectedSingleWayContainer
              : Styles.singleWayContainer,
          ]}>
          {selectedIndex === index ? (
            <CustomIcon
              IconType={AntDesign}
              name={'checkcircle'}
              color={myColors.white}
              size={wp(4)}
            />
          ) : (
            <></>
          )}
          <Text
            style={[
              selectedIndex === index
                ? Styles.selectedWayText
                : Styles.notSelectWayText,
            ]}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View
        style={{
          ...Styles.flightSearchHeaderMainContainer,
          backgroundColor: myColors.primaryBGColor[theme],
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeComponent')}>
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
            ...Styles.flightText,
            color: myColors.primaryTextColor[theme],
          }}>
          Flight
        </Text>
        <Text
          style={{
            ...Styles.searchText,
            color: myColors.primaryTextColor[theme],
          }}>
          Search
        </Text>
      </View>
      <View style={{...Styles.wayContainer}}>
        <FlatList
          horizontal={true}
          scrollEnabled={false}
          data={wayData}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => wayRenderData(item, index)}
        />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  flightSearchHeaderMainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: wp(5),
    paddingHorizontal: wp(3),
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 10,
    shadowOpacity: 0.1,
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
  wayContainer: {
    zIndex: 500,
    backgroundColor: myColors.white,
    position: 'absolute',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowColor: 'black',
    elevation: 10,
    borderRadius: wp(10),
    width: wp(79),
    bottom: wp(-4),
    height: wp(8),
  },
  singleWayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(6.5),
    width: wp(70) / 3,
  },
  selectedSingleWayContainer: {
    marginLeft: wp(1),
    marginRight: wp(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(6.5),
    width: wp(90) / 3,
    backgroundColor: myColors.seaBlue,
    borderRadius: 15,
  },
  selectedWayText: {
    fontSize: wp(3.5),
    marginLeft: wp(1),
    fontFamily: fonts.latoBlack,
    color: myColors.white,
  },
  notSelectWayText: {
    color: myColors.black,
    fontSize: wp(3.5),
    fontFamily: fonts.latoBlack,
  },
});
export default FlightSearchHeaderComponent;
