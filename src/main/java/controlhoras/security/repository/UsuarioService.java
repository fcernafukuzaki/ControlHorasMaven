package controlhoras.security.repository;

import java.io.Serializable;
import java.util.List;

import controlhoras.security.bean.Usuario;

public interface UsuarioService extends Serializable {
	
	public List<Usuario> findAll();
	
	public Usuario find(int id);
	
	public Usuario findByNombreUsuario(String nombre);
	
	public void save(Usuario usuario);
	
	public void delete(Usuario usuario);
	
	public Usuario findByNombreUsuarioAndPerfilesNombrePerfil(String nombreUsuario, String nombrePerfil);
	
}