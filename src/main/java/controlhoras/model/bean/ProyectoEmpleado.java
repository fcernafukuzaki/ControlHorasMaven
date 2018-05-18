package controlhoras.model.bean;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@IdClass(ProyectoEmpleado.class)
@Table(name = "proyectoempleado" , catalog = Util.CATALOG)
public class ProyectoEmpleado implements Serializable {

	private static final long serialVersionUID = 1L;
	private int idProyecto;
	private int idEmpleado;
	private int idCargo;
	
	@Id
	@Column(name = "idproyecto")
	public int getIdProyecto() {
		return idProyecto;
	}
	public void setIdProyecto(int idProyecto) {
		this.idProyecto = idProyecto;
	}
	
	@Id
	@Column(name="idempleado")
	public int getIdEmpleado() {
		return idEmpleado;
	}
	public void setIdEmpleado(int idEmpleado) {
		this.idEmpleado = idEmpleado;
	}
	
	@Id
	@Column(name = "idcargo")
	public int getIdCargo() {
		return idCargo;
	}
	public void setIdCargo(int idCargo) {
		this.idCargo = idCargo;
	}
	
}
