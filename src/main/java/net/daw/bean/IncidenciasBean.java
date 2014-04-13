/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package net.daw.bean;

import java.util.Date;

/**
 *
 * @author Jordi
 */
public class IncidenciasBean {
    private Integer id = 0;
    private String resumen = "";
    private String cambios = "";
    private Integer id_estado= 0;
    private Integer id_repositorio= 0;
    private Integer id_usuario= 0;
    private Date fechaalta = new Date();
    private Date fecharesolucion = new Date();

    public IncidenciasBean() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getResumen() {
        return resumen;
    }

    public void setResumen(String resumen) {
        this.resumen = resumen;
    }

    public String getCambios() {
        return cambios;
    }

    public void setCambios(String cambios) {
        this.cambios = cambios;
    }

    public Integer getId_estado() {
        return id_estado;
    }

    public void setId_estado(Integer id_estado) {
        this.id_estado = id_estado;
    }

    public Integer getId_repositorio() {
        return id_repositorio;
    }

    public void setId_repositorio(Integer id_repositorio) {
        this.id_repositorio = id_repositorio;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public Date getFechaalta() {
        return fechaalta;
    }

    public void setFechaalta(Date fechaalta) {
        this.fechaalta = fechaalta;
    }

    public Date getFecharesolucion() {
        return fecharesolucion;
    }

    public void setFecharesolucion(Date fecharesolucion) {
        this.fecharesolucion = fecharesolucion;
    }
    
    
    
    
}
