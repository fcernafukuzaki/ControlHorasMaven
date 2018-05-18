package controlhoras.model.service;

import java.util.List;

import controlhoras.model.bean.EstimacionProyecto;

public interface EstimacionProyectoService {

	public List<EstimacionProyecto> findAll();
	
	public EstimacionProyecto save(EstimacionProyecto estimacionProyecto);
	
	public List<EstimacionProyecto> findByIdProyecto(int idProyecto);
	
}
