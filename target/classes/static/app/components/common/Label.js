import React from 'react';
import classnames from 'classnames';

const Label = ({ label, labelClass }) => {
	return (
		<label className={classnames('control-label', labelClass)}>{label}</label>
	);
}

export default Label;