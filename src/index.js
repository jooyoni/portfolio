import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { rootReducer } from './modules';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store=createStore(rootReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);