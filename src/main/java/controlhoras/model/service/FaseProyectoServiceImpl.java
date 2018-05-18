package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.FaseProyecto;
import controlhoras.model.dao.repository.FaseProyectoDAO;

@Service
@Transactional
public class FaseProyectoServiceImpl implements FaseProyectoService {

	@Autowired
	private FaseProyectoDAO dao;
	
	@Override
	public List<FaseProyecto> findAll() {
		return (List<FaseProyecto>) dao.findAll();
	}

}
