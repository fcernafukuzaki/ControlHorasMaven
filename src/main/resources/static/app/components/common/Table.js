import React from 'react';
import classnames from 'classnames';

function getTableHead(field){
	var htmlField = '';
	htmlField = (
		<th key={field.key}>{field.nombre}</th>
	)
	return htmlField;
}

const Table = ({ tableHead, tableBody }) => {
	
	var tableHead = tableHead.map( campo =>{
		return getTableHead(campo);
	});

	return(
		<div className="container-fluid">
			<table className="table table-hover table-condensed">
				<thead>
					<tr>
						{tableHead}
					</tr>
				</thead>
				<tbody>
					{tableBody}
				</tbody>
			</table>
		</div>
	);
}

export default Table;