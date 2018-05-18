package controlhoras.model.dao.repository;

import org.springframework.data.repository.CrudRepository;

import controlhoras.model.bean.Cargo;

public interface CargoDAO extends CrudRepository<Cargo, Integer> {

	public Cargo findByIdCargo(int idCargo);
	
}
