import React, {Component} from 'react';

import Table from './common/Table';
import moment from 'moment';

//var dateFormat = require('dateformat');

class ProyectoTable extends Component {
	constructor(){
		super();
	}
	
	getTableBody() {
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
		} else if(this.props.tableBody != null) {
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
	/*<td>{dateFormat(row.fechaInicio, "dd/mm/yyyy")}</td>
			<td>{dateFormat(row.fechaFin, "dd/mm/yyyy")}</td>*/
	getTableBodyTd(row){
		return (
		<tr key={row.idProyecto}>
			<td>{row.codigo}</td>
			<td>{row.nombre}</td>
			<td>{row.tipoProyecto.nombre}</td>
			<td>{row.liderCliente.nombreCompleto}</td>
			<td>{moment(row.fechaInicio, "dd/mm/yyyy")}</td>
			<td>{moment(row.fechaFin, "dd/mm/yyyy")}</td>
			<td><a className="btn btn-danger delete-order" onClick={this.props.onClick.bind(this,row)}>Actualizar</a></td>
		</tr>
		)
	}
	
	render() {
		var tableHead = [{
				key: 'Codigo',
				nombre: 'Codigo'
			},{
				key: 'Nombre',
				nombre: 'Nombre'
			},{
				key: 'Tipo proyecto',
				nombre: 'Tipo proyecto'
			},{
				key: 'Líder cliente',
				nombre: 'Líder cliente'
			},{
				key: 'Analista de seguimiento',
				nombre: 'Analista de seguimiento'
			},{
				key: 'Fecha inicio',
				nombre: 'Fecha inicio'
			},{
				key: 'Fecha fin',
				nombre: 'Fecha fin'
			},{
				key: 'Acción',
				nombre: 'Acción'
		}]
		
		return (
			<Table tableHead={tableHead} tableBody={this.getTableBody()} />
		)
	}
}

export default ProyectoTable