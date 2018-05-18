package controlhoras.model.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import controlhoras.model.bean.Cliente;
import controlhoras.model.bean.Proyecto;
import controlhoras.model.bean.ProyectoEmpleado;
import controlhoras.model.service.ProyectoEmpleadoService;
import controlhoras.model.service.ProyectoService;

@RestController
@RequestMapping(path="/proyecto")
public class ProyectoController {

	@Autowired
	private ProyectoService service;
	
	@Autowired
	private ProyectoEmpleadoService proyectoEmpleadoService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<Proyecto> getProyectos() {
		return service.findAll();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/cliente/{id}")
	public Iterable<Proyecto> getProyecto(@PathVariable("id") int idCliente) {
		return service.findByCliente(new Cliente(idCliente));
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/cliente/")
	public Proyecto saveProyecto(@RequestBody Proyecto proyecto) {
		return service.save(proyecto);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/cliente/")
	public Proyecto updateProyecto(@RequestBody Proyecto proyecto) {
		
		proyecto.setFechaInicio(new Date(proyecto.getFechaInicio().getTime()+(1000*60*60*24)));
		proyecto.setFechaFin(new Date(proyecto.getFechaFin().getTime()+(1000*60*60*24)));
		
		service.save(proyecto);
		return proyecto;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/cliente/{id}/{idProyecto}")
	public Proyecto getProyecto(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto) {
		return service.findByClienteAndIdProyecto(new Cliente(idCliente), idProyecto);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/")
	public Proyecto save(@RequestBody Proyecto proyecto) {
		service.save(proyecto);
		return proyecto;
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/")
	public Proyecto update(@RequestBody Proyecto proyecto) {
		service.save(proyecto);
		return proyecto;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/cliente/{id}/{idProyecto}/supervisor/")
	public Iterable<ProyectoEmpleado> getProyectoSupervisor(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto) {
		return proyectoEmpleadoService.findByIdProyectoAndIdCargo(idProyecto, 1);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/cliente/{id}/{idProyecto}/analistaSeguimiento/")
	public Iterable<ProyectoEmpleado> getProyectoAnalistaSeguimiento(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto) {
		return proyectoEmpleadoService.findByIdProyectoAndIdCargo(idProyecto, 2);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/cliente/{id}/{idProyecto}/analistaFabrica/")
	public Iterable<ProyectoEmpleado> getProyectoAnalistaFabrica(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto) {
		return proyectoEmpleadoService.findByIdProyectoAndIdCargo(idProyecto, 3);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/cliente/{id}/{idProyecto}/supervisor/")
	public Iterable<ProyectoEmpleado> saveProyectoSupervisor(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto
			, @RequestBody List<ProyectoEmpleado> proyectoEmpleado
			) {
		proyectoEmpleadoService.saveAll(proyectoEmpleado);
		return proyectoEmpleado;
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/cliente/{id}/{idProyecto}/analistaSeguimiento/")
	public Iterable<ProyectoEmpleado> saveProyectoAnalistaSeguimiento(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto
			, @RequestBody List<ProyectoEmpleado> proyectoEmpleado
			) {
		proyectoEmpleadoService.saveAll(proyectoEmpleado);
		return proyectoEmpleado;
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/cliente/{id}/{idProyecto}/analistaFabrica/")
	public Iterable<ProyectoEmpleado> saveProyectoAnalistaFabrica(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto
			, @RequestBody List<ProyectoEmpleado> proyectoEmpleado
			) {
		proyectoEmpleadoService.saveAll(proyectoEmpleado);
		return proyectoEmpleado;
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/cliente/{id}/{idProyecto}/supervisor/")
	public Iterable<ProyectoEmpleado> updateProyectoSupervisor(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto
			, @RequestBody List<ProyectoEmpleado> proyectoEmpleado
			) {
		proyectoEmpleadoService.deleteByIdProyectoAndIdCargo(idProyecto, 1);
		proyectoEmpleadoService.saveAll(proyectoEmpleado);
		return proyectoEmpleado;
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/cliente/{id}/{idProyecto}/analistaSeguimiento/")
	public Iterable<ProyectoEmpleado> updateProyectoAnalistaSeguimiento(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto
			, @RequestBody List<ProyectoEmpleado> proyectoEmpleado
			) {
		proyectoEmpleadoService.deleteByIdProyectoAndIdCargo(idProyecto, 2);
		proyectoEmpleadoService.saveAll(proyectoEmpleado);
		return proyectoEmpleado;
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/cliente/{id}/{idProyecto}/analistaFabrica/")
	public Iterable<ProyectoEmpleado> updateProyectoAnalistaFabrica(@PathVariable("id") int idCliente, @PathVariable("idProyecto") int idProyecto
			, @RequestBody List<ProyectoEmpleado> proyectoEmpleado
			) {
		proyectoEmpleadoService.deleteByIdProyectoAndIdCargo(idProyecto, 3);
		proyectoEmpleadoService.saveAll(proyectoEmpleado);
		return proyectoEmpleado;
	}
	
	
	
}
