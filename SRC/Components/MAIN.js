import {getAsyncData} from '../Helpers/AsyncStorage';
import React, {Component} from 'react';
class MAIN extends Component {
  componentDidMount(): void {
    getAsyncData('welcomePage').then(data => {
      if (data == '1') {
        getAsyncData('email').then(data => {
          if (data) {
            this.props.navigation.navigate('HomeComponent');
          } else {
            this.props.navigation.navigate('LoginSignUpComponent');
          }
        });
      } else if (data == '2') {
        this.props.navigation.navigate('HomeComponent');
      } else {
        this.props.navigation.navigate('WelcomeSplashComponent');
      }
    });
  }
  render() {
    return <></>;
  }
}
export default MAIN;
