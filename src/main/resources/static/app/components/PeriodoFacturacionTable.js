import React, {Component} from 'react';

import moment from 'moment';

import Table from './common/Table';

//var dateFormat = require('dateformat');

class PeriodoFacturacionTable extends Component {
	constructor(){
		super();
	}
	
	getTableBody(){
		let rows = []
		
		if (this.props.filter != null && this.props.tableBody != null) {
			this.props.tableBody.map((row) => {
				let filter = this.props.filter
				if( row.periodo.indexOf(filter) > -1 ) {
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
	//<td>{moment(row.fechaInicio, "dd/mm/yyyy")}</td>
			//<td>{moment(row.fechaFin, "dd/mm/yyyy")}</td>
		return (
		<tr key={row.idPeriodoFacturacion}>
			<td>{row.periodo}</td>
			<td>{row.horasObjetivo}</td>
			<td>{row.fechaInicio}</td>
			<td>{row.fechaFin}</td>
			<td><a className="btn btn-danger delete-order" onClick={this.props.onClick.bind(this,row)}>Actualizar</a></td>
		</tr>
		)
	}
	
	render(){
		var tableHead = [{
				key: 'Periodo',
				nombre: 'Periodo'
			},{
				key: 'Horas objetivo',
				nombre: 'Horas objetivo'
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
		
		return(
			<Table tableHead={tableHead} tableBody={this.getTableBody()} />
		)
	}
}

export default PeriodoFacturacionTable