import React from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {myColors} from '../../../../../Helpers/ColorHelper';
import {fonts} from '../../../../../Helpers/variableHelper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../../../Helpers/screenHelper';
const DontMissDealComponent = ({theme}) => {
  const DealData = [
    {
      id: 1,
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and International Activities',
      bankLogo: require('../../../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
    },
    {
      id: 2,
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and1 International Activities',
      bankLogo: require('../../../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
    },
    {
      id: 3,
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and1 International Activities',
      bankLogo: require('../../../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
    },
    {
      id: 4,
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and1 International Activities',
      bankLogo: require('../../../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
    },
    {
      id: 5,
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and1 International Activities',
      bankLogo: require('../../../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
    },
  ];
  const hotDealRenderData = DealData.map((item, index) => {
    return (
      <View
        style={{
          paddingLeft: index === 0 ? wp(11) : wp(0),
          paddingRight: index === DealData.length - 1 ? wp(11) : wp(0),
        }}>
        <View
          style={{
            ...Styles.betweenDivContainer,
            backgroundColor: myColors.primaryBGColor[theme],
          }}>
          <View style={Styles.categoryTopLeftContainer}>
            <View
              style={{
                ...Styles.categoryTopLeftLine,
                backgroundColor:
                  theme === 'dark' ? myColors.darkPink : myColors.lightBlue,
              }}
            />
            <Text
              style={{
                ...Styles.categoryText,
                color: myColors.primaryTextColor[theme],
              }}>
              {item.category}
            </Text>
          </View>
          <Text
            style={{
              ...Styles.whatAreYouText,
              color: myColors.primaryTextColor[theme],
            }}>
            {item.info}
          </Text>
        </View>
      </View>
    );
  });
  return (
    <View style={Styles.hotDealMainContainer}>
      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          height: hp(15),
        }}>
        <ScrollView
          ref={event => (this.scroll = event)}
          centerContent={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEventThrottle={1}
          bounces={false}>
          {hotDealRenderData}
        </ScrollView>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  hotDealMainContainer: {
    height: hp(15),
    backgroundColor: myColors.white,
  },
  hotDealContainer: {
    height: hp(5),
  },
  mainScrollViewContainer: {
    height: hp(5),
  },
  betweenDivContainer: {
    width: wp(70),
    marginRight: hp(2.5),
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: wp(2.5),
    paddingTop: hp(1.2),
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 10,
    shadowOffset: {x: 0, y: 0},
    padding: 7,
    height: hp(10),
    zIndex: 1000,
  },
  whatAreYouText: {
    fontSize: hp(1.5),
    fontFamily: fonts.latoRegular,
  },
  checkAvailablityContainer: {
    backgroundColor: myColors.white,
    padding: hp(1.0),
    alignSelf: 'flex-end',
    paddingLeft: wp(6),
    paddingRight: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    borderRadius: 15,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 10,
    shadowOffset: {x: 0, y: 0},
  },
  checkEligiblityText: {
    fontSize: hp(1.5),
    color: myColors.skyBlue,
    fontFamily: fonts.latoBlack,
  },
  categoryTopLeftContainer: {
    flexDirection: 'row',
  },
  categoryTopLeftLine: {
    marginLeft: wp(-2.5),
    width: wp(0.8),
    height: wp(3.5),
  },
  categoryText: {
    marginLeft: hp(1.5),
    fontSize: hp(1.4),
    fontFamily: fonts.latoRegular,
  },
});

export default DontMissDealComponent;
