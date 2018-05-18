package controlhoras.model.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.Proyecto;

public interface ProyectoDAO extends CrudRepository<Proyecto, Integer> {

	public List<Proyecto> findByCliente(Cliente cliente);
	
	public Proyecto findByClienteAndIdProyecto(Cliente cliente, int idProyecto);

}
