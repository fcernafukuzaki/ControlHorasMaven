import {
	CLIENTE_GET, CLIENTE_ADD, CLIENTE_UPDATE
	} from '../actions/actionTypes'

const initialState = { 
	getListClienteResponse: [],
	getClienteResponse: []
}

export function actionCliente(state = initialState, action){
	switch (action.type) {
		case CLIENTE_GET:
			return Object.assign({}, state, {getListClienteResponse: action.payload})
		case CLIENTE_ADD:
			return Object.assign({}, state, {getClienteResponse: action.payload})
		case CLIENTE_UPDATE:
			return Object.assign({}, state, {getClienteResponse: action.payload})
		default:
			return state 
	}
}
