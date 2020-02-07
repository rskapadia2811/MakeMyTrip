import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import {searchAirportCity} from '../../../../Actions/searchAirportCityAction';
import GLOBAL from '../../../GLOBAL';
import {connect} from 'react-redux';
import CustomTextInput from '../../../../Common/CustomTextInput';
class SearchAirportCityMainComponent extends Component {
  render() {
    return (
      <GLOBAL>
        <View>
          <TextInput />
          {/*<CustomTextInput />*/}
          <TouchableOpacity
            onPress={() => {
              this.props.searchAirportCity('ahe');
            }}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </GLOBAL>
    );
  }
}
const mapDispatchToProps = {
  searchAirportCity,
};
export default connect(
  null,
  mapDispatchToProps,
)(SearchAirportCityMainComponent);
