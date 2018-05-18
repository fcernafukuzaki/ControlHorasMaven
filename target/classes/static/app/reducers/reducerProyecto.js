import {
	PROYECTO_GET, PROYECTO_ADD, PROYECTO_UPDATE,
	PROYECTO_SUPERVISOR_SELECTED_GET, PROYECTO_SUPERVISOR_SELECTED_ADD,
	PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_GET, PROYECTO_ANALISTA_FABRICA_SELECTED_GET,
	PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_ADD, PROYECTO_ANALISTA_FABRICA_SELECTED_ADD
	} from '../actions/actionTypes'

const initialState = { 
	getListProyectoResponse: [],
	getProyectoResponse: [],
	getListSupervisorResponse: [],
	getListAnalistaSeguimientoResponse: [],
	getListAnalistaFabricaResponse: [],
	getSupervisorResponse: [],
	getAnalistaSeguimientoResponse: [],
	getAnalistaFabricaResponse: []
}

export function actionProyecto(state = initialState, action){
	switch (action.type) {
		case PROYECTO_GET:
			return Object.assign({}, state, {getListProyectoResponse: action.payload})
		case PROYECTO_ADD:
			return Object.assign({}, state, {getProyectoResponse: action.payload})
		case PROYECTO_UPDATE:
			return Object.assign({}, state, {getProyectoResponse: action.payload})
		case PROYECTO_SUPERVISOR_SELECTED_GET:
			return Object.assign({}, state, {getListSupervisorResponse: action.payload})
		case PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_GET:
			return Object.assign({}, state, {getListAnalistaSeguimientoResponse: action.payload})
		case PROYECTO_ANALISTA_FABRICA_SELECTED_GET:
			return Object.assign({}, state, {getListAnalistaFabricaResponse: action.payload})
		case PROYECTO_SUPERVISOR_SELECTED_ADD:
			return Object.assign({}, state, {getSupervisorResponse: action.payload})
		case PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_ADD:
			return Object.assign({}, state, {getAnalistaSeguimientoResponse: action.payload})
		case PROYECTO_ANALISTA_FABRICA_SELECTED_ADD:
			return Object.assign({}, state, {getAnalistaFabricaResponse: action.payload})
		default:
			return state 
	}
}