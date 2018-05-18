import React from 'react';
import { Component } from 'react';

import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

import ListBox from './ListBox';
import ButtonGroup from './ButtonGroup';

const defaultProps = {
	initialValue: [],
	valueType: 'string',
	disabled: false,
	leftButtonContent: '>',
	rightButtonContent: '<',
	texts: {
		item: 'Elemento',
		items: 'Elementos',
		noItem: 'No hay elementos',
		search: 'Campo de búsqueda...',
	},
};

class DualListBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.initialValue || [],
			options: props.options || []
			
			,
			selectedValues: []
		};
		
		this.handleTransfer = this.handleTransfer.bind(this);
		this.handleTransferRemove = this.handleTransferRemove.bind(this);
		this.onChange = this.onChange.bind(this);
		
		this.addSelectedValues = this.addSelectedValues.bind(this);
		this.removeSelectedValues = this.removeSelectedValues.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { initialValue, options } = this.props;

		if (!isEqual(initialValue, nextProps.initialValue) || !isEqual(options, nextProps.options)) {
			this.setState({
				value: nextProps.initialValue || [],
				options: nextProps.options || []
			});
		}
	}

	addSelectedValues(selectedValues){
		const updatedValue = [...this.state.value, ...selectedValues];
		this.setState({ value: updatedValue }, () => this.props.onChangeSelectMultipleDualList(this.props.name,updatedValue));
		//this.setState({ value: updatedValue }, () => this.props.onChange(this.props.name,updatedValue));
	}

	removeSelectedValues(selectedValues) {
		const { value } = this.state;
		const updatedValue = value.filter(valueItem => selectedValues.indexOf(valueItem) < 0);
		//this.setState({ value: updatedValue }, () => this.props.onChange(this.props.name,updatedValue));
		this.setState({ value: updatedValue }, () => this.props.onChangeSelectMultipleDualList(this.props.name,updatedValue));
	}
	
	onChange(event) {
		const { options } = event.target;
		const selectedValues = [];

		for (let i = 0; i < options.length; i += 1) {
			if (options[i].selected) {
				const value = options[i].value;
				
				if (this.props.valueType === 'number') {
					selectedValues.push(parseInt(value, 10));
				} else {
					selectedValues.push(value);
				}
			}
		}
		
		this.setState({ selectedValues : selectedValues });
	}
	
	handleTransfer() {
		this.addSelectedValues(this.state.selectedValues);
		this.setState({
			selectedValues: []
		});
	}
	
	handleTransferRemove() {
		this.removeSelectedValues(this.state.selectedValues);
		this.setState({
			selectedValues: []
		});
	}
	
	render() {
		const {
			disabled,
			leftButtonContent,
			rightButtonContent,
			texts
		} = this.props;
	
		const {
			options,
			value,
			
			selectedValues
		} = this.state;
	
		//console.log(" dualListBox initialValue", this.props.initialValue);
		
		const optionsLeft = options.filter(option => value.indexOf(option.value) < 0);
		const optionsRight = options.filter(option => value.indexOf(option.value) !== -1);
		
		return (
			<div className='col-md-10'>
				<div className='col-md-5'>
					<ListBox
						key='ListAll'
						name=''
						label=''
						value={optionsLeft}
						type=''
						error=''
						onChange={this.onChange}
						labelClass={this.props.labelClass}
						fieldClass={this.props.fieldClass}
						size={this.props.size}
						
						options={optionsLeft}
						onTransfer={this.addSelectedValues}
						buttonContent={leftButtonContent}
						valueType={this.props.valueType}
						disabled={disabled}
						texts={texts}
					/>
				</div>
				<div className='col-md-1'>
					<ButtonGroup
						key='ButtonDualListIn'
						label={leftButtonContent}
						divClass=''
						botonClass='btn-primary'
						tipo='link'
						onClick={this.handleTransfer}
						disabled={optionsLeft.length === 0 || disabled}
					/>
					<ButtonGroup
						key='ButtonDualListOut'
						label={rightButtonContent}
						divClass=''
						botonClass='btn-primary'
						tipo='link'
						onClick={this.handleTransferRemove}
						disabled={optionsRight.length === 0 || disabled}
					/>
				</div>
				<div className='col-md-5'>
					<ListBox
						key='ListSelected'
						name=''
						label=''
						value={optionsRight}
						type=''
						error=''
						onChange={this.onChange}
						labelClass={this.props.labelClass}
						fieldClass={this.props.fieldClass}
						size={this.props.size}
						
						options={optionsRight}
						onTransfer={this.removeSelectedValues}
						buttonContent={rightButtonContent}
						valueType={this.props.valueType}
						disabled={disabled}
						texts={texts}
					/>
				</div>
				
			</div>
		);
	}
}

//DualListBox.propTypes = propTypes;
DualListBox.defaultProps = defaultProps;

export default DualListBox;