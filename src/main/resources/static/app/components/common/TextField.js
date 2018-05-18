import React from 'react';
import classnames from 'classnames';

const TextField = ({ id, name, value, error, type, onChange, fieldClass }) => {
	return (
		<div className={classnames( fieldClass ) }>
			<input
				id={id}
				name={name}
				value={value}
				type={type}
				onChange={onChange}
				className="form-control"
			/>
			{error && <span className="help-block">{error}</span>}
		</div>
	);
}

TextField.defaultProps = {
	type: 'text'
}

export default TextField;