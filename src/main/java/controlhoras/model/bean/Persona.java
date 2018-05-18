package controlhoras.model.bean;

import java.io.Serializable;

public abstract class Persona implements Serializable {

	private static final long serialVersionUID = 1L;
	private String apellidoPaterno;
	private String apellidoMaterno;
	private String nombre;
	
	public Persona() {
	
	}
	
	public Persona(String nombre, String apellidoPaterno, String apellidoMaterno) {
		this.nombre = nombre;
		this.apellidoPaterno = apellidoPaterno;
		this.apellidoMaterno = apellidoMaterno;
	}
	
	public String getApellidoPaterno() {
		return apellidoPaterno;
	}

	public void setApellidoPaterno(String apellidoPaterno) {
		this.apellidoPaterno = apellidoPaterno;
	}

	public String getApellidoMaterno() {
		return apellidoMaterno;
	}

	public void setApellidoMaterno(String apellidoMaterno) {
		this.apellidoMaterno = apellidoMaterno;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public String getNombreCompleto() {
		return new StringBuilder()
				.append(getNombre() == null || getNombre().length() == 0 ? "" : getNombre())
				.append(getApellidoPaterno() == null || getApellidoPaterno().length() == 0 ? "" : " ")
				.append(getApellidoPaterno() == null || getApellidoPaterno().length() == 0 ? "" : getApellidoPaterno())
				.append(getApellidoMaterno() == null || getApellidoMaterno().length() == 0 ? "" : " ")
				.append(getApellidoMaterno() == null || getApellidoMaterno().length() == 0 ? "" : getApellidoMaterno())
				.toString();
	}

}