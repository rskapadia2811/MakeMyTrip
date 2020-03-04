import React, {Component} from 'react';
import {} from 'react-native';
import AppNavigator from './SRC/Navigations/AppNavigator';
import {Provider} from 'react-redux';
import configStore from './SRC/Stores';
import {auth} from 'react-native-firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'dark',
    };
  }
  componentDidMount(): void {}

  render() {
    return (
      <Provider store={configStore}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
