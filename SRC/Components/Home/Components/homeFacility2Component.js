import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {fonts, homeHeaderIcon} from '../../../Helpers/variableHelper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../Helpers/screenHelper';
import CustomIcon from '../../../Common/CustomIcon';
const HomeFacility2Component = () => {
  const FacilityData = [
    {
      id: 6,
      name: 'Cabs',
      iconType: FontAwesome,
      iconName: 'cab',
      onPress: () => {},
    },
    {
      id: 7,
      name: 'Train/Metro',
      iconType: Ionicons,
      iconName: 'ios-train',
      onPress: () => {},
    },
    {
      id: 8,
      name: 'Activities',
      iconType: MaterialCommunityIcons,
      iconName: 'run-fast',
      onPress: () => {},
    },
    {
      id: 9,
      name: 'Visa',
      iconType: FontAwesome5,
      iconName: 'passport',
      onPress: () => {},
    },
    {
      id: 10,
      name: 'Events',
      iconType: Foundation,
      iconName: 'ticket',
      onPress: () => {},
    },
  ];
  const facilityRenderItem = ({item, index}) => {
    return (
      <View style={Styles.FacilityRow}>
        <View style={Styles.singleFacilityContainer}>
          <CustomIcon
            IconType={item.iconType}
            name={item.iconName}
            size={homeHeaderIcon.size}
            color={homeHeaderIcon.color}
            style={Styles.iconStyle}
          />
          <Text style={Styles.facilityName}>{item.name}</Text>
        </View>
      </View>
    );
  };
  /*  Facilities Container*/
  return (
    <View style={Styles.FacilitiesContainer}>
      <FlatList
        data={FacilityData}
        numColumns={5}
        renderItem={(item, index) => facilityRenderItem(item, index)}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  FacilitiesContainer: {
    flexDirection: 'column',
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  FacilityRow: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  iconStyle: {
    padding: 3,
  },
  singleFacilityContainer: {
    width: wp(19),
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(1),
    marginTop: hp(1),
  },
  facilityName: {
    marginTop: hp(0.5),
    fontSize: hp(1.3),
    fontFamily: fonts.latoBold,
  },
});

export default HomeFacility2Component;
