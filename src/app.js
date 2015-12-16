// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';

// Pages.
import LoginPage from './modules/global/pages/login';
import ToolkitHome from './modules/toolkit/pages/home';
import DataPage from './modules/global/pages/data';
import IconsPage from './modules/global/pages/icon-grid';
import DocMgtPage from './modules/document-management/home';
import DocMgtUploadPage from './modules/document-management/upload';

// import ToolkitCSS from './modules/toolkit/pages/css';

// Stylesheets.
import './styles/sass/andromeda/andromeda.scss';


// Routes template.
const template = (
	<Router history={createBrowserHistory()}>

		<Route path="/" component={LoginPage} title="Login Page" />
		<Route path="toolkit" component={ToolkitHome} title="Toolkit Page" />
		<Route path="data" component={DataPage} title="Data Sample Page" />
		<Route path="icons" component={IconsPage} title="Icons Page" />
		<Route path="document-management" component={DocMgtPage} title="Document Management" />
		<Route path="document-management-upload" component={DocMgtUploadPage} title="Document Management Upload" />

	</Router>
);

// Insertion point.
const el = document.getElementById('app');

ReactDOM.render(template, el);
