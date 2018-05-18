package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.TipoProyecto;
import controlhoras.model.dao.repository.TipoProyectoDAO;

@Service
@Transactional
public class TipoProyectoServiceImpl implements TipoProyectoService {
	
	@Autowired
	private TipoProyectoDAO dao;

	@Override
	public List<TipoProyecto> findAll() {
		return (List<TipoProyecto>) dao.findAll();
	}
	
}
