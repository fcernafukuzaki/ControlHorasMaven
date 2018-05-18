package controlhoras.security.oauth;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import controlhoras.security.bean.Usuario;
import java.util.Collection;
import java.util.stream.Collectors;

@Component
public class CustomUserDetails extends Usuario implements UserDetails {

	private static final long serialVersionUID = 1L;

	public CustomUserDetails(Usuario users) {
        super(users);
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return getPerfiles()//Roles()
                .stream()
                .map(role -> new SimpleGrantedAuthority(role.getNombrePerfil()))
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
    	return super.getNombreUsuario();
    }

    @Override
    public String getUsername() {
        return super.getNombreUsuario();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
