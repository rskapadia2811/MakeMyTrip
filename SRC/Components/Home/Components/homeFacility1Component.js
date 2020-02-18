import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {fonts, homeHeaderIcon} from '../../../Helpers/variableHelper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {setAsyncData} from '../../../Helpers/AsyncStorage';
import {changeTheme} from '../../../Actions/ThemeAction';
import {connect} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../Helpers/screenHelper';
import CustomIcon from '../../../Common/CustomIcon';
import {myColors} from '../../../Helpers/ColorHelper';
const HomeFacility1Component = ({navigation, theme, ...props}) => {
  const FacilityData = [
    {
      id: 1,
      name: 'Flights',
      iconType: SimpleLineIcons,
      iconName: 'plane',
      onPress: () => {
        navigation.navigate('FlightSearchComponent');
      },
    },
    {
      id: 2,
      name: 'Hotels',
      iconType: FontAwesome5,
      iconName: 'hotel',
      onPress: () => {
        props.changeTheme();
      },
    },
    {
      id: 3,
      name: 'Villas & Apts',
      iconType: Fontisto,
      iconName: 'holiday-village',
      onPress: () => {
        setAsyncData('mode', 'light');
      },
    },
    {
      id: 4,
      name: 'Holidays',
      iconType: FontAwesome5,
      iconName: 'location-arrow',
      onPress: () => {},
    },
    {
      id: 5,
      name: 'Bus',
      iconType: Fontisto,
      iconName: 'bus',
      onPress: () => {},
    },
  ];
  const facilityRenderItem = ({item, index}) => {
    return (
      <View style={Styles.FacilityRow}>
        <TouchableOpacity
          onPress={() => {
            item.onPress();
          }}>
          <View style={Styles.singleFacilityContainer}>
            <CustomIcon
              IconType={item.iconType}
              name={item.iconName}
              size={homeHeaderIcon.size}
              color={myColors.skyBlue}
              style={Styles.iconStyle}
            />
            <Text
              style={{
                ...Styles.facilityName,
                color: myColors.primaryTextColor[theme],
              }}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  /*  Facilities Container*/
  return (
    <View style={Styles.FacilitiesContainer}>
      <FlatList
        scrollEnabled={false}
        data={FacilityData}
        numColumns={5}
        renderItem={(item, index) => facilityRenderItem(item, index)}
      />
    </View>
  );
};

const reRender = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
};

const Styles = StyleSheet.create({
  FacilitiesContainer: {
    flexDirection: 'column',
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  FacilityRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
const mapDispatchToProps = {
  changeTheme,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeFacility1Component);
