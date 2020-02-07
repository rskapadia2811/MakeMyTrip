import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import FlightSearchHeaderComponent from './Components/flightSearchHeaderComponent';
import FlightSearchBodyComponent from './Components/flightSearchBodyComponent';
import GLOBAL from '../../../GLOBAL';
class FlightSearchMainComponent extends Component {
  render() {
    return (
      <GLOBAL>
        <View style={{...Styles.flightSearchMainContainer}}>
          <FlightSearchHeaderComponent navigation={this.props.navigation} />
          <FlightSearchBodyComponent navigation={this.props.navigation} />
        </View>
      </GLOBAL>
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
