import React from 'react';
import classnames from 'classnames';

const ButtonGroup = ({ label, divClass, botonClass, tipo, onClick, isLoading, disabled }) => {
	var htmlField = '';
	if( tipo === 'button' ) {
		htmlField = (
			//<button className={classnames('btn', botonClass )} onClick={onClick} disabled={isLoading}>{label}</button>
			<button className={classnames('btn', botonClass )} onClick={onClick} disabled={disabled}>{label}</button>
			
		)
	} if ( tipo === 'link' ) {
		htmlField = (
			<a className={classnames('btn', botonClass )} onClick={onClick} disabled={disabled}>{label}</a>
		)
	}
	
	return (
		<div className={classnames(divClass, 'col-md-offset-0')}>
			{htmlField}
		</div>
	);
}

export default ButtonGroup;