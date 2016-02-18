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
  setFirebaseUrl,
  setDevMode
} from './redux/actions/ui-actions';
// import { fetchFolders } from './redux/actions/folders-actions';
// import { setAuthorizationToken, setConsumerId } from './redux/actions/global-actions';
import { fetchTenant } from './redux/actions/tenant-actions';
import { fetchAuth } from './redux/actions/auth-actions';
import { setConsumerId } from './redux/actions/global-actions';
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

// Set dev mode.
store.dispatch(setDevMode(true));

// Get window dimensions.
const dimensions = utils.getWindowDimensions();

// Set initial sidebar state.
store.dispatch(getWindowDimensions(dimensions));
store.dispatch(toggleLeftSidebar(true));
store.dispatch(toggleRightSidebar(false));
// Set firebase url.
store.dispatch(setFirebaseUrl('https://resplendent-heat-3135.firebaseio.com'));
// Set iframe source.
store.dispatch(changeFrameSource('http://productfacelift.pmapconnect.com/AIMS/WRAIMS/CaseHistory/Case_History_listing.asp?ModuleId=15&Module_Id=15&LocationId=8790&Location_Id=8790'));

// Get Tenant data and then call authentication action.
store.dispatch(fetchTenant('productfacelift.pmapconnect.com'))
.then(response => {
  Promise.all([
    store.dispatch(fetchAuth(response.tenant.Id)),
    store.dispatch(setConsumerId(response.tenant.Id))
  ]).then(() => {
    let token = store.getState().global.authorizationToken;
    let consumerId = store.getState().global.consumerId;
    // Async action sample.
    // dispatch(fetchFolders('7059a989-f85b-4193-ac32-a485024e4ea4', token, consumerId));
    if (token) {
      store.dispatch(fetchFolders('root', token, consumerId));
      // store.dispatch(fetchFolders('7059a989-f85b-4193-ac32-a485024e4ea4', token, consumerId));
    }
    // console.log('Async actions completed! Token=', token);
  }).catch(error => {
    console.log('error: check fetchTenant method on index.js', error);
  });
});

// Promise.all([
//   // Get Tenant data and then call authentication action.
//   store.dispatch(fetchTenant('productfacelift.pmapconnect.com'))
//   .then(response => {
//     store.dispatch(fetchAuth(response.tenant.Id));
//     store.dispatch(setConsumerId(response.tenant.Id));
//   })
// ]).then(() => {
//   let token = store.getState().global.authorizationToken;
//   let consumerId = store.getState().global.consumerId;
//   // Async action sample.
//   // dispatch(fetchFolders('7059a989-f85b-4193-ac32-a485024e4ea4', token, consumerId));
//   if (token) {
//     store.dispatch(fetchFolders('root', token, consumerId));
//   }
//   console.log('Async actions completed! Token=', token);
// }).catch(error => {
//   console.log('error', error);
// });


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
