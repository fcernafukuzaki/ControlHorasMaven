import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { getEmpleados } from '../actions'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//import { Router, Route, browserHistory, Link } from 'react-router';

//Import Form
import ProyectoForm from './ProyectoForm'
import ControlHorasForm from './ControlHorasForm'
import ControlHorasChatForm from './ControlHorasChatForm'

import CargoForm from './CargoForm'

import Empleados from './Empleados'
import PeriodoFacturacionForm from './PeriodoFacturacionForm'
import TipoTareaForm from './TipoTareaForm'

//rutas
const pathProyectoForm = "/ControlHoras/proyecto"
const pathControlHorasForm = "/ControlHoras/proyecto"
const pathRegistroHorasProyectoForm = "/ControlHoras/registroHorasProyecto"

const pathCargoForm = "/ControlHoras/cargo"

const pathEmpleados = "/ControlHoras/empleados"
const pathPeriodoFacturacionForm = "/ControlHoras/periodoFacturacionRegistrar"
const pathTipoTareaForm = "/ControlHoras/tipoTarea"

const App = () => (
	<div>
		
		<Route  path={pathProyectoForm} component={ProyectoForm} />
		<Route  path={pathRegistroHorasProyectoForm} component={ControlHorasForm} />
		
		<Route  path={pathControlHorasForm} component={ControlHorasChatForm} />
		
		<Route  path={pathCargoForm} component={CargoForm} />
		
		<Route  path={pathEmpleados} component={Empleados} />
		<Route  path={pathPeriodoFacturacionForm} component={PeriodoFacturacionForm} />
		
		<Route exact path={pathTipoTareaForm} component={TipoTareaForm} />
	</div>
);
export default App;