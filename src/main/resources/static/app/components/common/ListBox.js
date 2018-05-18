import React from 'react';
import { Component } from 'react';

import PropTypes from 'prop-types';

import classnames from 'classnames';
import TextField from './TextField';
import TextFieldGroup from './TextFieldGroup';
import SelectMultipleField from './SelectMultipleField';
import ButtonGroup from './ButtonGroup';

class ListBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterKeyword: '',
			selectedValues: []
		};
		
		this.onFilterKeywordChange = this.onFilterKeywordChange.bind(this);
	}
	
	onFilterKeywordChange(event) {
		const filterKeyword = event.target.value;
		this.setState({ filterKeyword : filterKeyword });
	}
	
	render() {
		const { selectedValues, filterKeyword } = this.state;
		const { disabled, options, buttonContent, texts } = this.props;
		
		const filteredOptions = this.props.options
			.filter(option => (option.label).toLowerCase().includes(filterKeyword));
		
		let itemText = '';
		
		switch (filteredOptions.length) {
			case 0:
				itemText = texts.noItem;
				break;
			case 1:
				itemText = `1 ${texts.item}`;
				break;
			default:
				itemText = `${filteredOptions.length} ${texts.items}`;
				break;
		}
		
		let rows = []
		this.props.value.map( campo =>{
			rows.push(
				<option key={campo.value} value={campo.value}>{campo.label}</option>
			)
		})
		
		return (
			<div>
				<TextField
					key='ButtonDualListDualList'
					id='ButtonDualListDualList'
					name='ButtonDualListDualList'
					value={filterKeyword}
					label={texts.search}
					error=''
					type='text'
					onChange={this.onFilterKeywordChange}
					labelClass='col-md-2'
					fieldClass='col-md-8'
				/>
				
				<SelectMultipleField
					name={this.props.name}
					label={this.props.label}
					value={
						filteredOptions.map((option, index) => (
							<option value={option.value} key={index}>
								{option.label}
							</option>
						))}
					type={this.props.type}
					error={this.props.error}
					onChange={this.props.onChange}
					labelClass={this.props.labelClass}
					fieldClass={this.props.fieldClass}
					size={this.props.size}
				/>
				
			</div>
		);
	}
}
/*
<ButtonGroup
					key='ButtonDualList'
					label={buttonContent}
					divClass=''
					botonClass=''
					tipo='button'
					onClick={this.handleTransfer}
					disabled={options.length === 0 || disabled}
				/>
				
				
<span>
					{itemText}
				</span>

						*/
//ListBox.propTypes = propTypes;

export default ListBox;