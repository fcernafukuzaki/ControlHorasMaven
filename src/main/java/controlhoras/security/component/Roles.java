package controlhoras.security.component;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class Roles implements Serializable {
	
	private static final long serialVersionUID = 1L;
	public final String ROLE_ADMINISTRADOR;
	public final String ROLE_SUPERVISOR;
	public final String ROLE_ANALISTA_FABRICA;
	
	@Autowired
	public Roles(Environment env) {
		ROLE_ADMINISTRADOR = env.getProperty("controlhoras.authorized.group.administrador");
		ROLE_SUPERVISOR = env.getProperty("controlhoras.authorized.group.fabrica.supervisor");
		ROLE_ANALISTA_FABRICA = env.getProperty("controlhoras.authorized.group.fabrica.analista");
	}
}