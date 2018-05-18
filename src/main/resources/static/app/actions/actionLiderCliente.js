import axios from 'axios' 
import { LIDERCLIENTE_GET, LIDERCLIENTE_ADD, LIDERCLIENTE_UPDATE } from './actionTypes';

export function getLideresCliente(lidercliente) {
	return (dispatch, getState) => {
		axios.get('lidercliente/1')
			.then((response) => { dispatch({ type: LIDERCLIENTE_GET, payload: response.data }) }) 
	}
}

export function getLiderCliente(lidercliente) {
	return (dispatch, getState) => {
		axios.get('lidercliente/', lidercliente)
			.then((response) => { dispatch({ type: LIDERCLIENTE_GET, payload: response.data }) }) 
	}
}

export function addLiderCliente(lidercliente) {
	return (dispatch, getState) => {
		axios.post('lidercliente/', lidercliente)
			.then((response) => { dispatch({ type: LIDERCLIENTE_ADD, payload: response.data }) })
	}
}

export function updateLiderCliente(lidercliente) {
	console.log(lidercliente);
	return (dispatch, getState) => {
		axios.put('lidercliente/', lidercliente)
			.then((response) => { dispatch({ type: LIDERCLIENTE_UPDATE, payload: response.data }) })
	}
}