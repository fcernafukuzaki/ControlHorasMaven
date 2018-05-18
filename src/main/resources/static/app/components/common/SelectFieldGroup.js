import React from 'react';
import classnames from 'classnames';

import Label from './Label';
import SelectField from './SelectField';

const SelectFieldGroup = ({ id, name, value, valueSelected, label, error, type, onChange, labelClass, fieldClass, size, multiple, checkUserExists }) => {
	return (
		<div className={classnames('form-group', { 'has-error': error })}>
			<Label label={label} labelClass={labelClass} />
			<SelectField
				key={name}
				id={id}
				name={name}
				value={value}
				valueSelected={valueSelected}
				type={type}
				error={error}
				onChange={onChange}
				fieldClass={fieldClass}
				size={size}
			/>
		</div>
	);
}

export default SelectFieldGroup;