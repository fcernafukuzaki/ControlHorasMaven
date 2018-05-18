package controlhoras.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import controlhoras.security.bean.Usuario;
import controlhoras.security.repository.UsuarioService;

@RestController
@RequestMapping(path="/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping(path = "/add")
	public String addNewUser(@RequestParam int idPerfil, @RequestParam int idUsuario) {
		Usuario n = new Usuario();
		//n.setIdPerfil(idPerfil);
		n.setIdUsuario(idUsuario);
		//userRepository.save(n);
		return "Saved";
	}

	@GetMapping("/getUsuario")
	public Iterable<Usuario> getUsuario() {
		return usuarioService.findAll();
	}
	
	@GetMapping(path = "/findByNombreUsuario")
	public Usuario getUsuarioPerfil(@RequestParam String usuario) {
		return usuarioService.findByNombreUsuario(usuario);
	}
}
