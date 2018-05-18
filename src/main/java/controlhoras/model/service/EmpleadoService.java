package controlhoras.model.service;

import java.util.List;

import controlhoras.model.bean.Cargo;
import controlhoras.model.bean.Empleado;

public interface EmpleadoService {

	public List<Empleado> findAll();
	
	public List<Empleado> findByCargo(Cargo cargo);
	
	public List<Empleado> getSupervisor();
	
	public List<Empleado> getAnalistaSeguimiento();
	
	public List<Empleado> getAnalistaFabrica();
	
	public Empleado save(Empleado empleado);
	
	public List<Empleado> getEmpleadoIn(List<Integer> idEmpleado);
	
	public List<Empleado> getEmpleadoNotIn(List<Integer> idEmpleado);
	
	public List<Empleado> getSupervisorIn(List<Integer> idEmpleado);
	
	public List<Empleado> getAnalistaSeguimientoIn(List<Integer> idEmpleado);
	
	public List<Empleado> getAnalistaFabricaIn(List<Integer> idEmpleado);
	
	public List<Empleado> getSupervisorNotIn(List<Integer> idEmpleado);
	
	public List<Empleado> getAnalistaSeguimientoNotIn(List<Integer> idEmpleado);
	
	public List<Empleado> getAnalistaFabricaNotIn(List<Integer> idEmpleado);
}
