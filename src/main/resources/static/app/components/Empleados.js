import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import  EmpleadosAction  from './EmpleadosAction'

const Empleados = () => (
	<div>
		<h2>Home2</h2>
		<EmpleadosAction />
	</div>
);

export default Empleados;