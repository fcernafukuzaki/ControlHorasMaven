import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
	let errors = {};

	if (Validator.isNull(data.codigo)) {
		errors.codigo = 'Campo es requerido';
	}
	
	if (Validator.isNull(data.nombre)) {
		errors.nombre = 'Campo es requerido';
	}
	
	if (Validator.isNull(data.cantidadHoras.toString())) {
		errors.cantidadHoras = 'Campo es requerido';
	} else if (!Validator.isInt(data.cantidadHoras.toString())) {
		errors.cantidadHoras = 'Campo debe ser numérico';
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