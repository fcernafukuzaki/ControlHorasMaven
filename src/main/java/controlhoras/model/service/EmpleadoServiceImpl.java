package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.Cargo;
import controlhoras.model.bean.Empleado;
import controlhoras.model.dao.repository.EmpleadoDAO;

@Service
@Transactional
public class EmpleadoServiceImpl implements EmpleadoService {

	@Autowired
	private EmpleadoDAO dao;
	
	@Override
	public List<Empleado> findAll() {
		return (List<Empleado>) dao.findAll();
	}

	@Override
	public List<Empleado> findByCargo(Cargo cargo) {
		return (List<Empleado>) dao.findByCargo(cargo);
	}
	
	@Override
	public List<Empleado> getSupervisor() {
		return findByCargo(new Cargo(1));
	}
	
	@Override
	public List<Empleado> getAnalistaSeguimiento() {
		return findByCargo(new Cargo(2));
	}
	
	@Override
	public List<Empleado> getAnalistaFabrica() {
		return findByCargo(new Cargo(3));
	}

	@Override
	public Empleado save(Empleado empleado) {
		return dao.save(empleado);
	}

	@Override
	public List<Empleado> getEmpleadoIn(List<Integer> idEmpleado) {
		return dao.findByIdEmpleadoIn(idEmpleado);
	}
	
	@Override
	public List<Empleado> getEmpleadoNotIn(List<Integer> idEmpleado) {
		return dao.findByIdEmpleadoNotIn(idEmpleado);
	}
	
	@Override
	public List<Empleado> getSupervisorIn(List<Integer> idEmpleado) {
		return dao.findByCargoAndIdEmpleadoIn(new Cargo(1),idEmpleado);
	}
	
	@Override
	public List<Empleado> getAnalistaSeguimientoIn(List<Integer> idEmpleado) {
		return dao.findByCargoAndIdEmpleadoIn(new Cargo(2),idEmpleado);
	}
	
	@Override
	public List<Empleado> getAnalistaFabricaIn(List<Integer> idEmpleado) {
		return dao.findByCargoAndIdEmpleadoIn(new Cargo(3),idEmpleado);
	}
	
	@Override
	public List<Empleado> getSupervisorNotIn(List<Integer> idEmpleado) {
		return dao.findByCargoAndIdEmpleadoNotIn(new Cargo(1),idEmpleado);
	}
	
	@Override
	public List<Empleado> getAnalistaSeguimientoNotIn(List<Integer> idEmpleado) {
		return dao.findByCargoAndIdEmpleadoNotIn(new Cargo(2),idEmpleado);
	}
	
	@Override
	public List<Empleado> getAnalistaFabricaNotIn(List<Integer> idEmpleado) {
		return dao.findByCargoAndIdEmpleadoNotIn(new Cargo(3),idEmpleado);
	}

}
