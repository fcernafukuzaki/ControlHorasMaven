import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { getEmpleados } from '../actions'


class EmpleadosAction extends Component {
  
  componentWillMount() {
    this.props.getEmpleados()
  }
  
  renderUsersList() {
  	if(this.props.users.length == 0) {
	   return (
	   	<tr>
	   		<td>Cargando ...
	   		</td>
	   	</tr>
	   );
	} else {
	    return this.props.users.map((empleado) => {
	      return (
	        <tr key={empleado.idEmpleado}>
	          <td>{empleado.apellidoPaterno}</td>
	          <td>{empleado.apellidoMaterno}</td>
	          <td>{empleado.nombre}</td>
	          <td>{empleado.nombreCompleto}</td>
	        </tr>
	      )
	    })
    }
  }
  render() {
    return (
      <div>
        <h2>Empleados</h2>
        <table className="table table-hover table-condensed">
          <thead>
            <tr>
              <th>Apellido paterno</th>
              <th>Apellido materno</th>
              <th>Nombre</th>
              <th>Nombre completo</th>
            </tr>
          </thead>
          <tbody>
            { this.renderUsersList() }
          </tbody>
        </table>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list
  }
}

export default connect(mapStateToProps, { getEmpleados })(EmpleadosAction);
