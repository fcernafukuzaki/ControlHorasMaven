package controlhoras.model.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.Cargo;
import controlhoras.model.bean.Empleado;
import controlhoras.model.service.EmpleadoService;

@RestController
@RequestMapping(path="/empleado")
public class EmpleadoController {

	@Autowired
	private EmpleadoService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<Empleado> getEmpleados() {
		return service.findAll();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public Iterable<Empleado> getEmpleado(@PathVariable("id") int idCargo) {
		return service.findByCargo(new Cargo(idCargo));
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/supervisor")
	public Iterable<Empleado> getSupervisor() {
		return service.getSupervisor();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/analistaSeguimiento")
	public Iterable<Empleado> getAnalistaSeguimiento() {
		return service.getAnalistaSeguimiento();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/analistaFabrica")
	public Iterable<Empleado> getAnalistaFabrica() {
		return service.getAnalistaFabrica();
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/")
	public Empleado save(@RequestBody Empleado empleado) {
		return service.save(empleado);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/disponible")
	public Iterable<Empleado> getEmpleadoIn() {
		ArrayList<Integer> idEmpleado = new ArrayList<>();
		
		return service.getEmpleadoIn(idEmpleado);
	}
}
