import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//import { Router, Route, browserHistory, Link } from 'react-router'; 
//import { browserHistory } from 'react-router';

//import store, { history } from './store';

import { /*compose, */createStore, applyMiddleware } from 'redux';
import offlineConfig from 'redux-offline/lib/defaults';

import { persistStore, autoRehydrate } from 'redux-persist';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/app';
import reducers from './reducers';

import NavBar from './components/NavBar.js';
//import Footer from './components/Footer.js';
//import SideBar from './components/SideBar.js';



const store = createStore(
	reducers,
	//initialState,
	applyMiddleware(
		thunk,
		logger
	),
	autoRehydrate()
);

const app = document.getElementById('root');
//const app = document.querySelector('.container');
//<Router history={browserHistory}>
ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router>
				<div className="container-fluid">
					<NavBar />
					<App />
				</div>
			</Router>
		</div>
	</Provider>
	, app);