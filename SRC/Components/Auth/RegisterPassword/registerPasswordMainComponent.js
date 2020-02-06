import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
// Component
import RegisterPasswordHeaderComponent from './Components/registerPasswordHeaderComponent';
import RegisterPasswordBodyComponent from './Components/registerPasswordBodyComponent';
import RegisterPasswordFooterComponent from './Components/registerPasswordFooterComponent';

// Action
export class RegisterPasswordMainComponent extends Component {
  passwordCallback = prevData => {
    this.props.navigation.navigate('RegisterFnameLnameDetailComponent', {
      prevData,
    });
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
            <RegisterPasswordHeaderComponent
              navigation={this.props.navigation}
            />
            <RegisterPasswordBodyComponent
              prevData={this.data}
              setVisibleButton={(value, prevData) => {
                this.setState({
                  visibleButton: value,
                });
                this.prevData = prevData;
              }}
            />
          </View>
          <RegisterPasswordFooterComponent
            visibleButton={this.state.visibleButton}
            onPress={() => this.passwordCallback(this.prevData)}
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

export default connect(
  null,
  null,
)(RegisterPasswordMainComponent);
