// Dependencies.
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';

// Pages.
import LoginPage from './modules/global/pages/login';
import HomePage from './modules/global/pages/home';
import DataPage from './modules/global/pages/data';
import DocMgtPage from './modules/document-management/home';
import Iframe from './modules/global/pages/iframe';


// Routes template.
export default (
	<Router history={createBrowserHistory()}>
		<Route path="/react/" component={LoginPage} title="Login Page" />
		<Route path="/react/home" component={HomePage} title="Home" />
		<Route path="/react/data" component={DataPage} title="Data Sample Page" />
		<Route path="/react/document-management" component={DocMgtPage} title="Document Management" />
		<Route path="/react/iframe" component={Iframe} title="iframe Demo" />
	</Router>
);
