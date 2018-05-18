package controlhoras.model.controller;

import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.model.bean.PeriodoFacturacion;
import controlhoras.model.service.PeriodoFacturacionService;

@RestController
@RequestMapping(path="/periodofacturacion")
public class PeriodoFacturacionController {

	@Autowired
	private PeriodoFacturacionService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public Iterable<PeriodoFacturacion> getPeriodoFacturacion() {
		return service.findAll();
	}
	/*
	@RequestMapping(method = RequestMethod.GET, value = "/cliente/1/")
	public Iterable<Calendar> getRangoPeriodoFacturacion(@RequestBody String periodo) {
		System.out.println("periodo" + periodo);
		return service.getRangoPeriodoFacturacion(periodo);
	}
	*/
	@RequestMapping(method = RequestMethod.GET, value = "/cliente/1/{anio}/{mes}")
	public Iterable<Calendar> getRangoPeriodoFacturacion(@PathVariable("anio") String anio,@PathVariable("mes") String mes) {
		return service.getRangoPeriodoFacturacion(anio + "/" + mes);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/")
	public PeriodoFacturacion addPeriodoFacturacion(@RequestBody PeriodoFacturacion periodoFacturacion) {
		
		periodoFacturacion.setFechaInicio(new Date(periodoFacturacion.getFechaInicio().getTime()+(1000*60*60*24)));
		periodoFacturacion.setFechaFin(new Date(periodoFacturacion.getFechaFin().getTime()+(1000*60*60*24)));
		
		service.save(periodoFacturacion);
		return periodoFacturacion;
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/")
	public PeriodoFacturacion updatePeriodoFacturacion(@RequestBody PeriodoFacturacion periodoFacturacion) {
		
		periodoFacturacion.setFechaInicio(new Date(periodoFacturacion.getFechaInicio().getTime()+(1000*60*60*24)));
		periodoFacturacion.setFechaFin(new Date(periodoFacturacion.getFechaFin().getTime()+(1000*60*60*24)));
		
		service.save(periodoFacturacion);
		return periodoFacturacion;
	}
}
