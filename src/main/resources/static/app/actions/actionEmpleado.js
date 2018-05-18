import axios from 'axios' 
import { EMPLEADO_SUPERVISOR_GET, EMPLEADO_ANALISTA_SEGUIMIENTO_GET, EMPLEADO_ANALISTA_FABRICA_GET } from './actionTypes';

export function getSupervisor() {
	return (dispatch, getState) => {
		axios.get('empleado/supervisor/')
			.then((response) => { dispatch({ type: EMPLEADO_SUPERVISOR_GET, payload: response.data }) }) 
	}
}

export function getAnalistaSeguimiento() {
	return (dispatch, getState) => {
		axios.get('empleado/analistaSeguimiento/')
			.then((response) => { dispatch({ type: EMPLEADO_ANALISTA_SEGUIMIENTO_GET, payload: response.data }) }) 
	}
}

export function getAnalistaFabrica() {
	return (dispatch, getState) => {
		axios.get('empleado/analistaFabrica/')
			.then((response) => { dispatch({ type: EMPLEADO_ANALISTA_FABRICA_GET, payload: response.data }) }) 
	}
}