import React from 'react';
import { Component } from 'react';

import TextFieldGroup from './TextFieldGroup';
import SelectFieldGroup from './SelectFieldGroup';
import SelectMultipleFieldGroup from './SelectMultipleFieldGroup';
import SelectMultipleDualListBox from './SelectMultipleDualListBox';

export default function getCampo(field){
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