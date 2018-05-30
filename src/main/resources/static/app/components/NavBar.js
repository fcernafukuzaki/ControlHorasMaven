import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Router, Route, browserHistory, Link } from 'react-router';

export default class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light" role="navigation">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse"
							aria-controls="navbarText" data-target="#navbarText"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="sr-only"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						
						<a className="navbar-brand" href="#">
						
						Control Horas
						</a>
					</div>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="nav navbar-nav mr-auto">
							<li className="nav-item active"><a href="#">Resumen</a></li>
							<li className="dropdown">
								<a className="dropdown-toggle" data-toggle="dropdown" href="#">Evolutivo
								<span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li><a href="#">Evolutivo</a></li>
									<li><a href="#">Evo. 25%</a></li>
									<li><a href="#">Evo. 35%</a></li>
									<li><a href="#">Evo. 100%</a></li>
								</ul>
							</li>
							<li className="dropdown">
								<a className="dropdown-toggle" data-toggle="dropdown" href="#">Proyecto
								<span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li><Link to="registroHorasProyecto">Proyecto</Link></li>
									<li><a href="#">Proy. 25%</a></li>
									<li><a href="#">Proy. 35%</a></li>
									<li><a href="#">Proy. 100%</a></li>
								</ul>
							</li>
							<li><a href="#">Otras tareas</a></li>
							<li className="dropdown">
								<a className="dropdown-toggle" data-toggle="dropdown" href="#">Mantenimiento
								<span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li><Link to="periodoFacturacionRegistrar">Periodo facturación</Link></li>
									<li><Link to="empleados">Empleados</Link></li>
									
									<li><Link to="proyecto">Proyectos</Link></li>
									<li><Link to="cargo">Cargo</Link></li>
									
									<li><a href="#">Dias feriado</a></li>
									<li><a href="#">Etapas | Fases</a></li>
									<li><a href="#">Líder cliente</a></li>
									<li><Link to="tipoTarea">Tipo tarea</Link></li>
								</ul>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Salir </a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

//<li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
//<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>