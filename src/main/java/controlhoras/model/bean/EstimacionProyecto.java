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
@Table(name = "estimacionproyecto", catalog = Util.CATALOG)
public class EstimacionProyecto {

	private int idProyecto;
	private FaseProyecto faseProyecto;
	private int cantidadHoras;
	private Date fechaInicio;
	private Date fechaFin;
	
	public EstimacionProyecto() {
		
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
	@JoinColumn(name = "idfase")
	public FaseProyecto getFaseProyecto() {
		return faseProyecto;
	}
	public void setFaseProyecto(FaseProyecto faseProyecto) {
		this.faseProyecto = faseProyecto;
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
	
}