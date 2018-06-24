package controlhoras.model.bean;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import controlhoras.util.Util;

@Entity
@Table(name = "controlhoras.periodofacturacion" , catalog = Util.CATALOG)
public class PeriodoFacturacion {

	private int idPeriodoFacturacion;
	private String periodo;
	private int horasObjetivo;
	private Date fechaInicio;
	private Date fechaFin;
	
	public PeriodoFacturacion() {
	}

	public PeriodoFacturacion(int idPeriodoFacturacion, String periodo, int horasObjetivo, Date fechaInicio,
			Date fechaFin) {
		this.idPeriodoFacturacion = idPeriodoFacturacion;
		this.periodo = periodo;
		this.horasObjetivo = horasObjetivo;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
	}

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "idperiodofacturacion", unique = true, nullable = false)
	public int getIdPeriodoFacturacion() {
		return idPeriodoFacturacion;
	}

	public void setIdPeriodoFacturacion(int idPeriodoFacturacion) {
		this.idPeriodoFacturacion = idPeriodoFacturacion;
	}

	@Column(name = "periodo", nullable = false, length = 7)
	public String getPeriodo() {
		return periodo;
	}

	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}

	@Column(name = "horasobjetivo", nullable = false)
	public int getHorasObjetivo() {
		return horasObjetivo;
	}

	public void setHorasObjetivo(int horasObjetivo) {
		this.horasObjetivo = horasObjetivo;
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
	/*
	public static void main(String ... a ) {
		List<Calendar> rangoFechas = obtenerRangoFechas();
		for(int i = 0; i< rangoFechas.size(); i++) {
			System.out.println(rangoFechas.get(i).get(Calendar.DAY_OF_WEEK) + ":"+ 
					rangoFechas.get(i).get(Calendar.DAY_OF_MONTH) + "/" + (rangoFechas.get(i).get(Calendar.MONTH)+1) + "/" + rangoFechas.get(i).get(Calendar.YEAR));
			
		}
	}
	public static List<Calendar> obtenerRangoFechas(){
		final DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		Calendar fechaInicio = Calendar.getInstance();
		Calendar fechaFin = Calendar.getInstance();
		List<Calendar> rangoFechas = new ArrayList<>();
		try {
			fechaInicio.setTime(df.parse("26/09/2017"));
			fechaFin.setTime(df.parse("10/10/2017"));
			//fechaInicio.setTime(df.parse(getFechaInicio()));
			//fechaFin.setTime(df.parse(getFechaFin()));
			while (fechaInicio.getTimeInMillis() <= fechaFin.getTimeInMillis() ){
				System.out.println(fechaInicio);
				Calendar fecha = Calendar.getInstance();
				fecha.setTimeInMillis(fechaInicio.getTimeInMillis()+(1000*60*60*24));
				fechaInicio.setTimeInMillis(fecha.getTimeInMillis());
				
				rangoFechas.add(fecha);
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return rangoFechas;
	}
*/
}