import React, {Component} from 'react';

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light" role="navigation">
				
					<a className="navbar-brand" href="#">
						<img src="favicon.ico" width="30" height="30" className="d-inline-block align-top" />
						Control Horas
						</a>
					
					<button className="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarPrincipal"
						aria-controls="navbarPrincipal" 
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className="collapse navbar-collapse" id="navbarPrincipal">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Resumen</a>
							</li>
							<li className="nav-item active dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Evolutivo
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">Evolutivo</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">Evo. 25%</a>
									<a className="dropdown-item" href="#">Evo. 35%</a>
									<a className="dropdown-item" href="#">Evo. 100%</a>
								</div>
							</li>
							<li className="nav-item active dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Proyecto
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">Proyecto</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">Proy. 25%</a>
									<a className="dropdown-item" href="#">Proy. 35%</a>
									<a className="dropdown-item" href="#">Proy. 100%</a>
								</div>
							</li>
							<li className="nav-item active">
								<a className="nav-link" href="#">Otras tareas</a>
							</li>
							<li className="nav-item active dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Mantenimiento
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">Periodo facturación</a>
								
									<a className="dropdown-item" href="#">Empleados</a>
									
									<a className="dropdown-item" href="#">Proyectos</a>
									<a className="dropdown-item" href="#">Cargo</a>
									
									<a className="dropdown-item" href="#">Dias feriado</a>
									<a className="dropdown-item" href="#">Etapas | Fases</a>
									<a className="dropdown-item" href="#">Líder cliente</a>
									<a className="dropdown-item" href="#">Tipo tarea</a>
								</div>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a className="nav-link" href="#">
								<i className="fas fa-sign-out-alt"></i> Salir </a>
							</li>
						</ul>
					</div>
				
			</nav>
		);
	}
}

export default NavBar;
//<li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
//<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>