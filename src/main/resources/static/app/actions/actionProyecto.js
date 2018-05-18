import axios from 'axios' 
import { PROYECTO_GET, PROYECTO_ADD, PROYECTO_UPDATE,
	PROYECTO_SUPERVISOR_SELECTED_GET, PROYECTO_SUPERVISOR_SELECTED_ADD,
	PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_GET, PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_ADD,
	PROYECTO_ANALISTA_FABRICA_SELECTED_GET, PROYECTO_ANALISTA_FABRICA_SELECTED_ADD
	} from './actionTypes';

export function getProyecto(proyecto) {
	return (dispatch, getState) => {
		axios.get('proyecto/cliente/1')
			.then((response) => { dispatch({ type: PROYECTO_GET, payload: response.data }) }) 
	}
}

export function addProyecto(proyecto) {
	return (dispatch, getState) => {
		axios.post('proyecto/cliente/', proyecto)
			.then((response) => { dispatch({ type: PROYECTO_ADD, payload: response.data }) })
	}
}

export function updateProyecto(proyecto) {
	//console.log('proyecto',proyecto);
	return (dispatch, getState) => {
		axios.put('proyecto/cliente/', proyecto)
			.then((response) => { dispatch({ type: PROYECTO_UPDATE, payload: response.data }) })
	}
}

export function getProyectoSupervisorSelected(proyecto) {
	return (dispatch, getState) => {
		axios.get(('proyecto/cliente/1/').concat(proyecto.idProyecto,'/supervisor/'), proyecto)
			.then((response) => { dispatch({ type: PROYECTO_SUPERVISOR_SELECTED_GET, payload: response.data }) 
			})
	}
}

export function getProyectoAnalistaSeguimientoSelected(proyecto) {
	return (dispatch, getState) => {
		axios.get(('proyecto/cliente/1/').concat(proyecto.idProyecto,'/analistaSeguimiento/'), proyecto)
			.then((response) => { dispatch({ type: PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_GET, payload: response.data }) 
			})
	}
}

export function getProyectoAnalistaFabricaSelected(proyecto) {
	console.log("proyecto.idProyecto",proyecto.idProyecto);
	return (dispatch, getState) => {
		axios.get(('proyecto/cliente/1/').concat(proyecto.idProyecto,'/analistaFabrica/'), proyecto)
			.then((response) => { dispatch({ type: PROYECTO_ANALISTA_FABRICA_SELECTED_GET, payload: response.data }) })
	}
}

export function addProyectoSupervisor(idProyecto, proyecto) {
	return (dispatch, getState) => {
		axios.post(('proyecto/cliente/1/').concat(idProyecto,'/supervisor/'), proyecto)
			.then((response) => { dispatch({ type: PROYECTO_SUPERVISOR_SELECTED_GET, payload: response.data }) })
	}
}

export function updateProyectoSupervisor(idProyecto, proyecto) {
	return (dispatch, getState) => {
		axios.put(('proyecto/cliente/1/').concat(idProyecto,'/supervisor/'), proyecto)
			.then((response) => { dispatch({ type: PROYECTO_SUPERVISOR_SELECTED_ADD, payload: response.data }) })
	}
}

export function addProyectoAnalistaSeguimiento(idProyecto, proyecto) {
	return (dispatch, getState) => {
		axios.post(('proyecto/cliente/1/').concat(idProyecto,'/analistaSeguimiento/'), proyecto)
			.then((response) => { dispatch({ type: PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_ADD, payload: response.data }) })
	}
}

export function updateProyectoAnalistaSeguimiento(idProyecto, proyecto) {
	//console.log(' act analistaSeguimiento',proyecto);
	return (dispatch, getState) => {
		axios.put(('proyecto/cliente/1/').concat(idProyecto,'/analistaSeguimiento/'), proyecto)
			.then((response) => { dispatch({ type: PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_ADD, payload: response.data }) })
	}
}

export function addProyectoAnalistaFabrica(idProyecto, proyecto) {
	return (dispatch, getState) => {
		axios.post(('proyecto/cliente/1/').concat(idProyecto,'/analistaFabrica/'), proyecto)
			.then((response) => { dispatch({ type: PROYECTO_ANALISTA_FABRICA_SELECTED_ADD, payload: response.data }) })
	}
}

export function updateProyectoAnalistaFabrica(idProyecto, proyecto) {
	console.log(' act analistaFabrica',idProyecto);
	console.log(' act analistaFabrica',proyecto);
	return (dispatch, getState) => {
		axios.put(('proyecto/cliente/1/').concat(idProyecto,'/analistaFabrica/'), proyecto)
			.then((response) => { dispatch({ type: PROYECTO_ANALISTA_FABRICA_SELECTED_ADD, payload: response.data }) })
	}
}

/*
export function getProyectoAnalistaSeguimientoSelected(proyecto) {
	return (dispatch, getState) => {
		axios.get('proyecto/cliente/1/1/analistaSeguimiento/disponible/', proyecto)
			.then((response) => { dispatch({ type: PROYECTO_ANALISTA_SEGUIMIENTO_SELECTED_GET, payload: response.data }) })
	}
}

export function getProyectoAnalistaFabricaSelected(proyecto) {
	return (dispatch, getState) => {
		axios.get('proyecto/cliente/1/1/analistaFabrica/disponible/', proyecto)
			.then((response) => { dispatch({ type: PROYECTO_ANALISTA_FABRICA_SELECTED_GET, payload: response.data }) })
	}
}*/