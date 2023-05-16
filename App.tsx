/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import EntryPoint from './app/containers/EntryPoint';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <EntryPoint />
    </Provider>
  );
}

export default App;
