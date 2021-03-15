/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useReducer } from 'react';
import { MyProvider } from './store';
import Navigation from './navigation';
import { reducerFunction, initialState } from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <MyProvider value={{state, dispatch}}>
      <Navigation isLoggedIn={state.isLoggedIn} />
    </MyProvider>
  );

};

export default App;
