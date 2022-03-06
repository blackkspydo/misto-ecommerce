import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import CartProvider from './store/CartProvider';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

