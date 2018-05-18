package controlhoras.model.bean;

import java.util.Date;

public class EmpleadoSupervisor extends Empleado {

	private static final long serialVersionUID = 1L;

	public EmpleadoSupervisor(int id, String nombre, String apellidoPaterno, String apellidoMaterno, Date fechaIngreso,
			Date fechaCese) {
		super(id, nombre, apellidoPaterno, apellidoMaterno, fechaIngreso, fechaCese);
	}

}
