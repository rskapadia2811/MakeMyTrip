import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {getAsyncData} from '../../Helpers/AsyncStorage';
import GLOBAL from '../GLOBAL';
// Components
import HomeHeaderComponent from './Components/homeHeaderComponent';
import HomeBodyComponent from './Components/homeBodyComponent';
class HomeMainComponent extends Component {
  componentDidMount(): void {
    getAsyncData('email').then(data => console.log(data));
  }

  render() {
    return (
      <GLOBAL>
        <View style={Styles.mainContainer}>
          <HomeHeaderComponent navigation={this.props.navigation} />
          <HomeBodyComponent navigation={this.props.navigation} />
        </View>
      </GLOBAL>
    );
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
});

export default HomeMainComponent;
