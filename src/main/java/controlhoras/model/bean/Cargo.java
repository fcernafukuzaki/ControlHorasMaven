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
@Table(name = "cargo" , catalog = Util.CATALOG)
public class Cargo implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private int idCargo;
	private String nombre;
	
	public Cargo() {
	
	}
	
	public Cargo(int idCargo) {
		this.idCargo = idCargo;
	}
	
	public Cargo(int idCargo, String nombre) {
		this.idCargo = idCargo;
		this.nombre = nombre;
	}
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idcargo", unique = true, nullable = false)
	public int getIdCargo() {
		return idCargo;
	}

	public void setIdCargo(int idCargo) {
		this.idCargo = idCargo;
	}

	@Column(name = "nombre")
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}