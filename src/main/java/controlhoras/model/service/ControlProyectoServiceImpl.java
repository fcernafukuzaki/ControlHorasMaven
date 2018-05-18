package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.ControlProyecto;
import controlhoras.model.dao.repository.ControlProyectoDAO;

@Service
@Transactional
public class ControlProyectoServiceImpl implements ControlProyectoService {

	@Autowired
	private ControlProyectoDAO dao;
	
	@Override
	public List<ControlProyecto> findAll() {
		return (List<ControlProyecto>) dao.findAll();
	}

	@Override
	public ControlProyecto save(ControlProyecto controlProyecto) {
		return dao.save(controlProyecto);
	}

	@Override
	public List<ControlProyecto> findByProyectoCliente(Cliente cliente) {
		return (List<ControlProyecto>) dao.findByProyectoCliente(cliente);
	}
	
}
