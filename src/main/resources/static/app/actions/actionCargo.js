import axios from 'axios' 
import { CARGO_GET, CARGO_ADD, CARGO_UPDATE } from './actionTypes';

export function getCargos(cargo) {
	return (dispatch, getState) => {
		axios.get('cargo/')
			.then((response) => { dispatch({ type: CARGO_GET, payload: response.data }) }) 
	}
}

export function getCargo(cargo) {
	return (dispatch, getState) => {
		axios.get('cargo/', cargo)
			.then((response) => { dispatch({ type: CARGO_GET, payload: response.data }) }) 
	}
}

export function addCargo(cargo) {
	return (dispatch, getState) => {
		axios.post('cargo/', cargo)
			.then((response) => { dispatch({ type: CARGO_ADD, payload: response.data }) })
	}
}

export function updateCargo(cargo) {
	return (dispatch, getState) => {
		axios.put('cargo/', cargo)
			.then((response) => { dispatch({ type: CARGO_UPDATE, payload: response.data }) })
	}
}