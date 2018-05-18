package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.LiderCliente;
import controlhoras.model.service.LiderClienteService;

@RestController
@RequestMapping(path="/lidercliente")
public class LiderClienteController {

	@Autowired
	private LiderClienteService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public Iterable<LiderCliente> getLiderCliente(@PathVariable("id") int idCliente) {
		return service.findByCliente(new Cliente(idCliente));
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public Iterable<LiderCliente> updateLiderCliente(@PathVariable("id") int idCliente) {
		return service.findByCliente(new Cliente(idCliente));
	}
}
