package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.TipoProyecto;
import controlhoras.model.service.TipoProyectoService;

@RestController
@RequestMapping(path="/tipoproyecto")
public class TipoProyectoController {

	@Autowired
	private TipoProyectoService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<TipoProyecto> getTipoProyecto() {
		return service.findAll();
	}
}
