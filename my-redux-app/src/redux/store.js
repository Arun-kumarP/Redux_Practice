// Import configureStore from Redux Toolkit - creates and configures the Redux store
import { configureStore } from '@reduxjs/toolkit';
// Import the counter reducer from CounterSlice
import counterReducer from './CounterSlice';

// Create and configure the Redux store
export const store = configureStore({
  reducer: {
    // 'counter' is the state slice name, counterReducer manages its logic
    // This makes state.counter available throughout the app
    counter: counterReducer
  }
});
