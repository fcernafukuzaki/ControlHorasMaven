package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.ProyectoEmpleado;
import controlhoras.model.dao.repository.ProyectoEmpleadoDAO;

@Service
@Transactional
public class ProyectoEmpleadoServiceImpl implements ProyectoEmpleadoService {

	@Autowired
	private ProyectoEmpleadoDAO dao;
	
	@Override
	public List<ProyectoEmpleado> findAll() {
		return (List<ProyectoEmpleado>) dao.findAll();
	}
	
	@Override
	public ProyectoEmpleado save(ProyectoEmpleado proyectoEmpleado) {
		return dao.save(proyectoEmpleado);
	}
	
	@Override
	public List<ProyectoEmpleado> saveAll(List<ProyectoEmpleado> proyectoEmpleado){
		return (List<ProyectoEmpleado>) dao.save(proyectoEmpleado);
	}
	
	@Override
	public void delete(ProyectoEmpleado proyectoEmpleado){
		dao.delete(proyectoEmpleado);
	}
	
	@Override
	public void deleteAll(List<ProyectoEmpleado> proyectoEmpleado){
		dao.delete(proyectoEmpleado);
	}
	
	@Override
	public void deleteByIdProyectoAndIdCargo(int idProyecto, int idCargo){
		dao.deleteByIdProyectoAndIdCargo(idProyecto, idCargo);
	}
	
	@Override
	public List<ProyectoEmpleado> findByIdProyecto(int idProyecto) {
		return dao.findByIdProyecto(idProyecto);
	}
	
	@Override
	public List<ProyectoEmpleado> findByIdProyectoAndIdCargo(int idProyecto, int idCargo){
		return dao.findByIdProyectoAndIdCargo(idProyecto, idCargo);
	}
}
