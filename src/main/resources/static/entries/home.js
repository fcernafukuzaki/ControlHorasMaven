import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { persistStore, autoRehydrate } from 'redux-persist';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../app/reducers';

const store = createStore(
	reducers,
	//initialState,
	applyMiddleware(
		thunk,
		logger
	),
	autoRehydrate()
);

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer);
