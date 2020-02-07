import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// Component
import LoginSignUpHeaderComponent from './Components/loginSignUpHeaderComponent';
import LoginSignUpBodyComponent from './Components/loginSignUpBodyComponent';
import LoginSignUpFooterComponent from './Components/loginSignUpFooterComponent';

// Action
import {checkEmailMobile} from '../../../Actions/authAction';
import GLOBAL from '../../GLOBAL';

export class LoginSignUpMainComponent extends Component {
  loginSignUpCallback = (component, data) => {
    this.props.navigation.navigate(component, {data: data});
  };
  render() {
    return (
      <GLOBAL>
        <View style={Styles.loginSignupMainContainer}>
          <LoginSignUpHeaderComponent navigation={this.props.navigation} />
          <LoginSignUpBodyComponent
            emailMobileCheck={(type, data) => {
              this.props.checkEmailMobile(type, data, this.loginSignUpCallback);
            }}
          />
        </View>
        <LoginSignUpFooterComponent />
      </GLOBAL>
    );
  }
}

const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  loginSignupMainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = {
  checkEmailMobile,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginSignUpMainComponent);
