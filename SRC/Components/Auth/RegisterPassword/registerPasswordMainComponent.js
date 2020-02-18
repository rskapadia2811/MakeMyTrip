import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {myColors} from '../../../Helpers/ColorHelper';
import GLOBAL from '../../GLOBAL';

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
      <GLOBAL>
        <View style={Styles.loginSignupMainContainer}>
          <RegisterPasswordHeaderComponent navigation={this.props.navigation} />
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
          theme={this.props.theme}
          visibleButton={this.state.visibleButton}
          onPress={() => this.passwordCallback(this.prevData)}
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
  return {theme: state.ThemeReducer.theme};
};
export default connect(
  mapStateToProps,
  null,
)(RegisterPasswordMainComponent);
