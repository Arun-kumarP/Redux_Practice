import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import Provider to connect Redux store to React
import { Provider } from 'react-redux';
// Import the Redux store we created
import { store } from './redux/store';

// Create the root React component
const root = ReactDOM.createRoot(document.getElementById('root'));
// Wrap the App with Provider to make Redux store available to all components
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example, reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
