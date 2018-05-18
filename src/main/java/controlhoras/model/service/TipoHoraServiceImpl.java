package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.TipoHora;
import controlhoras.model.dao.repository.TipoHoraDAO;

@Service
@Transactional
public class TipoHoraServiceImpl implements TipoHoraService {

	@Autowired
	private TipoHoraDAO dao;

	@Override
	public List<TipoHora> findAll() {
		return (List<TipoHora>) dao.findAll();
	}
	
}
