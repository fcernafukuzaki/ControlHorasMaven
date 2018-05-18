package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.Cargo;
import controlhoras.model.dao.repository.CargoDAO;

@Service
@Transactional
public class CargoServiceImpl implements CargoService {

	@Autowired
	private CargoDAO dao;
	
	@Override
	public List<Cargo> findAll() {
		return (List<Cargo>) dao.findAll();
	}
	
	@Override
	public Cargo findByIdCargo(int idCargo) {
		return dao.findByIdCargo(idCargo);
	}

	@Override
	public Cargo save(Cargo cargo) {
		return (Cargo) dao.save(cargo);
	}
	
}
