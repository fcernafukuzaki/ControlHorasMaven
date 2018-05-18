package controlhoras.model.bean;

import java.io.Serializable;
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
@Table(name = "proyecto" , catalog = Util.CATALOG)
public class Proyecto implements Serializable {

	private static final long serialVersionUID = 1L;
	private int idProyecto;
	private TipoProyecto tipoProyecto;
	private Cliente cliente;
	private LiderCliente liderCliente;
	private String nombre;
	private String codigo;
	private int cantidadHoras;
	private Date fechaInicio;
	private Date fechaFin;
	
	public Proyecto() {
	}
	
	public Proyecto(int idProyecto, TipoProyecto tipoProyecto, Cliente cliente, LiderCliente liderCliente,
			String nombre, String codigo, int cantidadHoras, Date fechaInicio, Date fechaFin
			) {
		super();
		this.idProyecto = idProyecto;
		this.tipoProyecto = tipoProyecto;
		this.cliente = cliente;
		this.liderCliente = liderCliente;
		this.nombre = nombre;
		this.codigo = codigo;
		this.cantidadHoras = cantidadHoras;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
	}

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idproyecto", unique = true, nullable = false)
	public int getIdProyecto() {
		return idProyecto;
	}
	public void setIdProyecto(int idProyecto) {
		this.idProyecto = idProyecto;
	}
	
	@OneToOne
	@JoinColumn(name="idcliente")
	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	@Column(name = "nombre", nullable = false)
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	@Column(name = "codigo")
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	
	@Column(name = "cantidadhoras")
	public int getCantidadHoras() {
		return cantidadHoras;
	}
	public void setCantidadHoras(int cantidadHoras) {
		this.cantidadHoras = cantidadHoras;
	}
	
	@Column(name = "fechainicio")
	public Date getFechaInicio() {
		return fechaInicio;
	}
	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}
	
	@Column(name = "fechafin")
	public Date getFechaFin() {
		return fechaFin;
	}
	public void setFechaFin(Date fechaFin) {
		this.fechaFin = fechaFin;
	}
	
	@OneToOne
	@JoinColumn(name="idtipoproyecto")
	public TipoProyecto getTipoProyecto() {
		return tipoProyecto;
	}

	public void setTipoProyecto(TipoProyecto tipoProyecto) {
		this.tipoProyecto = tipoProyecto;
	}

	@OneToOne
	@JoinColumn(name="idlidercliente")
	public LiderCliente getLiderCliente() {
		return liderCliente;
	}

	public void setLiderCliente(LiderCliente liderCliente) {
		this.liderCliente = liderCliente;
	}
	
}
