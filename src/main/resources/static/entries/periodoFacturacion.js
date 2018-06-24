import React from 'react';
import { render } from 'react-dom';
import PeriodoFacturacionForm from '../app/components/PeriodoFacturacionForm';
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

const periodoFacturacionContainer = document.getElementById('periodoFacturacion-container');

render(
  <Provider store={store}>
    <PeriodoFacturacionForm />
  </Provider>
  , periodoFacturacionContainer);
