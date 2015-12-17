// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Local Dependencies.
import Routes from './routes';
import App from './app';
import DocMgtApp from './redux/reducers';
// import {toggleSidebar} from './redux/actions';

// Stylesheets.
import './styles/sass/andromeda/andromeda.scss';

let store = createStore(DocMgtApp);

// console.log(store.getState());
// // Every time the state changes, log it
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );
// store.dispatch(toggleSidebar(true));
// store.dispatch(toggleSidebar(false));
// store.dispatch(toggleSidebar(true));
// store.dispatch(toggleSidebar(false));
// unsubscribe();

// Routes template.
const template = (
  <Provider store={store}>
    <App>
      <Router history={createBrowserHistory()}>
        {Routes}
      </Router>
    </App>
  </Provider>
);

// Insertion point.
const el = document.getElementById('app');

ReactDOM.render(template, el);
