package controlhoras.model.dao.repository;

import org.springframework.data.repository.CrudRepository;

import controlhoras.model.bean.Cliente;

public interface ClienteDAO extends CrudRepository<Cliente, Integer> {

}
