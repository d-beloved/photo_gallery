import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './styles.scss';
// import { maintainSession } from './utils/common';

// maintainSession();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  rootElement
);