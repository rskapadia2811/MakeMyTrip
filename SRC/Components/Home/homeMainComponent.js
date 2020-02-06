import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {getAsyncData} from '../../Helpers/AsyncStorage';
// Components
import HomeHeaderComponent from './Components/homeHeaderComponent';
import HomeBodyComponent from './Components/homeBodyComponent';
class HomeMainComponent extends Component {
  componentDidMount(): void {
    SplashScreen.hide();
    getAsyncData('email').then(data => console.log(data));
  }

  render() {
    return (
      <SafeAreaView style={Styles.safeArea}>
        <View style={Styles.mainContainer}>
          <HomeHeaderComponent navigation={this.props.navigation} />
          <HomeBodyComponent navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
});

export default HomeMainComponent;
