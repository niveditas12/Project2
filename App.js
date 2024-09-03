import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import AppNavigator from './src/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
