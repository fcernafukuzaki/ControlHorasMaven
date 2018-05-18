import React from 'react';
import classnames from 'classnames';

const SelectField = ({ value, valueSelected, name, error, type, onChange, fieldClass, size, multiple, checkUserExists }) => {
	return (
		<div className={classnames( fieldClass )}>
			<select name={name} className="form-control" onChange={onChange} size={size} multiple={multiple} value={valueSelected}>
				{value}
			</select>
			{error && <span className="help-block">{error}</span>}
		</div>
	);
}

export default SelectField;