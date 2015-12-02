// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';

// Pages.
import LoginPage from './modules/global/pages/login';
import ToolkitHome from './modules/toolkit/pages/home';
import DataPage from './modules/global/pages/data';

// import ToolkitCSS from './modules/toolkit/pages/css';

// Stylesheets.
import './styles/sass/andromeda/andromeda.scss';


// Routes template.
const template = (
	<Router history={createBrowserHistory()}>

		<Route path="/" component={LoginPage} title="Login Page" />
		<Route path="toolkit" component={ToolkitHome} title="Toolkit Page" />
		<Route path="data" component={DataPage} title="Data Sample Page" />

	</Router>
);

// Insertion point.
const el = document.getElementById('app');

ReactDOM.render(template, el);
