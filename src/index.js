import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './components/ContextReducer'; // Ensure this path is correct

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
