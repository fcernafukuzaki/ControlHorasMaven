package controlhoras.security.oauth.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LogOutController {
	
	@RequestMapping("/byeController")
	public String bye() {
		return "/pages/bye.html";
	}
}
