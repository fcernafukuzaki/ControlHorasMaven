import React from 'react';
import classnames from 'classnames';

import SelectMultipleField from './SelectMultipleField';

const SelectMultipleFieldGroup = ({ name, value, valueSelected, label, error, type, onChange, labelClass, fieldClass, size, multiple, checkUserExists }) => {
	return (
		<SelectMultipleField
			key={name}
			label={label}
			value={value}
			valueSelected={valueSelected}
			type={type}
			error={error}
			onChange={onChange}
			labelClass={labelClass}
			fieldClass={fieldClass}
			size={size}
		/>
	);
}

export default SelectMultipleFieldGroup;