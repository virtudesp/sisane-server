/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean;

import java.util.Date;

/**
 *
 * @author Alvaro
 */
public class DocumentoBean extends GenericBeanImplementation implements GenericBeanInterface {

    
    private String titulo = "";
    private String presentacion = "";
    private String contenido = "";   
    private Date fecha = new Date();
    private Integer nota = 0;
    private Integer id_usuario = null;
    private String etiquetas = "";


    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) throws Exception {
        this.contenido = contenido;
    }

     public String getPresentacion() {
        return presentacion;
    }

    public void setPresentacion(String contenidoParseado) {
        this.presentacion = contenidoParseado;
    }
    
    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Integer getNota() {
        return nota;
    }

    public void setNota(Integer nota) {
        this.nota = nota;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }
    
    public String getEtiquetas() {
        return etiquetas;
    }

    public void setEtiquetas(String etiquetas) {
        this.etiquetas = etiquetas;
    }

    

}
