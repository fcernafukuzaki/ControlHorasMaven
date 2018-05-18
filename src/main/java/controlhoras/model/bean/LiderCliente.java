package controlhoras.model.bean;

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
@Table(name = "lidercliente" , catalog = Util.CATALOG)
public class LiderCliente extends Persona {

	private static final long serialVersionUID = 1L;
	private int idLiderCliente;
	private Cliente cliente;
	private boolean activo;
	
	public LiderCliente() {
		super();
	}
	
	public LiderCliente(int idLiderCliente, Cliente cliente, String nombre, String apellidoPaterno, String apellidoMaterno, boolean activo) {
		super(nombre, apellidoPaterno, apellidoMaterno);
		this.idLiderCliente = idLiderCliente;
		this.cliente = cliente;
		this.activo = activo;
	}
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idlidercliente", unique = true, nullable = false)
	public int getIdLiderCliente() {
		return idLiderCliente;
	}
	public void setIdLiderCliente(int idLiderCliente) {
		this.idLiderCliente = idLiderCliente;
	}
	
	@OneToOne
	@JoinColumn(name="idcliente")
	public Cliente getCliente() {
		return this.cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	@Column(name = "activo")
	public boolean getActivo() {
		return activo;
	}
	public void setActivo(boolean activo) {
		this.activo = activo;
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
