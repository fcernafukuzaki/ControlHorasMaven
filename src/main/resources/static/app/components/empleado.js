import React, {Component} from 'react';

import { PRODUCTS_SAVED, AJAX_BEGIN, AJAX_END, PRODUCTS_ALL } from '../actions/actionTypes'

var EmpleadoOption = React.createClass({

  getInitialState() {
    return {display: true };
  },
  render() {
    if (this.state.display==false) return null;
    else return (
      <option value={this.props.empleado.idEmpleado}>
      {this.props.empleado.nombreCompleto}
      </option>
    );
  }
});

var EmpleadoDropDownList = React.createClass({

  render() {
    var rows = [];
    this.props.empleados.forEach(function(empleado) {
      rows.push(
        <EmpleadoOption empleado={empleado} key={empleado.idEmpleado} />);
	});
    return (
      <select>
          {rows}
      </select>
    );
  }
});

var Empleado = React.createClass({

  loadEmpleadoFromServer() {
    /*var self = this;
    $.ajax({
        url: "http://localhost:8080/empleado/",
      }).then(function(data) {
        self.setState({ empleados: data });
      });*/
      
      
      return function(dispatch){
        dispatch({ type: AJAX_BEGIN })

        return request.get('http://localhost:8080/empleado/' )
            .then(function(response){
            console.log(response);
            
                dispatch({ type: PRODUCTS_ALL, empleados : response.data })
                dispatch({ type: AJAX_END })
            })
            .catch(function(response){
            console.log(response);
                dispatch({ type: AJAX_END })
            })
    	}
    	
      
  },

  getInitialState() {
    return { empleados: [] };
  },

  componentDidMount() {
    this.loadEmpleadoFromServer();
  },

  render() {
    return ( <EmpleadoDropDownList empleados={this.state.empleados} /> );
  }
});

export default class EmpleadoExport extends Component {
	constructor (props, context) {
	    super(props, context);
  	}
		
	render() {
		//console.log(this.state);
		/*if(!this.state) {
		   return <div>loading ...</div>;
		} 
		else {*/
		return (
			<Empleado />
		);
		//}
	}
}

//ReactDOM.render(<Empleado />, document.getElementById('empleado') );