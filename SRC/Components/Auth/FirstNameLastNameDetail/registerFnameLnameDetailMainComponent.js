import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {registerUser} from '../../../Actions/authAction';
import {myColors} from '../../../Helpers/ColorHelper';
import GLOBAL from '../../GLOBAL';

// Component
import RegisterFnameLnameDetailHeaderComponent from './Components/registerFnameLnameDetailHeaderComponent';
import RegisterFnameLnameDetailBodyComponent from './Components/registerFnameLnameDetailBodyComponent';
import RegisterFnameLnameDetailFooterComponent from './Components/registerFnameLnameDetailFooterComponent';

// Action
export class RegisterFnameLnameDetailMainComponent extends Component {
  registerThisUser = component => {
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
      <GLOBAL>
        <View
          style={{
            ...Styles.loginSignupMainContainer,
            backgroundColor: myColors.primaryBGColor[this.props.theme],
          }}>
          <RegisterFnameLnameDetailHeaderComponent
            navigation={this.props.navigation}
          />
          <RegisterFnameLnameDetailBodyComponent
            theme={this.props.theme}
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
          theme={this.props.theme}
          visibleButton={this.state.visibleButton}
          onPress={() => {
            let uid = this.prevData.uid;
            delete this.prevData.uid;
            this.props.registerUser(uid, this.prevData, this.registerThisUser);
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
const mapDispatchToProps = {
  registerUser,
};

const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterFnameLnameDetailMainComponent);
