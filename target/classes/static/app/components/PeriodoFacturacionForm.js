import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import Formulario from './common/Formulario';
import PeriodoFacturacionTable from './PeriodoFacturacionTable';
import BarraBusqueda from './common/BarraBusqueda';
import validateInput from './validaciones/PeriodoFacturacion';
import { getPeriodoFacturacion, addPeriodoFacturacion, updatePeriodoFacturacion} from '../actions/actionPeriodoFacturacion';

var dateFormat = require('dateformat');

class PeriodoFacturacionForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			filter: null,
			idPeriodoFacturacion: '',
			periodo: '',
			horasObjetivo: '',
			fechaInicio: '',
			fechaFin: '',
			errors: {},
			isLoading: false,
			periodoFacturacion:{}
		}
		
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClickCancelar = this.onClickCancelar.bind(this);
	}
	
	getPeriodosFacturacion(state){
		this.props.getPeriodoFacturacion(state);
	}
	
	componentWillMount() {
		this.getPeriodosFacturacion(this.state.periodoFacturacion);
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.periodoFacturacion !== this.props.periodoFacturacion) {
			this.getPeriodosFacturacion(this.state.periodoFacturacion);
		}
	}
	
	isValid() {
		const { errors, isValid } = validateInput(this.state);
		
		if (!isValid) {
			this.setState({	errors : errors	})
		}
		
		return isValid;
	}
	
	onSubmit(e) {
		e.preventDefault();
		if (this.isValid()) {
			this.setState({ 
				errors: {}, 
				isLoading: true 
			});
			this.setState({
				periodoFacturacion:{
					idPeriodoFacturacion: this.state.idPeriodoFacturacion,
					periodo: this.state.periodo,
					horasObjetivo: this.state.horasObjetivo,
					fechaInicio: this.state.fechaInicio,
					fechaFin: this.state.fechaFin
				}
			}, () => {
				if(this.state.idPeriodoFacturacion.value === ''){
					this.props.addPeriodoFacturacion(this.state.periodoFacturacion);
				} else {
					this.props.updatePeriodoFacturacion(this.state.periodoFacturacion);
				}
				this.clear();
			});
		}
	}
	
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	
	onClickCancelar(e) {
		this.clear();
	}
	
	filterList(e){
		let filter = e.target.value;
		this.setState({
			filter: filter
		})
	}
	
	onClick(row){
		this.setState({
			idPeriodoFacturacion: row.idPeriodoFacturacion,
			periodo: row.periodo,
			horasObjetivo : row.horasObjetivo,
			fechaInicio : dateFormat(row.fechaInicio, "yyyy-mm-dd"),
			fechaFin : dateFormat(row.fechaFin, "yyyy-mm-dd")
		})
	}
	
	clear(){
		this.setState({
			idPeriodoFacturacion: '',
			periodo: '',
			horasObjetivo : '',
			fechaInicio : '',
			fechaFin : '',
			isLoading: false,
			periodoFacturacion: {}
		})
	}
	
	render() {
		const { idPeriodoFacturacion, periodo, horasObjetivo, fechaInicio, fechaFin, errors, isLoading } = this.state;
		var form = {
			titulo: 'Registrar Periodo Facturación',
			campos: [
				{
					key: 'idPeriodoFacturacion',
					name: 'idPeriodoFacturacion',
					id: 'idPeriodoFacturacion',
					type: 'hidden',
					value: idPeriodoFacturacion,
					error: errors.idPeriodoFacturacion,
					onChange: this.onChange
				},{
					key: 'periodo',
					name: 'periodo',
					id: 'periodo',
					label: 'Periodo : ',
					type: 'text',
					value: periodo,
					error: errors.periodo,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-2'
				},{
					key: 'horasObjetivo',
					name: 'horasObjetivo',
					id: 'horasObjetivo',
					label: 'Horas objetivo : ',
					type: 'text',
					value: horasObjetivo,
					error: errors.horasObjetivo,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-2'
				},{
					key: 'fechaInicio',
					name: 'fechaInicio',
					id: 'fechaInicio',
					label: 'Fecha inicio : ',
					type: 'date',
					value: fechaInicio,
					error: errors.fechaInicio,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-3'
				},{
					key: 'fechaFin',
					name: 'fechaFin',
					id: 'fechaFin',
					label: 'Fecha fin : ',
					type: 'date',
					value: fechaFin,
					error: errors.fechaFin,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-3'
				}],
			botones: [
				{
					key: 'guardar',
					label: 'Guardar',
					divClass: 'col-md-1',
					botonClass: 'btn-primary btn-md',
					tipo: 'button',
					isLoading: isLoading
				} , {
					key: 'cancelar',
					label: 'Cancelar',
					divClass: 'col-md-1',
					botonClass: 'btn-primary btn-md',
					tipo: 'link',
					onClick: this.onClickCancelar,
					isLoading: isLoading
				}],
				onSubmit: this.onSubmit.bind(this)
			}
		
		return (
			<div>
				<Formulario form={form} />
				
				<BarraBusqueda label={"Filtrar por Periodo : "} onChange={this.filterList.bind(this)} />
				
				<PeriodoFacturacionTable tableBody={this.props.periodosFacturacion} filter={this.state.filter} onClick={this.onClick.bind(this)} />
				
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		periodosFacturacion : state.reducerPeriodoFacturacion.getListPeriodoFacturacionResponse,
		periodoFacturacion : state.reducerPeriodoFacturacion.getPeriodoFacturacionResponse
	}
}

export default connect(mapStateToProps, { getPeriodoFacturacion, addPeriodoFacturacion, updatePeriodoFacturacion })(PeriodoFacturacionForm);