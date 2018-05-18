package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.Cliente;
import controlhoras.model.service.ClienteService;

@RestController
@RequestMapping(path="/cliente")
public class ClienteController {

	@Autowired
	private ClienteService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<Cliente> getCliente() {
		return service.findAll();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public Cliente getCliente(@PathVariable("id") int idCliente) {
		return service.findByIdCliente(idCliente);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public Cliente updateCliente(@PathVariable("id") int idCliente) {
		return service.findByIdCliente(idCliente);
	}
	
}
