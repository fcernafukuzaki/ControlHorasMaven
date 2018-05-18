package controlhoras.security.controller;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import controlhoras.security.component.Administrador;
import controlhoras.security.oauth.CustomUserDetails;
import controlhoras.security.oauth.CustomUserDetailsService;

@Controller
public class HomeController {
	
	@Autowired
	Administrador administradorService;
	
	@Autowired
	CustomUserDetailsService customUserDetailsService;
	
	@Autowired
	CustomUserDetails customUserDetails;
	
	@RequestMapping("/console")
	public String obtenerHtml(Principal principal) {
		OAuth2Authentication oAuth2Authentication = (OAuth2Authentication) principal;
		Authentication authentication = oAuth2Authentication.getUserAuthentication();
		Map<String, String> details = new LinkedHashMap<>();
		details = (Map<String, String>) authentication.getDetails();
		//System.out.println("email = " + details.get("email"));
		//System.out.println("sub   = " + details.get("sub"));
		customUserDetailsService.loadUserByUsername(details.get("email"));
		administradorService.autenticarUsuario();
		return "/pages/home.html";
	}
	
}
