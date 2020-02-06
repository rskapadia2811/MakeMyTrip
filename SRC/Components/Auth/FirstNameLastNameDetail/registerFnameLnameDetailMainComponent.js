import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {registerUser} from '../../../Actions/authAction';
// Component
import RegisterFnameLnameDetailHeaderComponent from './Components/registerFnameLnameDetailHeaderComponent';
import RegisterFnameLnameDetailBodyComponent from './Components/registerFnameLnameDetailBodyComponent';
import RegisterFnameLnameDetailFooterComponent from './Components/registerFnameLnameDetailFooterComponent';

// Action
export class RegisterFnameLnameDetailMainComponent extends Component {
  registerThisUser = component => {
    console.log(component);
    this.props.navigation.navigate(component);
  };
  constructor() {
    super();
    this.state = {
      visibleButton: false,
    };
  }
  componentDidMount(): void {}

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={Styles.safeArea}>
          <View style={Styles.loginSignupMainContainer}>
            <RegisterFnameLnameDetailHeaderComponent
              navigation={this.props.navigation}
            />
            <RegisterFnameLnameDetailBodyComponent
              prevData={this.props.navigation.getParam('prevData', '')}
              setVisibleButton={(value, prevData) => {
                this.setState({
                  visibleButton: value,
                });
                this.prevData = prevData;
              }}
            />
          </View>
          <RegisterFnameLnameDetailFooterComponent
            visibleButton={this.state.visibleButton}
            onPress={() => {
              this.props.registerUser(this.prevData, this.registerThisUser);
            }}
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
  registerUser,
};
export default connect(
  null,
  mapDispatchToProps,
)(RegisterFnameLnameDetailMainComponent);
