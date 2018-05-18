package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.ControlProyecto;
import controlhoras.model.service.ControlProyectoService;

@RestController
@RequestMapping(path="/proyecto/control")
public class ControlProyectoController {

	@Autowired
	private ControlProyectoService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<ControlProyecto> getControlProyecto() {
		return service.findAll();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/cliente/{id}")
	public Iterable<ControlProyecto> getControlProyecto(@PathVariable("id") int idCliente) {
		return service.findByProyectoCliente(new Cliente(idCliente));
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/")
	public ControlProyecto save(@RequestBody ControlProyecto controlProyecto) {
		service.save(controlProyecto);
		return controlProyecto;
	}
}
