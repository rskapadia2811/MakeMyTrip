import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {myColors} from '../../../Helpers/ColorHelper';
// Component
import LoginSignUpHeaderComponent from './Components/loginSignUpHeaderComponent';
import LoginSignUpBodyComponent from './Components/loginSignUpBodyComponent';
import LoginSignUpFooterComponent from './Components/loginSignUpFooterComponent';

// Action
import {checkEmailMobile} from '../../../Actions/authAction';
import GLOBAL from '../../GLOBAL';

export class LoginSignUpMainComponent extends Component {
  constructor() {
    super();
  }
  componentDidMount(): void {}

  loginSignUpCallback = (component, data) => {
    this.props.navigation.navigate(component, {data: data});
  };
  render() {
    return (
      <GLOBAL>
        <View
          style={{
            ...Styles.loginSignupMainContainer,
            backgroundColor: myColors.primaryBGColor[this.props.theme],
          }}>
          <LoginSignUpHeaderComponent navigation={this.props.navigation} />
          <LoginSignUpBodyComponent
            theme={this.props.theme}
            emailMobileCheck={(type, data) => {
              this.props.checkEmailMobile(type, data, this.loginSignUpCallback);
            }}
          />
        </View>
        <LoginSignUpFooterComponent theme={this.props.theme} />
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
  },
});
const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
const mapDispatchToProps = {
  checkEmailMobile,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginSignUpMainComponent);
