import {
	EMPLEADO_SUPERVISOR_GET, EMPLEADO_ANALISTA_SEGUIMIENTO_GET, EMPLEADO_ANALISTA_FABRICA_GET } from '../actions/actionTypes'

const initialStateEmpleado = {
	getSupervisorResponse: [],
	getAnalistaSeguimientoResponse: [],
	getAnalistaFabricaResponse: []
}

// Empleado
export function getSupervisor(state = initialStateEmpleado, action) {
	switch (action.type) {
		case EMPLEADO_SUPERVISOR_GET:
			return Object.assign({}, state, {getSupervisorResponse: action.payload})
		default:
			return state 
	}
}

export function getAnalistaSeguimiento(state = initialStateEmpleado, action) {
	switch (action.type) {
		case EMPLEADO_ANALISTA_SEGUIMIENTO_GET:
			return Object.assign({}, state, {getAnalistaSeguimientoResponse: action.payload})
		default:
			return state 
	}
}

export function getAnalistaFabrica(state = initialStateEmpleado, action) {
	switch (action.type) {
		case EMPLEADO_ANALISTA_FABRICA_GET:
			return Object.assign({}, state, {getAnalistaFabricaResponse: action.payload})
		default:
			return state 
	}
}