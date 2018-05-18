package controlhoras.security.bean;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@Table(name = "usuario" , catalog = Util.CATALOG)
public class Usuario implements java.io.Serializable {
	
	private static final long serialVersionUID = 1L;
	private int idUsuario;
	private String nombreUsuario;
	private List<Perfil> perfiles = new ArrayList<>(0);
	
	public Usuario() {
	}
	
	public Usuario(Usuario usuario) {
		this.idUsuario = usuario.idUsuario;
		this.nombreUsuario = usuario.nombreUsuario;
		this.perfiles = usuario.getPerfiles();
	}
	
	public Usuario(int idUsuario, String nombreUsuario, List<Perfil> perfiles) {
		this.idUsuario = idUsuario;
		this.nombreUsuario = nombreUsuario;
		this.perfiles = perfiles;
	}
	
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idusuario", unique = true, nullable = false)
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	
	@Column(name = "nombre")
	public String getNombreUsuario() {
		return nombreUsuario;
	}
	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	
	@ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(name = "usuarioperfil", catalog = Util.CATALOG, 
			joinColumns = { @JoinColumn(name="idusuario")},
			inverseJoinColumns = { @JoinColumn(name="idperfil") 
	})
	public List<Perfil> getPerfiles() {
		return this.perfiles;
	}

	public void setPerfiles(List<Perfil> perfiles) {
		this.perfiles = perfiles;
	}
	
}
