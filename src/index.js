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

// Stylesheets.
import './styles/sass/andromeda/andromeda.scss';

let store = createStore(DocMgtApp);

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
