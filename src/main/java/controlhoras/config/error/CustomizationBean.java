package controlhoras.config.error;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
public class CustomizationBean implements EmbeddedServletContainerCustomizer {
	
	@Override
	public void customize(ConfigurableEmbeddedServletContainer container) {
		container.addErrorPages(new ErrorPage(HttpStatus.UNAUTHORIZED, "/pages/error/401.html"));
		container.addErrorPages(new ErrorPage(HttpStatus.FORBIDDEN, "/pages/error/403.html"));
		container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/pages/error/404.html"));
		container.addErrorPages(new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/pages/error/500.html"));
	}
}