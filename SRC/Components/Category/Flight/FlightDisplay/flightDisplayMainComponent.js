import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import GLOBAL from '../../../GLOBAL';
import FlightDisplayHeaderComponent from './Components/flightDisplayHeaderComponent';
import FlightDisplayBodyComponent from './Components/flightDisplayBodyComponent';

class FlightDisplayMainComponent extends Component {
  componentDidMount(): void {}

  render() {
    return (
      <GLOBAL>
        <FlightDisplayHeaderComponent
          navigation={this.props.navigation}
          theme={this.props.theme}
        />
        <FlightDisplayBodyComponent
          navigation={this.props.navigation}
          theme={this.props.theme}
        />
      </GLOBAL>
    );
  }
}
const Styles = StyleSheet.create({});
const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
export default connect(
  mapStateToProps,
  null,
)(FlightDisplayMainComponent);
