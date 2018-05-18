package controlhoras.model.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import controlhoras.model.bean.EstimacionProyecto;

public interface EstimacionProyectoDAO extends CrudRepository<EstimacionProyecto, Integer> {

	public List<EstimacionProyecto> findByIdProyecto(int idProyecto);
	
}
