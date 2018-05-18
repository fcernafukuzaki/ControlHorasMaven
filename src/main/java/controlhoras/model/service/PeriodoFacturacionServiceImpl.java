package controlhoras.model.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.PeriodoFacturacion;
import controlhoras.model.dao.repository.PeriodoFacturacionDAO;

@Service
@Transactional
public class PeriodoFacturacionServiceImpl implements PeriodoFacturacionService {

	@Autowired
	private PeriodoFacturacionDAO dao;
	
	@Override
	public List<PeriodoFacturacion> findAll() {
		return (List<PeriodoFacturacion>) dao.findAll();
	}
	
	@Override
	public List<Calendar> getRangoPeriodoFacturacion(String periodo) {
		List<Calendar> rangoFechas = new ArrayList<>();
		Calendar fechaInicio = Calendar.getInstance();
		
		PeriodoFacturacion periodoFacturacion = dao.findByPeriodo(periodo);
		fechaInicio.setTime(periodoFacturacion.getFechaInicio());
		
		while (fechaInicio.getTimeInMillis() <= periodoFacturacion.getFechaFin().getTime() ){
			Calendar fecha = Calendar.getInstance();
			fecha.setTimeInMillis(fechaInicio.getTimeInMillis());
			fechaInicio.setTimeInMillis(fecha.getTimeInMillis()+(1000*60*60*24));
			rangoFechas.add(fecha);
		}
		
		return rangoFechas;
	}

	@Override
	public PeriodoFacturacion save(PeriodoFacturacion periodoFacturacion) {
		return dao.save(periodoFacturacion);
	}
	
}
