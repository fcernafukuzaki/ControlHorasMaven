import {
	CARGO_GET, CARGO_ADD, CARGO_UPDATE
	} from '../actions/actionTypes'

const initialState = { 
	getListCargoResponse: [],
	getCargoResponse: []
}

export function actionCargo(state = initialState, action){
	switch (action.type) {
		case CARGO_GET:
			return Object.assign({}, state, {getListCargoResponse: action.payload})
		case CARGO_ADD:
			return Object.assign({}, state, {getCargoResponse: action.payload})
		case CARGO_UPDATE:
			return Object.assign({}, state, {getCargoResponse: action.payload})
		default:
			return state 
	}
}
