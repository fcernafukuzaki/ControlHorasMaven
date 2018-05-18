package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.TipoTarea;
import controlhoras.model.dao.repository.TipoTareaDAO;

@Service
@Transactional
public class TipoTareaServiceImpl implements TipoTareaService {

	@Autowired
	private TipoTareaDAO dao;
	
	@Override
	public List<TipoTarea> findAll() {
		return (List<TipoTarea>) dao.findAll();
	}

}
