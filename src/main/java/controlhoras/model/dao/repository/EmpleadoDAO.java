package controlhoras.model.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import controlhoras.model.bean.Cargo;
import controlhoras.model.bean.Empleado;

public interface EmpleadoDAO extends CrudRepository<Empleado, Integer> {
	
	public List<Empleado> findByCargo(Cargo cargo);
	
	public List<Empleado> findByIdEmpleadoIn(List<Integer> idEmpleado);
	
	public List<Empleado> findByIdEmpleadoNotIn(List<Integer> idEmpleado);
	
	public List<Empleado> findByCargoAndIdEmpleadoIn(Cargo cargo, List<Integer> idEmpleado);
	
	public List<Empleado> findByCargoAndIdEmpleadoNotIn(Cargo cargo, List<Integer> idEmpleado);
	
}
