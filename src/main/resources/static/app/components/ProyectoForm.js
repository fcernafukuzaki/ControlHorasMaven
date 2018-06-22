import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import moment from 'moment';

import Formulario from './common/Formulario';
import ProyectoTable from './ProyectoTable';
import BarraBusqueda from './common/BarraBusqueda';
import validateInput from './validate/Proyecto';

import SelectMultipleDualListBox from './common/SelectMultipleDualListBox';

import { getProyecto, addProyecto, updateProyecto,
	getProyectoSupervisorSelected, getProyectoAnalistaSeguimientoSelected, getProyectoAnalistaFabricaSelected,
	addProyectoSupervisor, updateProyectoSupervisor,
	addProyectoAnalistaSeguimiento, updateProyectoAnalistaSeguimiento,
	addProyectoAnalistaFabrica, updateProyectoAnalistaFabrica
	} from '../actions/actionProyecto'
import { getSupervisor, getAnalistaSeguimiento, getAnalistaFabrica } from '../actions/actionEmpleado'
import { getTipoProyecto } from '../actions'
import { getLideresCliente, getLiderCliente } from '../actions/actionLiderCliente'

//var dateFormat = require('dateformat');

class ProyectoForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			filter: null,
			idProyecto: '',
			codigo: '',
			nombre: '',
			cantidadHoras: '',
			tipoProyecto: '',
			idTipoProyecto: '',
			liderCliente: '',
			fechaInicio: '',
			fechaFin: '',
			errors: {},
			isLoading: false,
			proyecto: {},
			
			supervisor: [],
			analistaSeguimiento: [],
			analistaFabrica: []
			
		}
		
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClickCancelar = this.onClickCancelar.bind(this);
		
		this.onChangeSelectMultipleDualList = this.onChangeSelectMultipleDualList.bind(this);
	}
	
	getProyectos(state){
		this.props.getProyecto(state);
	}
	
	componentWillMount() {
		this.getProyectos(this.state.proyecto);
		//this.props.getProyectoAnalistaSeguimientoSelected(this.state.proyecto);
		//this.props.getProyectoAnalistaFabricaSelected(this.state.proyecto);
		//this.props.getProyectoAnalistaFabricaSelected(this.state.proyecto)
		
		this.props.getLideresCliente(this.state.proyecto);
		
		this.props.getTipoProyecto();
		this.props.getSupervisor();
		this.props.getAnalistaSeguimiento();
		this.props.getAnalistaFabrica();
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.proyecto !== this.props.proyecto) {
			this.getProyectos(this.state.proyecto);
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
				proyecto:{
					idProyecto: this.state.idProyecto,
					codigo: this.state.codigo,
					nombre: this.state.nombre,
					cantidadHoras: this.state.cantidadHoras,
					cliente : {
						idCliente: 1
					},
					liderCliente: {
						idLiderCliente: this.state.idLiderCliente
					},
					tipoProyecto: {
						idTipoProyecto: this.state.idTipoProyecto
					},
					fechaInicio: this.state.fechaInicio,
					fechaFin: this.state.fechaFin
				}
				/*,
				supervisor: this.state.supervisor,
				analistaSeguimiento: this.state.analistaSeguimiento,
				analistaFabrica: this.state.analistaFabrica*/
			}, () => {
				
				if(this.state.idProyecto.value === ''){
					this.props.addProyecto(this.state.proyecto);
					if(this.state.supervisor != undefined){ this.props.addProyectoSupervisor(this.state.idProyecto, this.state.supervisor); }
					if(this.state.analistaSeguimiento != undefined){ this.props.addProyectoAnalistaSeguimiento(this.state.idProyecto, this.state.analistaSeguimiento); }
					if(this.state.analistaFabrica != undefined){ this.props.addProyectoAnalistaFabrica(this.state.idProyecto, this.state.analistaFabrica); }
				} else {
					this.props.updateProyecto(this.state.proyecto);
					if(this.state.supervisor != undefined){ this.props.updateProyectoSupervisor(this.state.idProyecto, this.state.supervisor); }
					if(this.state.analistaSeguimiento != undefined){ this.props.updateProyectoAnalistaSeguimiento(this.state.idProyecto, this.state.analistaSeguimiento); }
					if(this.state.analistaFabrica != undefined){ this.props.updateProyectoAnalistaFabrica(this.state.idProyecto, this.state.analistaFabrica); }
				}
				this.clear();
			});
		}
	}
	
	onChangeSelectMultipleDualList(name,e){
		
		var idCargo = 0;
		if(name == 'supervisor'){ idCargo = 1 }
		if(name == 'analistaSeguimiento'){ idCargo = 2 }
		if(name == 'analistaFabrica'){ idCargo = 3 }
		
		let rows = []
		e.map( elemento =>{
			rows.push(
				{ idEmpleado: elemento, idProyecto: this.state.idProyecto, idCargo: idCargo }
			)
		})
		this.setState({ [name] : rows });
	}
	
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		
		
		console.log('Proyecto',this.props)
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
			idProyecto: row.idProyecto,
			codigo: row.codigo,
			nombre: row.nombre,
			cantidadHoras: row.cantidadHoras,
			tipoProyecto: row.tipoProyecto.idTipoProyecto,
			
			idTipoProyecto: row.tipoProyecto.idTipoProyecto,
			idLiderCliente: row.liderCliente.idLiderCliente,
			
			liderCliente: row.liderCliente.idLiderCliente,
			//fechaInicio: dateFormat(row.fechaInicio, "yyyy-mm-dd"),
			//fechaFin: dateFormat(row.fechaFin, "yyyy-mm-dd"),
			fechaInicio: moment(row.fechaInicio, "yyyy-mm-dd"),
			fechaFin: moment(row.fechaFin, "yyyy-mm-dd"),
			
			supervisor: this.props.getProyectoSupervisorSelected({idProyecto: row.idProyecto}),
			analistaSeguimiento: this.props.getProyectoAnalistaSeguimientoSelected({idProyecto: row.idProyecto}),
			analistaFabrica: this.props.getProyectoAnalistaFabricaSelected({idProyecto: row.idProyecto})
			
		});
	}
	
	clear(){
		this.setState({
			idProyecto: '',
			codigo: '',
			nombre: '',
			cantidadHoras: '',
			idTipoProyecto: 0,
			idLiderCliente: 0,
			tipoProyecto: '',
			liderCliente: '',
			fechaInicio: '',
			fechaFin: '',
			isLoading: false,
			proyecto: {},
			
			supervisor: [],
			analistaSeguimiento: [],
			analistaFabrica: []
			
		})
		
	}
	
	render() {
		const { idProyecto, codigo, nombre, cantidadHoras, analistaSeguimiento, analistaFabrica, tipoProyecto, idTipoProyecto, liderCliente, idLiderCliente, fechaInicio, fechaFin, errors, isLoading } = this.state;
		
		let rowsTiposProyecto = [{ label: "Seleccione..." , value: 0 }]
		this.props.tiposProyecto.map( elemento =>{
			rowsTiposProyecto.push(
				{
					label: elemento.nombre,
					value: elemento.idTipoProyecto
				}
			)
		})
		let rowsLideresCliente = [{ label: "Seleccione..." , value: 0 }]
		this.props.lideresCliente.map( elemento =>{
			rowsLideresCliente.push(
				{
					label: elemento.nombreCompleto,
					value: elemento.idLiderCliente
				}
			)
		})
		
		
		
		let rowsSupervisor = []
		let rowsAnalistaSeguimiento = []
		let rowsAnalistaFabrica = []
		
		if(idProyecto == ''){
			rowsSupervisor = []
			rowsAnalistaSeguimiento = []
			rowsAnalistaFabrica = []
			
		} else {
			this.props.proyectoListSupervisor.map( elemento =>{
				rowsSupervisor.push(
					{
						label: elemento.nombreCompleto,
						value: elemento.idEmpleado
					}
				)
			})
			
			this.props.proyectoListAnalistaSeguimiento.map( elemento =>{
				rowsAnalistaSeguimiento.push(
					{
						label: elemento.nombreCompleto,
						value: elemento.idEmpleado
					}
				)
			})
			
			this.props.proyectoListAnalistaFabrica.map( elemento =>{
				rowsAnalistaFabrica.push(
					{
						label: elemento.nombreCompleto,
						value: elemento.idEmpleado
					}
				)
			})
		}
		
		
		
		var form = {
			titulo: 'Registrar Proyecto',
			campos: [
				{
					key: 'idProyecto',
					name: 'idProyecto',
					id: 'idProyecto',
					type: 'hidden',
					value: idProyecto,
					error: errors.idProyecto,
					onChange: this.onChange
				},{
					key: 'codigo',
					name: 'codigo',
					id: 'codigo',
					label: 'Código : ',
					type: 'text',
					value: codigo,
					error: errors.codigo,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-5'
				},{
					key: 'nombre',
					name: 'nombre',
					id: 'nombre',
					label: 'Nombre : ',
					type: 'text',
					value: nombre,
					error: errors.nombre,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-5'
				},{
					key: 'cantidadHoras',
					name: 'cantidadHoras',
					id: 'cantidadHoras',
					label: 'Cantidad horas : ',
					type: 'text',
					value: cantidadHoras,
					error: errors.cantidadHoras,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-5'
				},{
					key: 'idTipoProyecto',
					name: 'idTipoProyecto',
					id: 'idTipoProyecto',
					label: 'Tipo proyecto : ',
					type: 'select',
					value: rowsTiposProyecto,
					valueSelected: idTipoProyecto,
					error: errors.tipoProyecto,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-5'
				},{
					key: 'idLiderCliente',
					name: 'idLiderCliente',
					id: 'idLiderCliente',
					label: 'Líder cliente : ',
					type: 'select',
					value: rowsLideresCliente,
					valueSelected: idLiderCliente,
					error: errors.liderCliente,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-5'
				},{
					key: 'supervisor',
					name: 'supervisor',
					id: 'supervisor',
					label: 'Supervisor : ',
					type: 'select-multiple-duallistbox',
					value: this.props.empleadoListSupervisor,
					valueSelected: rowsSupervisor,
					error: errors.supervisor,
					onChange: this.onChange,
					onChangeSelectMultipleDualList: this.onChangeSelectMultipleDualList,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-10',
					size: '10'
				},{
					key: 'analistaSeguimiento',
					name: 'analistaSeguimiento',
					id: 'analistaSeguimiento',
					label: 'Analista seguimiento : ',
					type: 'select-multiple-duallistbox',
					value: this.props.empleadoListAnalistaSeguimiento,
					valueSelected: rowsAnalistaSeguimiento,
					error: errors.analistaSeguimiento,
					onChange: this.onChange,
					onChangeSelectMultipleDualList: this.onChangeSelectMultipleDualList,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-10',
					size: '10'
				},{
					key: 'analistaFabrica',
					name: 'analistaFabrica',
					id: 'analistaFabrica',
					label: 'Analista fabrica : ',
					type: 'select-multiple-duallistbox',
					value: this.props.empleadoListAnalistaFabrica,
					valueSelected: rowsAnalistaFabrica,
					error: errors.analistaFabrica,
					onChange: this.onChange,
					onChangeSelectMultipleDualList: this.onChangeSelectMultipleDualList,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-10',
					size: '10'
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
					key:'fechaFin',
					name:'fechaFin',
					id:'fechaFin',
					label:'Fecha fin : ',
					type:'date',
					value:fechaFin,
					error:errors.fechaFin,
					onChange:this.onChange,
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
				<Formulario form={form} onChange={this.onChange} onChangeSelectMultipleDualList={this.onChangeSelectMultipleDualList} />
				
				<BarraBusqueda label={"Filtrar por Nombre proyecto : "} onChange={this.filterList.bind(this)} />
				
				<ProyectoTable tableBody={this.props.proyectos} filter={this.state.filter} onClick={this.onClick.bind(this)} />
				
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		proyectos : state.reducerProyecto.getListProyectoResponse,
		proyecto : state.reducerProyecto.getProyectoResponse,
		proyectoListSupervisor : state.reducerProyecto.getListSupervisorResponse,
		proyectoListAnalistaSeguimiento : state.reducerProyecto.getListAnalistaSeguimientoResponse,
		proyectoListAnalistaFabrica : state.reducerProyecto.getListAnalistaFabricaResponse,
		tiposProyecto : state.reducerTipoProyecto.getTipoProyectoResponse,
		empleadoListSupervisor : state.reducerSupervisor.getSupervisorResponse,
		empleadoListAnalistaSeguimiento : state.reducerAnalistaSeguimiento.getAnalistaSeguimientoResponse,
		empleadoListAnalistaFabrica : state.reducerAnalistaFabrica.getAnalistaFabricaResponse,
		lideresCliente : state.reducerLiderCliente.getListLiderClienteResponse,
		liderCliente : state.reducerLiderCliente.getLiderClienteResponse
	}
}

export default connect(mapStateToProps, { getProyecto , addProyecto , updateProyecto, getTipoProyecto, 
	getSupervisor, getAnalistaSeguimiento, getAnalistaFabrica, 
	getProyectoSupervisorSelected, getProyectoAnalistaSeguimientoSelected, getProyectoAnalistaFabricaSelected,
	addProyectoSupervisor, updateProyectoSupervisor,
	addProyectoAnalistaSeguimiento, updateProyectoAnalistaSeguimiento,
	addProyectoAnalistaFabrica, updateProyectoAnalistaFabrica,
	getLideresCliente, getLiderCliente })(ProyectoForm);