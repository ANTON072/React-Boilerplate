import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from './App';

function init() {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
}

document.addEventListener('DOMContentLoaded', init);
