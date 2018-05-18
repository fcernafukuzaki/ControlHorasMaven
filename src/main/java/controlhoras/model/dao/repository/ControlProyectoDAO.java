package controlhoras.model.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.ControlProyecto;

public interface ControlProyectoDAO extends CrudRepository<ControlProyecto, Integer> {

	public List<ControlProyecto> findByProyectoCliente(Cliente cliente);
	
}
