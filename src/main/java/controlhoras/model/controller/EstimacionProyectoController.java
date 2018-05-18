package controlhoras.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.EstimacionProyecto;
import controlhoras.model.service.EstimacionProyectoService;

@RestController
@RequestMapping(path="/proyecto/estimacion")
public class EstimacionProyectoController {

	@Autowired
	private EstimacionProyectoService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<EstimacionProyecto> getEstimacionProyecto() {
		return service.findAll();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public Iterable<EstimacionProyecto> getEstimacionProyecto(@PathVariable("id") int idProyecto) {
		return service.findByIdProyecto(idProyecto);
	}
		
	@RequestMapping(method = RequestMethod.POST, value = "/")
	public EstimacionProyecto save(@RequestBody EstimacionProyecto estimacionProyecto) {
		service.save(estimacionProyecto);
		return estimacionProyecto;
	}
}
