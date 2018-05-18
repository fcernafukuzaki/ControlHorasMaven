import axios from 'axios' 
import { PERIODOFACTURACION_GET, PERIODOFACTURACION_ADD, PERIODOFACTURACION_UPDATE, PERIODOFACTURACION_RANGO_GET } from './actionTypes';

export function getPeriodoFacturacion(periodoFacturacion) {
	return (dispatch, getState) => {
		axios.get('periodofacturacion/')
			.then((response) => { dispatch({ type: PERIODOFACTURACION_GET, payload: response.data }) }) 
	}
}

export function addPeriodoFacturacion(periodoFacturacion) {
	return (dispatch, getState) => {
		axios.post('periodofacturacion/', periodoFacturacion)
			.then((response) => { dispatch({ type: PERIODOFACTURACION_ADD, payload: response.data }) })
	}
}

export function updatePeriodoFacturacion(periodoFacturacion) {
	return (dispatch, getState) => {
		axios.put('periodofacturacion/', periodoFacturacion)
			.then((response) => { dispatch({ type: PERIODOFACTURACION_UPDATE, payload: response.data }) })
	}
}

export function getPeriodoFacturacionRango(periodoFacturacion) {
	console.log('periodoFacturacion',periodoFacturacion);
	return (dispatch, getState) => {
		axios.get(('periodofacturacion/cliente/1/').concat(periodoFacturacion.anio,"/",periodoFacturacion.mes), periodoFacturacion)
			.then((response) => { dispatch({ type: PERIODOFACTURACION_RANGO_GET, payload: response.data }) })
	}
}