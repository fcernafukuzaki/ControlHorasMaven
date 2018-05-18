import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Formulario from './common/Formulario';
import CargoTable from './CargoTable';
import BarraBusqueda from './common/BarraBusqueda';
import validateInput from './validaciones/Cargo';
import { getCargos, getCargo, addCargo, updateCargo } from '../actions/actionCargo';

class CargoForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			filter: null,
			idCargo: '',
			nombreCargo: '',
			errors: {},
			isLoading: false,
			cargo:{}
		}
		
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClickCancelar = this.onClickCancelar.bind(this);
	}
	
	getCargos(state){
		this.props.getCargos(state);
	}
	
	componentWillMount() {
		this.getCargos(this.state.cargo);
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.cargo !== this.props.cargo) {
			this.getCargos(this.state.cargo);
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
				cargo:{
					idCargo: this.state.idCargo,
					nombre: this.state.nombreCargo
				}
			}, () => {
				if(this.state.idCargo === ''){
					this.props.addCargo(this.state.cargo);
				} else {
					this.props.updateCargo(this.state.cargo);
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
			idCargo: row.idCargo,
			nombreCargo: row.nombre
		})
		//this.props.getCargo(row.idCargo);
	}
	
	clear(){
		this.setState({
			idCargo: '',
			nombreCargo: '',
			isLoading: false,
			cargo: {}
		})
	}
	
	render() {
		const { idCargo , nombreCargo , errors, isLoading } = this.state;
		var form = {
			titulo: 'Formulario Cargo',
			campos: [
				{
					key: 'idCargo',
					name: 'idCargo',
					id: 'idCargo',
					type: 'hidden',
					value: idCargo,
					error: errors.idCargo,
					onChange: this.onChange
				} , {
					key: 'nombreCargo',
					name: 'nombreCargo',
					id: 'nombreCargo',
					label: 'Nombre cargo : ',
					type: 'text',
					value: nombreCargo,
					error: errors.nombreCargo,
					onChange: this.onChange,
					labelClass: 'col-md-2',
					fieldClass: 'col-md-5'
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
				
				<BarraBusqueda label={"Filtrar por Nombre cargo : "} onChange={this.filterList.bind(this)} />
				
				<CargoTable tableBody={this.props.cargos} filter={this.state.filter} onClick={this.onClick.bind(this)} />
				
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		cargos : state.reducerCargo.getListCargoResponse,
		cargo : state.reducerCargo.getCargoResponse
	}
}

export default connect(mapStateToProps, {getCargos, getCargo, addCargo, updateCargo })(CargoForm);