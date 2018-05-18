package controlhoras.model.service;

import java.util.List;

import controlhoras.model.bean.Cargo;

public interface CargoService {

	public List<Cargo> findAll();
	
	public Cargo findByIdCargo(int idCargo);
	
	public Cargo save(Cargo cargo);
	
}
