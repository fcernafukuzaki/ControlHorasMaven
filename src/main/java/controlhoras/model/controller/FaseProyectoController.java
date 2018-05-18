package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.FaseProyecto;
import controlhoras.model.service.FaseProyectoService;

@RestController
@RequestMapping(path="/faseproyecto")
public class FaseProyectoController {

	@Autowired
	private FaseProyectoService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<FaseProyecto> getFaseProyecto() {
		return service.findAll();
	}
}
