import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Animated} from 'react-native';
import {myColors} from '../../../Helpers/ColorHelper';
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
  render() {
    return (
      <>
        <Animated.View
          style={[
            Styles.facility1Container,
            {
              backgroundColor: this.scroll.interpolate({
                inputRange: [0, 100],
                outputRange:
                  this.props.theme === 'light'
                    ? [myColors.white, myColors.lightSky]
                    : [myColors.primaryBGColor[this.props.theme], 'black'],
              }),
              elevation: this.scroll.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 10],
              }),
              shadowColor: this.scroll.interpolate({
                inputRange: [0, 100],
                outputRange: [
                  this.props.theme === 'dark' ? myColors.black : myColors.white,
                  this.props.theme === 'dark' ? myColors.white : myColors.black,
                ],
              }),
              shadowOpacity: this.scroll.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 0.8],
              }),
            },
          ]}>
          <HomeFacility1Component
            theme={this.props.theme}
            navigation={this.props.navigation}
            fu={() => this.forceUpdate()}
          />
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
          <HomeFacility2Component theme={this.props.theme} />
          <HomeFindStatusComponent />
          <HomeGiftAndDealComponent />
          <HomeTripMoneyComponent theme={this.props.theme} />
          <HomeHotDealsComponent theme={this.props.theme} />
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
    shadowRadius: 3,
  },
});
export default HomeBodyComponent;
