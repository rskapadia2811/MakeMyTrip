import React from 'react';
import AppNavigator from './SRC/Navigations/AppNavigator';
import {Provider} from 'react-redux';
import configStore from './SRC/Stores';
const App = () => {
  return (
    <Provider store={configStore}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
