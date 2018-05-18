package controlhoras.security.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.security.bean.Usuario;

@Service
@Transactional
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioDAO dao;
	
	@Override
	public List<Usuario> findAll() {
		return (List<Usuario>) dao.findAll();
	}

	@Override
	public Usuario find(int id) {
		return dao.findOne(id);
	}

	@Override
	public Usuario findByNombreUsuario(String nombre) {
		return dao.findByNombreUsuario(nombre);
	}

	@Override
	public void save(Usuario usuario) {
		dao.save(usuario);
	}

	@Override
	public void delete(Usuario usuario) {
		dao.delete(usuario);
	}

	@Override
	public Usuario findByNombreUsuarioAndPerfilesNombrePerfil(String nombre, String nombrePerfil) {
		return dao.findByNombreUsuarioAndPerfilesNombrePerfil(nombre, nombrePerfil);
	}
}