package controlhoras.model.service;

import java.util.List;

import controlhoras.model.bean.Cliente;

public interface ClienteService {

	public List<Cliente> findAll();
	
	public Cliente findByIdCliente(int idCliente);
	
	public Cliente save(Cliente cliente);
	
}
