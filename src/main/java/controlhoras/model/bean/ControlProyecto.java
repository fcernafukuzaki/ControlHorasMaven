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
@Table(name = "controlproyecto" , catalog = Util.CATALOG)
public class ControlProyecto {

	private long idControlProyecto;
	private Proyecto proyecto;
	private TipoTarea tipoTarea;
	private Empleado empleado;
	private TipoHora tipoHora;
	private FaseProyecto fase;
	private int cantidadHoras;
	private Date fechaRegistro;
	
	public ControlProyecto() {
	}

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idcontrolproyecto", unique = true, nullable = false)
	public long getIdControlProyecto() {
		return idControlProyecto;
	}
	
	public void setIdControlProyecto(long idControlProyecto) {
		this.idControlProyecto = idControlProyecto;
	}

	@OneToOne
	@JoinColumn(name="idproyecto")
	public Proyecto getProyecto() {
		return proyecto;
	}

	public void setProyecto(Proyecto proyecto) {
		this.proyecto = proyecto;
	}

	@OneToOne
	@JoinColumn(name="idtipotarea")
	public TipoTarea getTipoTarea() {
		return tipoTarea;
	}

	public void setTipoTarea(TipoTarea tipoTarea) {
		this.tipoTarea = tipoTarea;
	}

	@OneToOne
	@JoinColumn(name="idempleado")
	public Empleado getEmpleado() {
		return empleado;
	}

	public void setEmpleado(Empleado empleado) {
		this.empleado = empleado;
	}

	@OneToOne
	@JoinColumn(name="idtipohora")
	public TipoHora getTipoHora() {
		return tipoHora;
	}

	public void setTipoHora(TipoHora tipoHora) {
		this.tipoHora = tipoHora;
	}

	@OneToOne
	@JoinColumn(name="idfase")
	public FaseProyecto getFase() {
		return fase;
	}

	public void setFase(FaseProyecto fase) {
		this.fase = fase;
	}

	@Column(name = "cantidadhoras", nullable = false)
	public int getCantidadHoras() {
		return cantidadHoras;
	}

	public void setCantidadHoras(int cantidadHoras) {
		this.cantidadHoras = cantidadHoras;
	}

	@Column(name = "fecharegistro", nullable = false)
	public Date getFechaRegistro() {
		return fechaRegistro;
	}

	public void setFechaRegistro(Date fechaRegistro) {
		this.fechaRegistro = fechaRegistro;
	}

}