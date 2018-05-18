package controlhoras.model.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import controlhoras.model.bean.ProyectoEmpleado;


public interface ProyectoEmpleadoDAO extends CrudRepository<ProyectoEmpleado, Integer> {

	public List<ProyectoEmpleado> findByIdProyecto(int idProyecto);
	
	public List<ProyectoEmpleado> findByIdProyectoAndIdCargo(int idProyecto, int idCargo);
	
	public void deleteByIdProyectoAndIdCargo(int idProyecto, int idCargo);
	
}
