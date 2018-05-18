package controlhoras.security.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@Table(name = "perfil" , catalog = Util.CATALOG)
public class Perfil implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private int idPerfil;
	private String nombrePerfil;
	
	public Perfil() {
	}
	
	public Perfil(String nombrePerfil) {
		this.nombrePerfil = nombrePerfil;
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)// GenerationType.AUTO)
	@Column(name = "idperfil", unique = true, nullable = false)
	public int getIdPerfil() {
		return idPerfil;
	}
	public void setIdPerfil(int idPerfil) {
		this.idPerfil = idPerfil;
	}
	@Column(name = "nombre")
	public String getNombrePerfil() {
		return nombrePerfil;
	}
	public void setNombrePerfil(String nombrePerfil) {
		this.nombrePerfil = nombrePerfil;
	}
}
