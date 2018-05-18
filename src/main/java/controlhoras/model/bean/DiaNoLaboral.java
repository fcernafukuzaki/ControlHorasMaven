package controlhoras.model.bean;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@Table(name = "Dianolaboral" , catalog = Util.CATALOG)
public class DiaNoLaboral {

	private int idDiaNoLaboral;
	private Date fecha;

	public DiaNoLaboral() {
	}
	
	public DiaNoLaboral(int idDiaNoLaboral, Date fecha) {
		this.idDiaNoLaboral = idDiaNoLaboral;
		this.fecha = fecha;
	}

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "iddianolaboral", unique = true, nullable = false)
	public int getIdDiaNoLaboral() {
		return idDiaNoLaboral;
	}

	public void setIdDiaNoLaboral(int idDiaNoLaboral) {
		this.idDiaNoLaboral = idDiaNoLaboral;
	}

	@Column(name = "fecha")
	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

}