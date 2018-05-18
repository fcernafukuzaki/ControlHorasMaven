import {
	LIDERCLIENTE_GET, LIDERCLIENTE_ADD, LIDERCLIENTE_UPDATE
	} from '../actions/actionTypes'

const initialState = { 
	getListLiderClienteResponse: [],
	getLiderClienteResponse: []
}

export function actionLiderCliente(state = initialState, action){
	switch (action.type) {
		case LIDERCLIENTE_GET:
			return Object.assign({}, state, {getListLiderClienteResponse: action.payload})
		case LIDERCLIENTE_ADD:
			return Object.assign({}, state, {getLiderClienteResponse: action.payload})
		case LIDERCLIENTE_UPDATE:
			return Object.assign({}, state, {getLiderClienteResponse: action.payload})
		default:
			return state 
	}
}
