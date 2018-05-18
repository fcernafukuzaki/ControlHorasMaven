package controlhoras.model.service;

import java.util.List;

import controlhoras.model.bean.ProyectoEmpleado;

public interface ProyectoEmpleadoService {

	public List<ProyectoEmpleado> findAll();
	
	public ProyectoEmpleado save(ProyectoEmpleado proyectoEmpleado);
	public List<ProyectoEmpleado> saveAll(List<ProyectoEmpleado> proyectoEmpleado);
	
	public void delete(ProyectoEmpleado proyectoEmpleado);
	public void deleteAll(List<ProyectoEmpleado> proyectoEmpleado);
	public void deleteByIdProyectoAndIdCargo(int idProyecto, int idCargo);
	//public void deleteByIdProyectoAndIdCargo(List<ProyectoEmpleado> proyectoEmpleado);
	
	public List<ProyectoEmpleado> findByIdProyecto(int idProyecto);
	
	//public List<ProyectoEmpleado> findByIdProyectoAndEmpleadoCargoIdCargo(int idProyecto, int idCargo);
	public List<ProyectoEmpleado> findByIdProyectoAndIdCargo(int idProyecto, int idCargo);
}
