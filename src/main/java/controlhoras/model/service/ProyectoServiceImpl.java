package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.Proyecto;
import controlhoras.model.dao.repository.ProyectoDAO;

@Service
@Transactional
public class ProyectoServiceImpl implements ProyectoService {

	@Autowired
	private ProyectoDAO dao;
	
	@Override
	public List<Proyecto> findAll() {
		return (List<Proyecto>) dao.findAll();
	}

	@Override
	public Proyecto save(Proyecto proyecto) {
		return dao.save(proyecto);
	}

	@Override
	public List<Proyecto> findByCliente(Cliente cliente) {
		return dao.findByCliente(cliente);
	}

	@Override
	public Proyecto findByClienteAndIdProyecto(Cliente cliente, int idProyecto) {
		return dao.findByClienteAndIdProyecto(cliente, idProyecto);
	}
	
}
