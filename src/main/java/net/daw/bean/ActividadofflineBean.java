/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean;

import java.util.Date;

/**
 *
 * @author Javi Bonet
 */
public class ActividadofflineBean {
    
     private Integer id = 0;
     private String enunciado = "";
     private Date fecha= new Date();
     private Double calificacion = 0.0;
     private Integer evaluacion = 0;
     private Integer activo = 0;

    public ActividadofflineBean() {
       
    }

    
     public ActividadofflineBean(Integer id) {
         this.id = id;
     }
    
    
    /**
     * @return the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return the enunciado
     */
    public String getEnunciado() {
        return enunciado;
    }

    /**
     * @param enunciado the enunciado to set
     */
    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    /**
     * @return the fecha
     */
    public Date getFecha() {
        return fecha;
    }

    /**
     * @param fecha the fecha to set
     */
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    /**
     * @return the calificacion
     */
    public double getCalificacion() {
        return calificacion;
    }

    /**
     * @param calificacion the calificacion to set
     */
    public void setCalificacion(Double calificacion) {
        this.calificacion = calificacion;
    }

    /**
     * @return the evaluacion
     */
    public Integer getEvaluacion() {
        return evaluacion;
    }

    /**
     * @param evaluacion the evaluacion to set
     */
    public void setEvaluacion(Integer evaluacion) {
        this.evaluacion = evaluacion;
    }

    /**
     * @return the activo
     */
    public Integer getActivo() {
        return activo;
    }

    /**
     * @param activo the activo to set
     */
    public void setActivo(Integer activo) {
        this.activo = activo;
    }
     
    
    
    
}