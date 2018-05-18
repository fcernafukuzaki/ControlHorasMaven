package controlhoras.model.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@Table(name = "Empleado" , catalog = Util.CATALOG)
public class Empleado extends Persona {

	private static final long serialVersionUID = 1L;
	private int idEmpleado;
	private Cargo cargo;
	private Date fechaIngreso;
	private Date fechaCese;

	public Empleado() {
		super();
	}
	
	public Empleado(int idEmpleado) {
		super();
		this.idEmpleado = idEmpleado;
	}
	
	public Empleado(int idEmpleado, String nombre, String apellidoPaterno, String apellidoMaterno, Date fechaIngreso,
			Date fechaCese) {
		super(nombre, apellidoPaterno, apellidoMaterno);
		this.idEmpleado = idEmpleado;
		this.fechaIngreso = fechaIngreso;
		this.fechaCese = fechaCese;
	}
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idempleado", unique = true, nullable = false)
	public int getIdEmpleado() {
		return idEmpleado;
	}
	public void setIdEmpleado(int idEmpleado) {
		this.idEmpleado = idEmpleado;
	}
	@Column(name = "fechaingreso")
	public Date getFechaIngreso() {
		return fechaIngreso;
	}
	public void setFechaIngreso(Date fechaIngreso) {
		this.fechaIngreso = fechaIngreso;
	}
	@Column(name = "fechacese")
	public Date getFechaCese() {
		return fechaCese;
	}
	public void setFechaCese(Date fechaCese) {
		this.fechaCese = fechaCese;
	}
	
	@OneToOne
	@JoinColumn(name="idcargo")
	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}
	
	@Override
	@Column(name = "apellidopaterno")
	public String getApellidoPaterno() {
		return super.getApellidoPaterno();
	}
	
	@Override
	@Column(name = "apellidomaterno")
	public String getApellidoMaterno() {
		return super.getApellidoMaterno();
	}
	
	@Override
	@Column(name = "nombre")
	public String getNombre() {
		return super.getNombre();
	}
}
