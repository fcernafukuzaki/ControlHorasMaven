package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.LiderCliente;
import controlhoras.model.dao.repository.LiderClienteDAO;

@Service
@Transactional
public class LiderClienteServiceImpl implements LiderClienteService {

	@Autowired
	private LiderClienteDAO dao;
	
	@Override
	public List<LiderCliente> findByCliente(Cliente cliente) {
		return dao.findByCliente(cliente);
	}

}
