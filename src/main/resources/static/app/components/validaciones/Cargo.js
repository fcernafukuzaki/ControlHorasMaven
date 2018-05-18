import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
	let errors = {};

	if (Validator.isNull(data.nombreCargo)) {
		errors.nombreCargo = 'Campo es requerido';
	}
	
	return {
		errors,
		isValid: isEmpty(errors)
	};
}