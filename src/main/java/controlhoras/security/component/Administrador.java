package controlhoras.security.component;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

@Component
public class Administrador {

	@PreAuthorize("@customUserDetailsService.isAdministrador()")
	public boolean autenticarUsuario() {
		return true;
	}
		
}