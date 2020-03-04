import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import GLOBAL from '../../../GLOBAL';
import {myColors} from '../../../../Helpers/ColorHelper';
import CustomIcon from '../../../../Common/CustomIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from '../../../../Helpers/screenHelper';
import {fonts} from '../../../../Helpers/variableHelper';
import TravellersAndClassHeaderComponent from './Components/travellersAndClassHeaderComponent';
import TravellersAndClassBodyComponent from './Components/travellersAndClassBodyComponent';
class TravellersAndClassMainComponent extends Component {
  render() {
    const {
      adults,
      childs,
      infants,
      classes1,
    } = this.props.navigation.state.params;
    return (
      <GLOBAL>
        <TravellersAndClassHeaderComponent
          theme={this.props.theme}
          navigation={this.props.navigation}
        />
        <TravellersAndClassBodyComponent
          adult={adults}
          child={childs}
          infant={infants}
          classes={classes1}
          theme={this.props.theme}
          navigation={this.props.navigation}
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
)(TravellersAndClassMainComponent);
