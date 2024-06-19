import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Store/CouponReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
  reducer: rootReducer,
 // devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
 // enhancers: [composeWithDevTools()],
});

export default store;
