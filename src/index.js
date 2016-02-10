// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// Local Dependencies.
import Routes from './routes';
import App from './app';
import rootReducer from './redux/reducers';
import {
  getWindowDimensions,
  toggleLeftSidebar,
  toggleRightSidebar,
  changeFrameSource,
  setFirebaseUrl
} from './redux/actions/ui-actions';
import { fetchFolders } from './redux/actions/folders-actions';

import utils from './utils';

// Stylesheets.
// import './styles/sass/andromeda/andromeda.scss';
import './styles/sass/andromeda/theme/theme.scss';

const loggerMiddleware = createLogger();

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

// console.log(store.getState());

const dimensions = utils.getWindowDimensions();

// Set initial sidebar state.
store.dispatch(getWindowDimensions(dimensions));
store.dispatch(toggleLeftSidebar(true));
store.dispatch(toggleRightSidebar(false));
// Set firebase url.
store.dispatch(setFirebaseUrl('https://resplendent-heat-3135.firebaseio.com'));
// Set iframe source.
store.dispatch(changeFrameSource('http://productfacelift.pmapconnect.com/AIMS/WRAIMS/CaseHistory/Case_History_listing.asp?ModuleId=15&Module_Id=15&LocationId=8790&Location_Id=8790'));
// Async action sample.
store.dispatch(fetchFolders(12345));


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
