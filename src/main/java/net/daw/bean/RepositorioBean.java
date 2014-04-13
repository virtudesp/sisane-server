/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean;

import java.util.Date;

/**
 *
 * @author al037431
 */
public class RepositorioBean {

    private Integer id = 0;
    private String titulo="";
    private String contenido="";
    private Integer id_usuario = 0;
    private Integer id_lenguaje = 0;
    private Integer id_documento = 0;
    private Date fecha = new Date();
    
     public RepositorioBean() {

    }

    public RepositorioBean(Integer intId) {
        this.id = intId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public Integer getId_lenguaje() {
        return id_lenguaje;
    }

    public void setId_lenguaje(Integer id_lenguaje) {
        this.id_lenguaje = id_lenguaje;
    }

    public Integer getId_documento() {
        return id_documento;
    }

    public void setId_documento(Integer id_documento) {
        this.id_documento = id_documento;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    
    
    
}
