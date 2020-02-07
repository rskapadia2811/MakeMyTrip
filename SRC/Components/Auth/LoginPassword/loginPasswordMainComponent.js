import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// Component
import LoginPasswordHeaderComponent from './Components/loginPasswordHeaderComponent';
import LoginPasswordBodyComponent from './Components/loginPasswordBodyComponent';
import LoginPasswordFooterComponent from './Components/loginPasswordFooterComponent';

// Action
import {loginWithEmail, loginWithPhone} from '../../../Actions/authAction';
import GLOBAL from '../../GLOBAL';
export class LoginPasswordMainComponent extends Component {
  loginPasswordCallback = component => {
    this.props.navigation.navigate(component);
  };
  constructor() {
    super();
    this.state = {
      visibleButton: false,
    };
  }
  componentDidMount(): void {
    this.data = this.props.navigation.getParam('data', '');
  }

  render() {
    return (
      <GLOBAL>
        <View style={Styles.loginSignupMainContainer}>
          <LoginPasswordHeaderComponent navigation={this.props.navigation} />
          <LoginPasswordBodyComponent
            prevData={this.data}
            setVisibleButton={(value, prevData) => {
              console.log(prevData);
              this.setState({
                visibleButton: value,
              });
              this.prevData = prevData;
            }}
          />
        </View>
        <LoginPasswordFooterComponent
          visibleButton={this.state.visibleButton}
          onPress={() => {
            if (this.prevData && this.prevData.email) {
              this.props.loginWithEmail(
                this.prevData,
                this.loginPasswordCallback,
              );
            } else if (this.prevData && this.prevData.phone) {
              this.props.loginWithPhone(
                this.prevData,
                this.loginPasswordCallback,
              );
            }
          }}
        />
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
const mapDispatchToProps = {
  loginWithEmail,
  loginWithPhone,
};
export default connect(
  null,
  mapDispatchToProps,
)(LoginPasswordMainComponent);
