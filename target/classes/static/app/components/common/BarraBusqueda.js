import React, {Component} from 'react';
import classnames from 'classnames';

class BarraBusqueda extends Component {
	constructor(){
		super();
	}
	
	render() {
		return (
			<div className={classnames('form-group') }>
				<label className="control-label col-md-2">{this.props.label}</label>
				<div className="col-md-2" >
					<input
						type='text'
						onChange={this.props.onChange}
						className="form-control"
					/>
				</div>
				<div className="col-md-1" >
					<input
						type='checkbox'
						
					/> 
				</div>
			</div>
		)
	}
}

export default BarraBusqueda