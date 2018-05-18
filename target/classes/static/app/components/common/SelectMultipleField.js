import React from 'react';
import classnames from 'classnames';

import SelectField from './SelectField';

const SelectMultipleField = ({ name, value, valueSelected, label, error, type, onChange, labelClass, fieldClass, size, multiple, checkUserExists }) => {
	return (
		<SelectField
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
			multiple='multiple'
		/>
	);
}

export default SelectMultipleField;