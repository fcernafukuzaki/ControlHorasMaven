import React, {Component} from 'react';

import Table from './common/Table';

class CargoTable extends Component {
	constructor(){
		super();
	}
	
	getTableBody(){
		let rows = []
		
		if (this.props.filter != null && this.props.tableBody != null) {
			this.props.tableBody.map((row) => {
				let filter = this.props.filter
				if( row.nombre.indexOf(filter) > -1 ) {
					rows.push(
						this.getTableBodyTd(row)
					)
				}
			})
		} else if(this.props.tableBody != null){
			this.props.tableBody.map((row) => {
				rows.push(
					this.getTableBodyTd(row)
				)
			})
		} else {
			rows.push(<tr><td>Cargando</td></tr>)
		}
		return ( rows )
	}
	
	getTableBodyTd(row){
		return (
		<tr key={row.idCargo}>
			<td>{row.idCargo}</td>
			<td>{row.nombre}</td>
			<td><a className="btn btn-danger delete-order" onClick={this.props.onClick.bind(this,row)}>Actualizar</a></td>
		</tr>
		)
	}
	
	render(){
		var tableHead = [{
				key: 'id',
				nombre: '#'
			},{
				key: 'Nombre',
				nombre: 'Nombre cargo'
			},{
				key: 'Acción',
				nombre: 'Acción'
		}]
		
		return(
			<Table tableHead={tableHead} tableBody={this.getTableBody()} />
		)
	}
}

export default CargoTable