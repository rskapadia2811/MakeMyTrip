import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../Helpers/screenHelper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CustomIcon from '../../../Common/CustomIcon';
import {fonts} from '../../../Helpers/variableHelper';

const HomeFindStatusComponent = () => {
  const statusOfData = [
    {
      id: 1,
      name: 'Trip Ideas',
      iconType: Feather,
      iconName: 'info',
      onPress: () => {},
    },
    {
      id: 2,
      name: 'Flight Status',
      iconType: Fontisto,
      iconName: 'plane',
      onPress: () => {},
    },
    {
      id: 3,
      name: 'Train Status',
      iconType: FontAwesome,
      iconName: 'train',
      onPress: () => {},
    },
  ];
  const statusOfRenderItem = ({item}) => {
    return (
      <View style={Styles.singleStatusOfContainer}>
        <CustomIcon
          IconType={item.iconType}
          name={item.iconName}
          size={wp(4)}
          color={'#EC1C27'}
          style={Styles.iconStyle}
        />
        <Text style={Styles.findStatusNameText}>{item.name}</Text>
      </View>
    );
  };
  /*  Find Status Container */
  return (
    <View style={Styles.FindStatusContainer}>
      <FlatList
        data={statusOfData}
        numColumns={3}
        renderItem={(item, index) => statusOfRenderItem(item, index)}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  FindStatusContainer: {
    alignItems: 'center',
  },
  singleStatusOfContainer: {
    backgroundColor: '#FCE5E6',
    alignItems: 'center',
    flexDirection: 'row',
    padding: hp(1.2),
    borderRadius: 10,
    width: wp(27),
    margin: wp(2.5),
  },
  findStatusNameText: {
    marginLeft: wp(1.5),
    fontSize: hp(1.4),
    fontFamily: fonts.latoRegular,
  },
});

export default HomeFindStatusComponent;
