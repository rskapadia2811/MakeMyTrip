import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Animated} from 'react-native';
import {heightPercentageToDP as hp} from '../../../Helpers/screenHelper';
// Components
import HomeFacility1Component from './homeFacility1Component';
import HomeFacility2Component from './homeFacility2Component';
import HomeFindStatusComponent from './homeFindStatusComponent';
import HomeGiftAndDealComponent from './homeGiftAndDealComponent';
import HomeTripMoneyComponent from './homeTripMoneyComponent';
import HomeHotDealsComponent from './homeHotDealsComponent';

class HomeBodyComponent extends Component {
  constructor() {
    super();
    this.scroll = new Animated.Value(0);
  }

  handleScroll = event => {};
  render() {
    return (
      <>
        <Animated.View
          style={[
            Styles.facility1Container,
            {
              backgroundColor: this.scroll.interpolate({
                inputRange: [0, 100],
                outputRange: ['#FFFFFF', '#EBF7FE'],
              }),
              elevation: this.scroll.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 10],
              }),
              shadowColor: this.scroll.interpolate({
                inputRange: [0, 100],
                outputRange: ['#FFFFFF', '#000000'],
              }),
            },
          ]}>
          <HomeFacility1Component />
        </Animated.View>
        <ScrollView
          scrollEventThrottle={1}
          showsVerticalScrollIndicator={false}
          onScroll={event => {
            let yPos = event.nativeEvent.contentOffset.y;
            if (yPos <= 75) {
              this.scroll.setValue(yPos);
            }
          }}
          style={{height: hp(100)}}>
          <HomeFacility2Component />
          <HomeFindStatusComponent />
          <HomeGiftAndDealComponent />
          <HomeTripMoneyComponent />
          <HomeHotDealsComponent />
          <HomeFindStatusComponent />
          <HomeGiftAndDealComponent />
          <HomeFacility2Component />
          <HomeFindStatusComponent />
          <HomeGiftAndDealComponent />
          <HomeFacility2Component />
          <HomeFindStatusComponent />
          <HomeGiftAndDealComponent />
          <HomeFacility2Component />
          <HomeFindStatusComponent />
          <HomeGiftAndDealComponent />
        </ScrollView>
      </>
    );
  }
}
const Styles = StyleSheet.create({
  facility1Container: {
    borderRadius: 15,
    margin: 10,
    shadowOffset: {width: 0, height: 0},

    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});
export default HomeBodyComponent;
