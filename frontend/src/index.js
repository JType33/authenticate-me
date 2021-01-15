import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureStore from './store';
import csrfetch, { restore } from './store/csrfetch';

import './index.css';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restore();
  window.store = store;
  window.csrfetch = csrfetch;
}

function Root () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
