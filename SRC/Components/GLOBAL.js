import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {connect} from 'react-redux';
import {myColors} from '../Helpers/ColorHelper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../Helpers/screenHelper';
class GLOBAL extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: myColors.primaryBGColor[this.props.theme],
        }}>
        <StatusBar
          backgroundColor={
            this.props.statusBarColor
              ? this.props.statusBarColor
              : myColors.primaryBGColor[this.props.theme]
          }
          barStyle={
            this.props.barStyle
              ? this.props.barStyle
              : this.props.theme === 'light'
              ? 'dark-content'
              : 'light-content'
          }
        />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: myColors.primaryBGColor[this.props.theme],
          }}>
          {this.props.children}
        </SafeAreaView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
export default connect(
  mapStateToProps,
  null,
)(GLOBAL);
