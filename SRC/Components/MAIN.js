import {getAsyncData} from '../Helpers/AsyncStorage';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeTheme} from '../Actions/ThemeAction';
class MAIN extends Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
    getAsyncData('theme').then(data => {
      if (!data) {
        this.props.changeTheme('light');
      } else {
        this.props.changeTheme(data);
      }
    });
    getAsyncData('welcomePage').then(data => {
      if (data == '1') {
        getAsyncData('uid').then(data => {
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
  };
  render() {
    return <></>;
  }
}
export default connect(
  null,
  {changeTheme},
)(MAIN);
