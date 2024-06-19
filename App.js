import React from 'react';
import AppNavigator from '../BestCoupon/navigation/AppNavigator';
import { Provider } from 'react-redux';
import Store from '../BestCoupon/src/Store/store'
const App = () => {
  
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
