package controlhoras.security.oauth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import controlhoras.security.bean.Usuario;
import controlhoras.security.component.Roles;
//import controlhoras.security.repository.UsuarioService;

@Service
public class CustomUserDetailsService extends Usuario implements UserDetailsService {

	private static final long serialVersionUID = 1L;
/*
	@Autowired
	private UsuarioService usuarioService;
	*/
	CustomUserDetails customUserDetails;
	
	@Autowired
	Roles roles;
	
	@Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) {
    	/*Usuario usuario = usuarioService.findByNombreUsuario(email);
    	
    	if (usuario == null) {
            throw new UsernameNotFoundException("No se encontró usuario con nombre: " + email);
        }
    	*/
		Usuario usuario = new Usuario();
		usuario.setIdUsuario(1);
		usuario.setNombreUsuario("fcernaf@gmail.com");
		
    	this.customUserDetails = new CustomUserDetails(usuario);
    	return this.customUserDetails;
    }
    
    /*
     * Metodos para autenticar usuario
     */
    public boolean isAdministrador() {
    	/*Usuario usuario = usuarioService.findByNombreUsuarioAndPerfilesNombrePerfil(customUserDetails.getNombreUsuario(), roles.ROLE_ADMINISTRADOR);
    	return (usuario == null ? false : true);*/
    	return true;
    }
    
    public boolean isSupervisor() {
    	/*Usuario usuario = usuarioService.findByNombreUsuarioAndPerfilesNombrePerfil(customUserDetails.getNombreUsuario(), roles.ROLE_SUPERVISOR);
    	return (usuario == null ? false : true);*/
    	return true;
    }
    
    public boolean isAnalistaFabrica() {
    	/*Usuario usuario = usuarioService.findByNombreUsuarioAndPerfilesNombrePerfil(customUserDetails.getNombreUsuario(), roles.ROLE_ANALISTA_FABRICA);
    	return (usuario == null ? false : true);*/
    	return true;
    }
}