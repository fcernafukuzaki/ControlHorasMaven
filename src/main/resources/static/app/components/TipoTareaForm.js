import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { getTipoTarea } from '../actions' 

class TipoTareaForm extends Component {
	constructor(){
	    super();
	    this.state = {
	    	tipoTarea:{}
	    }
	}
	
	componentWillMount() {
	    this.props.getTipoTarea()
	}
	  
	renderTipoTareaList() {
		return this.props.tipoTareaGET.map((row) => {
	    	return (
	        	<tr key={row.idTipoTarea}>
	          		<td>{row.nombre}</td>
	        	</tr>
	    	)
	    })
	}
	
	handleClick(row){
		this.refs.idTipoTarea.value = row.idTipoTarea;
		this.refs.nombre.value = row.nombre;
	}
	
	handleSubmit(e){
	    if(this.refs.nombre.value === ''){
	    	alert('Debe ingresar tipo tarea.');
	    } else {
	    	if(this.refs.idTipoTarea.value !== ''){
	      		this.setState({tipoTarea:{
	      			idTipoTarea: this.refs.idTipoTarea.value,
			        nombre: this.refs.nombre.value
			    }}, () => {
		      		this.props.updateTipoTarea(this.state.tipoTarea);
		      		this.clearRef();
				});
	    	} else {
		    	this.setState({tipoTarea:{
		        	nombre: this.refs.nombre.value
		    	}}, () => {
		      		this.props.addTipoTarea(this.state.tipoTarea);
		      		this.clearRef();
		        });
			}	
	    }
		e.preventDefault();
	}
	clearRef(){
		this.refs.idTipoTarea.value = "";
  		this.refs.nombre.value = "";
	}
	render() {
	    return (
	      <div>
	        <form onSubmit={this.handleSubmit.bind(this)}>
	        	<input type="hidden" ref="idTipoTarea" />
	        	<div className="form-group"> 
					<label htmlFor="nombre">Tipo tarea : </label>
					<input type="text" className="form-control" ref="nombre"/>
				</div>
				<div className="form-group">
		        	<input type="submit" className="btn btn-default" value="Guardar"/>
				</div>
				<table className="table table-hover table-condensed">
				<thead>
		            <tr>
		              <th>Tipo tarea</th>
		              <th>Acción</th>
		            </tr>
		          </thead>
				<tbody>
				{ this.renderTipoTareaList() }
				</tbody>
				</table>
			</form>
	      </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    tipoTareaGET : state.tipoTareaGET.getTipoTareaResponse
  }
}

export default connect(mapStateToProps, { getTipoTarea })(TipoTareaForm);