package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.TipoHora;
import controlhoras.model.service.TipoHoraService;

@RestController
@RequestMapping(path="/tipohora")
public class TipoHoraController {

	@Autowired
	private TipoHoraService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<TipoHora> getTipoHora() {
		return service.findAll();
	}
}
