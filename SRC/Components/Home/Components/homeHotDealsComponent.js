import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {myColors} from '../../../Helpers/ColorHelper';
import {fonts} from '../../../Helpers/variableHelper';
const screenWidth = Dimensions.get('window').width;
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../Helpers/screenHelper';

const HomeHotDealsComponent = ({theme}) => {
  const DealData = [
    {
      id: 1,
      image: require('../../../Assets/Images/HotDeal/SliderImage/image1.jpeg'),
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and International Activities',
      bankLogo: require('../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
    },
    {
      id: 2,
      image: require('../../../Assets/Images/HotDeal/SliderImage/image2.jpeg'),
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and1 International Activities',
      bankLogo: require('../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
    },
    {
      id: 3,
      image: require('../../../Assets/Images/HotDeal/SliderImage/image3.jpeg'),
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and1 International Activities',
      bankLogo: require('../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
    },
    {
      id: 4,
      image: require('../../../Assets/Images/HotDeal/SliderImage/image4.jpeg'),
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and1 International Activities',
      bankLogo: require('../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
    },
    {
      id: 5,
      image: require('../../../Assets/Images/HotDeal/SliderImage/image5.jpg'),
      category: 'Activities',
      info:
        'Flat 30% Instant Discount* On Domestic and1 International Activities',
      bankLogo: require('../../../Assets/Images/HotDeal/Bank/hsbcBank.png'),
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
            <View style={Styles.categoryTopLeftLine} />
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
  const mainScrollViewData = DealData.map((item, index) => {
    return (
      <View>
        <Image source={item.image} style={{width: wp(100), height: hp(25)}} />
      </View>
    );
  });
  return (
    <View
      style={{
        ...Styles.hotDealMainContainer,
        backgroundColor: myColors.primaryBGColor[theme],
      }}>
      <View style={Styles.mainScrollViewContainer}>
        <View
          style={{
            position: 'absolute',
            zIndex: 100000,
            top: hp(20),
            height: hp(15),
          }}>
          <ScrollView
            pagingEnabled={true}
            ref={event => (this.scroll = event)}
            centerContent={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            scrollEventThrottle={1}
            bounces={false}
            onScroll={event => {
              let xPos = event.nativeEvent.contentOffset.x;
              this.mainScroll.scrollTo({
                x: this.page * wp(100),
                y: 0,
                animated: true,
              });
              this.page = Math.round(xPos / wp(72));
            }}
            onScrollEndDrag={event => {
              let wid = screenWidth * 0.73;
              if (this.page != 0) {
                let xPos = this.page * wid;
                this.scroll.scrollTo({x: xPos, y: 0, animated: true});
              }
            }}>
            {hotDealRenderData}
          </ScrollView>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          ref={event => (this.mainScroll = event)}
          scrollEnabled={false}
          // onScroll={()=>alert('hi')}
          bounces={false}
          horizontal={true}>
          {mainScrollViewData}
        </ScrollView>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  hotDealMainContainer: {
    height: hp(35),
  },
  hotDealContainer: {
    height: hp(25),
  },
  mainScrollViewContainer: {
    height: hp(25),
  },
  betweenDivContainer: {
    width: wp(70),
    marginRight: hp(2.5),
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: wp(2.5),
    paddingTop: hp(1.2),

    shadowRadius: 10,
    shadowOpacity: 1,
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
    shadowOffset: {x: 0, y: -5},
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
    backgroundColor: myColors.lightBlue,
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

export default HomeHotDealsComponent;
