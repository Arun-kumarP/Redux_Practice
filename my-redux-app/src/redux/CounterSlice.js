// Import createSlice from Redux Toolkit - this helps us create reducers easily
import { createSlice } from '@reduxjs/toolkit';

// Set the initial state of the counter (starts at 0)
const initialState = {
  value: 0
};

// Create a slice that handles counter logic
export const counterSlice = createSlice({
  name: 'counter', // Name of this slice in the Redux store
  initialState, // Initial state we defined above
  reducers: {
    // Action to increment counter by 1
    increment: state => { state.value += 1 },
    
    // Action to decrement counter by 1
    decrement: state => { state.value -= 1 },
    
    // Action to increment counter by a specific amount (passed as payload)
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// Export all the action creators (functions that create actions)
// These are used to dispatch actions from components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer as default - this is used in the store configuration
export default counterSlice.reducer;
