package controlhoras.model.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@Table(name = "faseproyecto" , catalog = Util.CATALOG)
public class FaseProyecto {

	private int idFaseProyecto;
	private String nombre;
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idfaseproyecto", unique = true, nullable = false)
	public int getIdFaseProyecto() {
		return idFaseProyecto;
	}
	public void setIdFaseProyecto(int idFaseProyecto) {
		this.idFaseProyecto = idFaseProyecto;
	}
	@Column(name = "nombre")
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
}
