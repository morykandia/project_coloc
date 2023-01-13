import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Components/App';
import {Store} from './Components/Store';
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
  <App />
</Provider>

);

