import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {myColors} from '../../../Helpers/ColorHelper';
// Component
import RegisterOTPHeaderComponent from './Components/registerOTPHeaderComponent';
import RegisterOTPBodyComponent from './Components/registerOTPBodyComponent';
import RegisterOTPFooterComponent from './Components/registerOTPFooterComponent';

// Action
import {loginWithEmail} from '../../../Actions/authAction';
import GLOBAL from '../../GLOBAL';

export class RegisterOTPMainComponent extends Component {
  registerPasswordCallback = component => {
    this.props.navigation.navigate(component);
  };
  constructor() {
    super();
    this.state = {
      visibleButton: false,
    };
    this.email = '';
    this.phone = '';
    this.confirmResult = '';
  }
  componentDidMount(): void {
    this.phone = this.props.navigation.state.params.data.phone;
    this.confirmResult = this.props.navigation.state.params.data.confirmResult;
    this.data = {
      email: '',
      phone: this.phone,
      confirmResult: this.confirmResult,
    };
  }

  render() {
    return (
      <GLOBAL>
        <View style={Styles.loginSignupMainContainer}>
          <RegisterOTPHeaderComponent
            theme={this.props.theme}
            navigation={this.props.navigation}
          />
          <RegisterOTPBodyComponent
            theme={this.props.theme}
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
        <RegisterOTPFooterComponent
          prevData={this.prevData}
          theme={this.props.theme}
          visibleButton={this.state.visibleButton}
          onPress={(component, uid) => {
            delete this.prevData.confirmResult;
            delete this.prevData.OTP;
            this.prevData.uid = uid;
            this.props.navigation.navigate(component, {
              prevData: this.prevData,
            });
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
    backgroundColor: myColors.white,
  },
});

const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
const mapDispatchToProps = {
  loginWithEmail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterOTPMainComponent);
