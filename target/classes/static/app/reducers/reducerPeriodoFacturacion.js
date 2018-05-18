import {
	PERIODOFACTURACION_GET, PERIODOFACTURACION_ADD, PERIODOFACTURACION_UPDATE, PERIODOFACTURACION_RANGO_GET
	} from '../actions/actionTypes'

const initialState = { 
	getListPeriodoFacturacionResponse: [],
	getPeriodoFacturacionResponse: [],
	getListRangoPeriodoFacturacionResponse: []
}

export function actionPeriodoFacturacion(state = initialState, action){
	switch (action.type) {
		case PERIODOFACTURACION_GET:
			return Object.assign({}, state, {getListPeriodoFacturacionResponse: action.payload})
		case PERIODOFACTURACION_ADD:
			return Object.assign({}, state, {getPeriodoFacturacionResponse: action.payload})
		case PERIODOFACTURACION_UPDATE:
			return Object.assign({}, state, {getPeriodoFacturacionResponse: action.payload})
		case PERIODOFACTURACION_RANGO_GET:
			return Object.assign({}, state, {getListRangoPeriodoFacturacionResponse: action.payload})
		default:
			return state 
	}
}
