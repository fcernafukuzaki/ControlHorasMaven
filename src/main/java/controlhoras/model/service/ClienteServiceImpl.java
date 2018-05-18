package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.Cliente;
import controlhoras.model.dao.repository.ClienteDAO;

@Service
@Transactional
public class ClienteServiceImpl implements ClienteService {

	@Autowired
	private ClienteDAO dao;
	
	@Override
	public List<Cliente> findAll() {
		return (List<Cliente>) dao.findAll();
	}

	@Override
	public Cliente findByIdCliente(int idCliente) {
		return (Cliente) dao.findOne(idCliente);
	}
	
	@Override
	public Cliente save(Cliente cliente) {
		return (Cliente) dao.save(cliente);
	}

}
