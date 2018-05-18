package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.Cargo;
import controlhoras.model.service.CargoService;

@RestController
@RequestMapping(path="/cargo")
public class CargoController {
	
	@Autowired
	private CargoService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<Cargo> getCargos() {
		return service.findAll();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public Cargo getCargo(@PathVariable("id") int idCargo) {
		return service.findByIdCargo(idCargo);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/")
	public Cargo addCargo(@RequestBody Cargo cargo) {
		return service.save(cargo);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/")
	public Cargo updateCargo(@RequestBody Cargo cargo) {
		return service.save(cargo);
	}
	
}
