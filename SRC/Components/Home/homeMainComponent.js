import React, {Component, PropTypes} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import GLOBAL from '../GLOBAL';
// Components
import HomeHeaderComponent from './Components/homeHeaderComponent';
import HomeBodyComponent from './Components/homeBodyComponent';
import {myColors} from '../../Helpers/ColorHelper';
class HomeMainComponent extends Component {
  render() {
    return (
      <GLOBAL>
        <View
          style={{
            ...Styles.mainContainer,
            backgroundColor: myColors.primaryBGColor[this.props.theme],
          }}>
          <HomeHeaderComponent
            navigation={this.props.navigation}
            theme={this.props.theme}
          />
          <HomeBodyComponent
            theme={this.props.theme}
            navigation={this.props.navigation}
          />
        </View>
      </GLOBAL>
    );
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    flexDirection: 'column',
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
)(HomeMainComponent);
