package controlhoras.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.model.bean.DiaNoLaboral;
import controlhoras.model.dao.repository.DiaNoLaboralDAO;

@Service
@Transactional
public class DiaNoLaboralServiceImpl implements DiaNoLaboralService {

	@Autowired
	private DiaNoLaboralDAO dao;
	
	@Override
	public List<DiaNoLaboral> findAll() {
		return (List<DiaNoLaboral>) dao.findAll();
	}

}
