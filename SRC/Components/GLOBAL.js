import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

export default class GLOBAL extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={
            this.props.statusBarColor ? this.props.statusBarColor : '#FFFFFF'
          }
          barStyle={this.props.barStyle ? this.props.barStyle : 'dark-content'}
        />
        <SafeAreaView style={{flex: 1}}>{this.props.children}</SafeAreaView>
      </View>
    );
  }
}
