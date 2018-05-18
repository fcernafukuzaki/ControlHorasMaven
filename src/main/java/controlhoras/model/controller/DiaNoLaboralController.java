package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.DiaNoLaboral;
import controlhoras.model.service.DiaNoLaboralService;

@RestController
@RequestMapping(path="/dianolaboral")
public class DiaNoLaboralController {

	@Autowired
	private DiaNoLaboralService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<DiaNoLaboral> getDiaNoLaboral() {
		return service.findAll();
	}
}
