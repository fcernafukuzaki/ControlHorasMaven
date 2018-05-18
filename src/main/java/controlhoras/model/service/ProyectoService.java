package controlhoras.model.service;

import java.util.List;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.Proyecto;

public interface ProyectoService {

	public List<Proyecto> findAll();
	
	public Proyecto save(Proyecto proyecto);
	
	public List<Proyecto> findByCliente(Cliente cliente);
	
	public Proyecto findByClienteAndIdProyecto(Cliente cliente, int idProyecto);
	
	
}
