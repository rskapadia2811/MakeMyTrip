import React, {Component} from 'react';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import FlightSearchHeaderComponent from './Components/flightSearchHeaderComponent';
class FlightSearchMainComponent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
        <SafeAreaView style={{flex: 1}}>
          <View style={{...Styles.flightSearchMainContainer}}>
            <FlightSearchHeaderComponent navigation={this.props.navigation} />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  flightSearchMainContainer: {
    flex: 1,
  },
});
export default connect(
  null,
  null,
)(FlightSearchMainComponent);
