import React from 'react';
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../Helpers/screenHelper';
import {fonts} from '../../../Helpers/variableHelper';

const HomeGiftAndDealComponent = () => {
  const giftAndDealData = [
    {
      id: 1,
      name: 'Gift Cards',
      backGroundImage: require('@assets/Images/GiftAndDeal/GD1.jpg'),
      count: 5,
      onPress: () => {},
    },
    {
      id: 2,
      name: 'Meals & Deals',
      count: 0,
      backGroundImage: require('@assets/Images/GiftAndDeal/GD2.jpg'),
      onPress: () => {},
    },
    {
      id: 3,
      name: 'Travel Offers',
      count: 140,
      backGroundImage: require('@assets/Images/GiftAndDeal/GD3.jpg'),
      onPress: () => {},
    },
  ];
  const giftAndDealRenderItem = ({item, index}) => {
    return (
      <View>
        {item.count > 0 ? (
          <View style={Styles.notifyTextContainer}>
            <Text style={Styles.notifyText}>{item.count}</Text>
          </View>
        ) : (
          <></>
        )}
        <View style={{flex: 1, borderRadius: 10}}>
          <ImageBackground
            style={Styles.singleGiftAndDealContainer}
            source={item.backGroundImage}
            imageStyle={Styles.imageContainer}
            borderRadius={10}
            overlayColor={'black'}>
            <Text style={Styles.giftAndDealText}>{item.name}</Text>
          </ImageBackground>
        </View>
      </View>
    );
  };
  /*  Gift And Deal Container */
  return (
    <View style={Styles.giftAndDealContainer}>
      <FlatList
        data={giftAndDealData}
        numColumns={3}
        renderItem={(item, index) => giftAndDealRenderItem(item, index)}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  giftAndDealContainer: {
    alignItems: 'center',
  },
  singleGiftAndDealContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: hp(1.5),
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 5,
    justifyContent: 'center',
    margin: wp(2.5),
    width: wp(27),
    overflow: 'hidden'
  },
  imageContainer: {
    borderRadius: 5,
    opacity: 0.5,
  },
  giftAndDealText: {
    fontSize: hp(1.4),
    fontFamily: fonts.latoBlack,
    color: 'white',
  },
  notifyTextContainer: {
    position: 'absolute',
    padding: wp(0.5),
    backgroundColor: 'red',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,
    right: 3,
    zIndex: 500,
  },
  notifyText: {
    textAlign: 'center',
    fontSize: hp(1.2),
    fontFamily: fonts.latoBlack,
    color: 'white',
  },
});

export default HomeGiftAndDealComponent;
