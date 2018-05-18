package controlhoras.model.service;

import java.util.Calendar;
import java.util.List;

import controlhoras.model.bean.PeriodoFacturacion;

public interface PeriodoFacturacionService {

	public List<PeriodoFacturacion> findAll();
	
	public List<Calendar> getRangoPeriodoFacturacion(String periodo);
	
	public PeriodoFacturacion save(PeriodoFacturacion periodoFacturacion);
	
}
