package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.EstimacionProyecto;
import controlhoras.model.dao.repository.EstimacionProyectoDAO;

@Service
@Transactional
public class EstimacionProyectoServiceImpl implements EstimacionProyectoService {

	@Autowired
	private EstimacionProyectoDAO dao;
	
	@Override
	public List<EstimacionProyecto> findAll() {
		return (List<EstimacionProyecto>) dao.findAll();
	}

	@Override
	public EstimacionProyecto save(EstimacionProyecto estimacionProyecto) {
		return dao.save(estimacionProyecto);
	}

	@Override
	public List<EstimacionProyecto> findByIdProyecto(int idProyecto) {
		return dao.findByIdProyecto(idProyecto);
	}
	
}
