import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxStore from './store';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);