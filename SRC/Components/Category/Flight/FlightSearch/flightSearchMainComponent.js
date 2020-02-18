import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {myColors} from '../../../../Helpers/ColorHelper';
import {connect} from 'react-redux';
import FlightSearchHeaderComponent from './Components/flightSearchHeaderComponent';
import FlightSearchBodyComponent from './Components/flightSearchBodyComponent';
import GLOBAL from '../../../GLOBAL';
class FlightSearchMainComponent extends Component {
  constructor() {
    super();
    this.state = {
      wayIndex: 0,
      fromDate: new Date(),
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
            theme={this.props.theme}
            navigation={this.props.navigation}
            onPress={index => {
              this.setState({wayIndex: index});
            }}
            wayIndex={this.state.wayIndex}
          />
          <FlightSearchBodyComponent
            theme={this.props.theme}
            navigation={this.props.navigation}
            state={this.state}
            index={this.state.wayIndex}
            setTrip={value => {
              this.setState({wayIndex: value});
            }}
            fromDate={
              this.props &&
              this.props.navigation &&
              this.props.navigation.state &&
              this.props.navigation.state.params &&
              this.props.navigation.state.params.date
            }
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
const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
export default connect(
  mapStateToProps,
  null,
)(FlightSearchMainComponent);
