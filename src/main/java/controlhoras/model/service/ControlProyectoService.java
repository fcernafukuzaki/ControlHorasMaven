package controlhoras.model.service;

import java.util.List;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.ControlProyecto;

public interface ControlProyectoService {

	public List<ControlProyecto> findAll();
	
	public ControlProyecto save(ControlProyecto proyecto);
	
	public List<ControlProyecto> findByProyectoCliente(Cliente cliente);
	
}
