import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	actionTipoProyecto,
	actionTipoTarea,
	showUsers, 
	getTipoTarea
	} from './reducer'
import { 
	getSupervisor,
	getAnalistaSeguimiento,
	getAnalistaFabrica
	} from './reducerEmpleado'
import { actionCargo } from './reducerCargo'
import { actionPeriodoFacturacion } from './reducerPeriodoFacturacion'
import { actionProyecto } from './reducerProyecto'
import { actionLiderCliente } from './reducerLiderCliente'
import { actionCliente } from './reducerCliente'

const rootReducer = combineReducers({
	user: showUsers,
	reducerPeriodoFacturacion: actionPeriodoFacturacion,
	reducerProyecto: actionProyecto,
	reducerTipoProyecto: actionTipoProyecto,
	reducerTipoTarea: actionTipoTarea,
	tipoTareaGET: getTipoTarea,
	reducerSupervisor: getSupervisor,
	reducerAnalistaSeguimiento: getAnalistaSeguimiento,
	reducerAnalistaFabrica: getAnalistaFabrica,
	reducerCargo: actionCargo,
	reducerLiderCliente: actionLiderCliente,
	reducerCliente: actionCliente
});

export default rootReducer;