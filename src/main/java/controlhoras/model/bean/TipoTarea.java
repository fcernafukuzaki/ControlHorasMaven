package controlhoras.model.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@Table(name = "tipotarea" , catalog = Util.CATALOG)
public class TipoTarea {

	private int idTipoTarea;
	private String nombre;
	
	public TipoTarea() {
	}
	
	public TipoTarea(int idTipoTarea, String nombre) {
		this.idTipoTarea = idTipoTarea;
		this.nombre = nombre;
	}

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idtipotarea", unique = true, nullable = false)
	public int getIdTipoTarea() {
		return idTipoTarea;
	}

	public void setIdTipoTarea(int idTipoTarea) {
		this.idTipoTarea = idTipoTarea;
	}

	@Column(name = "nombre")
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

}