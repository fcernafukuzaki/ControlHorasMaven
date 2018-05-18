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
@Table(name = "Cliente" , catalog = Util.CATALOG)
public class Cliente implements Serializable {

	private static final long serialVersionUID = 1L;
	private int idCliente;
	private String nombre;
	
	public Cliente() {
	}
	
	public Cliente(int idCliente) {
		this.idCliente = idCliente;
	}
	
	public Cliente(int idCliente, String nombre) {
		this.idCliente = idCliente;
		this.nombre = nombre;
	}

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idcliente", unique = true, nullable = false)
	public int getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(int idCliente) {
		this.idCliente = idCliente;
	}

	@Column(name = "nombre")
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}