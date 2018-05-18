package controlhoras.security.oauth.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoTokenServices;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import controlhoras.security.oauth.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class OAuthSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	OAuth2ClientContext oauth2ClientContext;
	
	@Autowired
	AuthorizationCodeResourceDetails authorizationCodeResourceDetails;
	
	@Autowired
	ResourceServerProperties resourceServerProperties;
	
	@Autowired
	private CustomUserDetailsService userDetailsService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		//super.configure(auth);
		auth
        .userDetailsService(userDetailsService);
	}
	
	private OAuth2ClientAuthenticationProcessingFilter filter() {		
		UserInfoTokenServices tokenServices = null;
		OAuth2ClientAuthenticationProcessingFilter googleFilter = new OAuth2ClientAuthenticationProcessingFilter("/google/login");
		OAuth2RestTemplate googleRestTemplate = new OAuth2RestTemplate(authorizationCodeResourceDetails, oauth2ClientContext);
		googleFilter.setRestTemplate(googleRestTemplate);
		tokenServices = new UserInfoTokenServices(resourceServerProperties.getUserInfoUri(), resourceServerProperties.getClientId());
		tokenServices.setRestTemplate(googleRestTemplate);
		googleFilter.setTokenServices(tokenServices);
		return googleFilter;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http
				//.antMatcher("/**")
		/* HTTPS *//*
		.requiresChannel()
		.anyRequest()
		.requiresSecure()
		.and()
		.portMapper().http(8080).mapsTo(8443)
		.and()
		*/
				// starts authorizing configurations
				.authorizeRequests()
				.antMatchers("/", "/app/app.js").permitAll()
				.anyRequest().fullyAuthenticated()//
				.and()//
				.formLogin().loginPage("/google/login").defaultSuccessUrl("/").permitAll()
				.and()
				// setting the logout URL "/logout" - default logout URL
				.logout()//
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/byeController")//*Redirecciona a Pagina luego de LOGOUT
				.permitAll()
				.and()//
				// Setting the filter for the URL "/google/login"
				.addFilterAt(filter(), BasicAuthenticationFilter.class)
				.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
				;
		//http.csrf().ignoringAntMatchers("/periodofacturacion/save");
		http.csrf().ignoringAntMatchers("/**");
	}
}
