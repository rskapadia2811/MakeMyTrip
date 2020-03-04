import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {myColors} from '../../../Helpers/ColorHelper';
// Component
import LoginOTPHeaderComponent from './Components/loginOTPHeaderComponent';
import LoginOTPBodyComponent from './Components/loginOTPBodyComponent';
import LoginOTPFooterComponent from './Components/loginOTPFooterComponent';

// Action
import {loginWithEmail} from '../../../Actions/authAction';
import GLOBAL from '../../GLOBAL';

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
      <GLOBAL>
        <View style={Styles.loginSignupMainContainer}>
          <LoginOTPHeaderComponent
            theme={this.props.theme}
            navigation={this.props.navigation}
          />
          <LoginOTPBodyComponent
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
        <LoginOTPFooterComponent
          theme={this.props.theme}
          visibleButton={this.state.visibleButton}
          onPress={() => {
            this.props.navigation.navigate('LoginPasswordComponent', {
              data: this.prevData,
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
)(LoginOTPMainComponent);
