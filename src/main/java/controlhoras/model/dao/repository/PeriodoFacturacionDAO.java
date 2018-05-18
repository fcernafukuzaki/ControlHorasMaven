package controlhoras.model.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import controlhoras.model.bean.PeriodoFacturacion;

public interface PeriodoFacturacionDAO extends CrudRepository<PeriodoFacturacion, Integer> {

	public PeriodoFacturacion findByPeriodo(String periodo);
	
}
