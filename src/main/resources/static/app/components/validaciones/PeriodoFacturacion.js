import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
	let errors = {};

	if (Validator.isNull(data.periodo)) {
		errors.periodo = 'Campo es requerido';
	} else if (!(Validator.isLength(data.periodo,{min:7, max: 7}))) {
		errors.periodo = 'Campo debe tener formato AAAA/MM';
	}
	
	if (Validator.isNull(data.horasObjetivo.toString())) {
		errors.horasObjetivo = 'Campo es requerido';
	} else if (!Validator.isInt(data.horasObjetivo.toString())) {
		errors.horasObjetivo = 'Campo debe ser numérico';
	}
	
	if (Validator.isNull(data.fechaInicio)) {
		errors.fechaInicio = 'Campo es requerido';
	}
	
	if (Validator.isNull(data.fechaFin)) {
		errors.fechaFin = 'Campo es requerido';
	}
	
	if (data.fechaFin < data.fechaInicio) {
		errors.fechaFin = 'Debe ingresar fecha fin mayor a fecha inicio.';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
}