package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.TipoTarea;
import controlhoras.model.service.TipoTareaService;

@RestController
@RequestMapping(path="/tipotarea")
public class TipoTareaController {

	@Autowired
	private TipoTareaService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<TipoTarea> getTipoTarea() {
		return service.findAll();
	}
}
