import axios from 'axios' 
import { EMPLEADOS_ALL, 
	TIPOPROYECTO_GET,
	TIPOTAREA_GET
	} from './actionTypes';


export function getEmpleados() {
	return (dispatch, getState) => {
		axios.get('empleado/')
			.then((response) => { dispatch({ type: EMPLEADOS_ALL, payload: response.data }) }) 
	}
}

// Tipo Proyecto
export function getTipoProyecto() {
	return (dispatch, getState) => {
		axios.get('tipoproyecto/')
			.then((response) => { dispatch({ type: TIPOPROYECTO_GET, payload: response.data }) }) 
	}
}
// Tipo Tarea
export function getTipoTarea() {
	return (dispatch, getState) => {
		axios.get('tipotarea/')
			.then((response) => { dispatch({ type: TIPOTAREA_GET, payload: response.data }) }) 
	}
}