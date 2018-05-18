import axios from 'axios' 
import { CLIENTE_GET, CLIENTE_ADD, CLIENTE_UPDATE } from './actionTypes';

export function getClientes(cliente) {
	return (dispatch, getState) => {
		axios.get('cliente/')
			.then((response) => { dispatch({ type: CLIENTE_GET, payload: response.data }) }) 
	}
}

export function getCliente(cliente) {
	return (dispatch, getState) => {
		axios.get('cliente/', cliente)
			.then((response) => { dispatch({ type: CLIENTE_GET, payload: response.data }) }) 
	}
}

export function addCliente(cliente) {
	return (dispatch, getState) => {
		axios.post('cliente/', cliente)
			.then((response) => { dispatch({ type: CLIENTE_ADD, payload: response.data }) })
	}
}

export function updateCliente(cliente) {
	return (dispatch, getState) => {
		axios.put('cliente/', cliente)
			.then((response) => { dispatch({ type: CLIENTE_UPDATE, payload: response.data }) })
	}
}