package controlhoras.security.repository;

import org.springframework.data.repository.CrudRepository;

import controlhoras.security.bean.Usuario;

public interface UsuarioDAO extends CrudRepository<Usuario, Integer> {

	public Usuario findByNombreUsuario(String nombre);
	
	public Usuario findByNombreUsuarioAndPerfilesNombrePerfil(String nombre, String nombrePerfil);
	
}