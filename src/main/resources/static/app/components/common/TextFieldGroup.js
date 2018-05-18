import React from 'react';
import classnames from 'classnames';

import Label from './Label';
import TextField from './TextField';

const TextFieldGroup = ({ id, name, value, label, error, type, onChange, labelClass, fieldClass }) => {
	return (
		<div className={classnames('form-group', { 'has-error': error })}>
			<Label label={label} labelClass={labelClass} />
			<TextField 
				id={id}
				name={name}
				value={value}
				type={type}
				onChange={onChange}
				fieldClass={fieldClass}
				error={error}
				className="form-control"
			/>
		</div>
	);
}

TextFieldGroup.defaultProps = {
	type: 'text'
}

export default TextFieldGroup;