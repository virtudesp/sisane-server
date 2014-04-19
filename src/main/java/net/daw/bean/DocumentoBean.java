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
    //private String presentacion = "";
    private String contenido = "";
    private Date alta = new Date();
    private Date cambio = new Date();
    private Integer hits = 0;
    private Integer id_usuario = null;
    private String etiquetas = "";
    private Boolean publicado = false;
    private Boolean portada = false;

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

//     public String getPresentacion() {
//        return presentacion;
//    }
//
//    public void setPresentacion(String contenidoParseado) {
//        this.presentacion = contenidoParseado;
//    }
    public Date getAlta() {
        return alta;
    }

    public void setAlta(Date fecha) {
        this.alta = fecha;
    }

    public Date getCambio() {
        return cambio;
    }

    public void setCambio(Date fecha) {
        this.cambio = fecha;
    }

    public Integer getHits() {
        return hits;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
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

    public Boolean getPublicado() {
        return publicado;
    }

    public void setPublicado(Boolean publicado) {
        this.publicado = publicado;
    }

    public Boolean getPortada() {
        return portada;
    }

    public void setPortada(Boolean portada) {
        this.portada = portada;
    }
}
