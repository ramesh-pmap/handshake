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
import { toggleSidebar, changeFrameSource } from './redux/actions';

// Stylesheets.
import './styles/sass/andromeda/andromeda.scss';

let store = createStore(DocMgtApp);

// Set initial sidebar state;
store.dispatch(toggleSidebar(true));

// Set initial sidebar state;
store.dispatch(changeFrameSource('http://productfacelift.pmapconnect.com/AIMS/WRAIMS/CaseHistory/Case_History_listing.asp?ModuleId=15&Module_Id=15&LocationId=8790&Location_Id=8790'));

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
