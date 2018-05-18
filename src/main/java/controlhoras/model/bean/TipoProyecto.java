package controlhoras.model.bean;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@Table(name = "tipoproyecto" , catalog = Util.CATALOG)
public class TipoProyecto implements Serializable {

	private static final long serialVersionUID = 1L;
	private int idTipoProyecto;
	private String nombre;
	
	public TipoProyecto() {
		super();
	}
	
	public TipoProyecto(int idTipoProyecto, String nombre) {
		this.idTipoProyecto = idTipoProyecto;
		this.nombre = nombre;
	}
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idtipoproyecto", unique = true, nullable = false)
	public int getIdTipoProyecto() {
		return idTipoProyecto;
	}
	public void setIdTipoProyecto(int idTipoProyecto) {
		this.idTipoProyecto = idTipoProyecto;
	}
	
	@Column(name = "nombre")
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}	
	
}
