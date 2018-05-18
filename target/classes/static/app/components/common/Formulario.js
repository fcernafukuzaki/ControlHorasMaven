import React from 'react';
import { Component } from 'react';

import TextFieldGroup from './TextFieldGroup';
import SelectFieldGroup from './SelectFieldGroup';
import SelectMultipleFieldGroup from './SelectMultipleFieldGroup';
import SelectMultipleDualListBox from './SelectMultipleDualListBox';

import getCampo from './TextFieldGroupCampos';
import ButtonGroup from './ButtonGroup';

class Formulario extends Component {
	constructor(props){
		super(props);
	}
	/*
	getCampo(field){
		var htmlField = '';
		if(field.type === 'text' || field.type === 'date' || field.type === 'hidden') {
			htmlField = (
				<TextFieldGroup
					key={field.key}
					id={field.id}
					name={field.name}
					value={field.value}
					label={field.label}
					error={field.error}
					type={field.type}
					onChange={field.onChange}
					labelClass={field.labelClass}
					fieldClass={field.fieldClass}
				/>
			)
		} else if(field.type === 'select') {
			
			let rows = []
			
			field.value.map( campo =>{
				rows.push(
					<option key={campo.value} value={campo.value}>{campo.label}</option>
				)
			})
			
			htmlField = (
				<SelectFieldGroup
					key={field.label}
					id={field.id}
					name={field.name}
					label={field.label}
					value={rows}
					valueSelected={field.valueSelected}
					type={field.type}
					error={field.error}
					onChange={field.onChange}
					labelClass={field.labelClass}
					fieldClass={field.fieldClass}
				/>
			)
		} else if(field.type === 'select-multiple') {
			let rows = []
			
			field.value.map( campo =>{
				rows.push(
					<option key={campo.value} value={campo.value}>{campo.label}</option>
				)
			})
			
			htmlField = (
				<SelectMultipleFieldGroup
					key={field.name}
					name={field.name}
					label={field.label}
					value={rows}
					type={field.type}
					error={field.error}
					onChange={field.onChange}
					labelClass={field.labelClass}
					fieldClass={field.fieldClass}
					size={field.size}
				/>
			)
		} else if(field.type === 'select-multiple-duallistbox') {
			let rows = []
			let rowsSelected = []
			
			field.value.map( elemento =>{
				rows.push(
					{
						label: elemento.nombreCompleto,
						value: elemento.idEmpleado
					}
				)
			})
			
			field.valueSelected.map( elemento =>{
				rowsSelected.push(
					elemento.value
				)
			})
			
			htmlField = (
				<SelectMultipleDualListBox
					key={field.key}
					name={field.name}
					id={field.id}
					label={field.label}
					type={field.type}
					value={rows}
					valueSelected={rowsSelected}
					error={field.error}
					onChange={field.onChange}
					onChangeSelectMultipleDualList={field.onChangeSelectMultipleDualList}
					labelClass={field.labelClass}
					fieldClass={field.fieldClass}
					size={field.size}
					opciones={rows}
				/>
			)
		}
		return htmlField;
	}
	*/
	render() {
		var camposForm = this.props.form.campos.map( campo =>{
			return getCampo(campo);
			//return this.getCampo(campo);
		});
		
		var botonesForm = this.props.form.botones.map( boton =>{
			return <ButtonGroup
						key={boton.key}
						label={boton.label}
						divClass={boton.divClass}
						botonClass={boton.botonClass}
						tipo={boton.tipo}
						onClick={boton.onClick}
						isLoading={boton.isLoading}
					/>
		});
		
		return (
			<div className="container-fluid">
				<form onSubmit={this.props.form.onSubmit} className="form-horizontal">
					<h4 >{this.props.form.titulo}</h4>
					
					<div className="container-fluid">
						{camposForm}
					</div>
					<div className="form-group">
						{botonesForm}
					</div>
				</form>
			</div>
		);
	}
}

export default Formulario;