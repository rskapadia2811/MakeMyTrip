import React, {Component} from 'react';
import {View} from 'react-native';
import WhiteTextView from './WhiteTextView';
import GLOBAL from '../GLOBAL';

class MyTextView extends Component {
  render() {
    return (
      <GLOBAL>
        <View style={{flex: 1}}>
        <WhiteTextView />
        </View>
      </GLOBAL>
    );
  }
}

export default MyTextView;
