package controlhoras.model.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.LiderCliente;

public interface LiderClienteDAO extends CrudRepository<LiderCliente, Integer>{

	public List<LiderCliente> findByCliente(Cliente cliente);
	
}
