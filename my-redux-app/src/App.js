import React, { useState } from 'react';
// Import hooks to connect Redux to React components
import { useSelector, useDispatch } from 'react-redux';
// Import action creators from the counter slice
import { increment, decrement, incrementByAmount } from './redux/CounterSlice';

function App() {
  // useSelector reads the counter value from Redux state
  const count = useSelector((state) => state.counter.value);
  
  // useDispatch is used to send actions to Redux
  const dispatch = useDispatch();

  // Local state for the input field (not in Redux, just for UI)
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Counter: {count}</h1>

      {/* Button to increment counter by 1 */}
      <button onClick={() => dispatch(increment())}>+</button>
      
      {/* Button to decrement counter by 1 */}
      <button onClick={() => dispatch(decrement())}>-</button>

      <div style={{ marginTop: 20 }}>
        {/* Input to let user enter a custom amount */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
        {/* Button to add the custom amount to counter */}
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default App;
