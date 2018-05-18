package controlhoras.model.service;

import java.util.List;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.LiderCliente;

public interface LiderClienteService {
	
	public List<LiderCliente> findByCliente(Cliente cliente);
	
}
