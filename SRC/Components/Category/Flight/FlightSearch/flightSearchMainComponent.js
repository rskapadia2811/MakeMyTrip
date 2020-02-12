import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {connect} from 'react-redux';
import _ from 'lodash';
import FlightSearchHeaderComponent from './Components/flightSearchHeaderComponent';
import FlightSearchBodyComponent from './Components/flightSearchBodyComponent';
import GLOBAL from '../../../GLOBAL';
class FlightSearchMainComponent extends Component {
  constructor() {
    super();
    this.state = {
      wayIndex: 0,
      oneWayFromCityData: null,
      oneWayToCityData: null,
    };
  }
  setStateData = (key, value) => {
    this.setState(
      {
        [key]: value,
      },
      () => {},
    );
  };

  render() {
    return (
      <GLOBAL>
        <NavigationEvents
          onWillFocus={data => {
            let myData = data.state.params;
            if (myData && myData.wayData) {
              this.setStateData(myData.wayData, myData);
            }
          }}
        />
        <View style={{...Styles.flightSearchMainContainer}}>
          <FlightSearchHeaderComponent
            navigation={this.props.navigation}
            onPress={index => {
              console.log(index);
              this.setState({wayIndex: index});
            }}
          />
          <FlightSearchBodyComponent
            navigation={this.props.navigation}
            state={this.state}
            index={this.state.wayIndex}
          />
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
