import { EMPLEADOS_ALL ,
	TIPOPROYECTO_GET,
	TIPOTAREA_GET
	} from '../actions/actionTypes'

const initialState = {
    list: [],
    getTipoProyectoResponse: [],
    getTipoTareaResponse: []
}

const initialStateTipoTarea = {
	getTipoTareaResponse: []
}

export function showUsers(state = initialState, action) {
    switch (action.type) {
        case EMPLEADOS_ALL:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }
}

export function actionTipoProyecto(state = initialState, action) {
    switch (action.type) {
        case TIPOPROYECTO_GET:
            return Object.assign({}, state, {getTipoProyectoResponse: action.payload})
        default:
            return state 
    }
}

export function actionTipoTarea(state = initialState, action) {
    switch (action.type) {
        case TIPOTAREA_GET:
            return Object.assign({}, state, {getTipoTareaResponse: action.payload})
        default:
            return state 
    }
}

export function getTipoTarea(state = initialStateTipoTarea, action) {
    switch (action.type) {
        case TIPOTAREA_GET:
            return Object.assign({}, state, {getTipoTareaResponse: action.payload})
        default:
            return state 
    }
}
