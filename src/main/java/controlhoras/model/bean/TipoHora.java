package controlhoras.model.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@Table(name = "tipohora" , catalog = Util.CATALOG)
public class TipoHora {

	private int idTipoHora;
	private String nombre;
	private int porcentaje;
	
	public TipoHora() {
	}
	
	public TipoHora(int idTipoHora, String nombre, int porcentaje) {
		this.idTipoHora = idTipoHora;
		this.nombre = nombre;
		this.porcentaje = porcentaje;
	}

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idtipohora", unique = true, nullable = false)
	public int getIdTipoHora() {
		return idTipoHora;
	}

	public void setIdTipoHora(int idTipoHora) {
		this.idTipoHora = idTipoHora;
	}

	@Column(name = "nombre")
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Column(name = "porcentaje")
	public int getPorcentaje() {
		return porcentaje;
	}

	public void setPorcentaje(int porcentaje) {
		this.porcentaje = porcentaje;
	}

}