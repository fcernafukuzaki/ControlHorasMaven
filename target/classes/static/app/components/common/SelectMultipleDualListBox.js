import React from 'react';
import { Component } from 'react';

import classnames from 'classnames';

import DualListBox from './DualListBox';

class SelectMultipleDualListBox extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="form-group">
				<label className={classnames('control-label', this.props.labelClass)}>{this.props.label}</label>
				
				<DualListBox
					name={this.props.name}
					labelClass={this.props.labelClass}
					fieldClass={this.props.fieldClass}
					size={this.props.size}
					
					options={this.props.opciones}
					initialValue={this.props.valueSelected}
					valueType="number"
					onChange={this.props.onChange}
					onChangeSelectMultipleDualList={this.props.onChangeSelectMultipleDualList}
				/>
			</div>
		);
	}
}

/*
<span>
				Selwd Valores:
				{this.state.value.map((item, index) => (
					<span key={index} style={{ paddingLeft: 5, paddingRight: 5 }}>
					{item}
					{(index !== this.state.value.length - 1) && ','}
				</span>
				))}
				</span>

				*/

export default SelectMultipleDualListBox;