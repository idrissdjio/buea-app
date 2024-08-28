import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
