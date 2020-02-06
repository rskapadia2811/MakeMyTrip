import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// Component
import LoginOTPHeaderComponent from './Components/loginOTPHeaderComponent';
import LoginOTPBodyComponent from './Components/loginOTPBodyComponent';
import LoginOTPFooterComponent from './Components/loginOTPFooterComponent';

// Action
import {loginWithEmail} from '../../../Actions/authAction';
export class LoginOTPMainComponent extends Component {
  loginPasswordCallback = component => {
    this.props.navigation.navigate(component);
  };
  constructor() {
    super();
    this.state = {
      visibleButton: false,
    };
    this.email = '';
    this.phone = '';
  }
  componentDidMount(): void {
    let data = this.props.navigation.getParam('data', '');
    if (data && data.email) {
      this.email = data.email;
    } else if (data && data.phone) {
      this.phone = data.phone;
    }
    this.data = {email: this.email, phone: this.phone};
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={Styles.safeArea}>
          <View style={Styles.loginSignupMainContainer}>
            <LoginOTPHeaderComponent navigation={this.props.navigation} />
            <LoginOTPBodyComponent
              navigation={this.props.navigation}
              prevData={this.data}
              setVisibleButton={(value, prevData) => {
                this.setState({
                  visibleButton: value,
                });
                this.prevData = prevData;
              }}
            />
          </View>
          <LoginOTPFooterComponent
            visibleButton={this.state.visibleButton}
            onPress={() =>
              this.props.loginWithEmail(
                this.prevData,
                this.loginPasswordCallback,
              )
            }
          />
        </SafeAreaView>
      </View>
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
};
export default connect(
  null,
  mapDispatchToProps,
)(LoginOTPMainComponent);
