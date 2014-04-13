/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean;

import java.util.Date;

/**
 *
 * @author Edu
 */
public class BacklogBean {

    private Integer id = 0;
    private String enunciado = "";
    private String descripciondetallado = "";
    private Integer id_requerimiento = 0;
    private Date fechainicioprevista = new Date();
    private Date fechafinprevista = new Date();
    private Date fechainicio = new Date();
    private Date fechafin = new Date();
    private Integer id_usuario = 0;
    private Integer horasduracionprevista = 0;
    private Integer porcentajecompletado = 0;
    private Date fechaalta = new Date();
    private Integer sprint = 0;
    private Integer releasetabla = 0;

    public BacklogBean() {

    }

    public BacklogBean(Integer id) {
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
     * @return the descripciondetallado
     */
    public String getDescripciondetallado() {
        return descripciondetallado;
    }

    /**
     * @param descripciondetallado the descripciondetallado to set
     */
    public void setDescripciondetallado(String descripciondetallado) {
        this.descripciondetallado = descripciondetallado;
    }

    /**
     * @return the id_requerimiento
     */
    public Integer getId_requerimiento() {
        return id_requerimiento;
    }

    /**
     * @param id_requerimiento the id_requerimiento to set
     */
    public void setId_requerimiento(Integer id_requerimiento) {
        this.id_requerimiento = id_requerimiento;
    }

    /**
     * @return the fechainicioprevista
     */
    public Date getFechainicioprevista() {
        return fechainicioprevista;
    }

    /**
     * @param fechainicioprevista the fechainicioprevista to set
     */
    public void setFechainicioprevista(Date fechainicioprevista) {
        this.fechainicioprevista = fechainicioprevista;
    }

    /**
     * @return the fechafinprevista
     */
    public Date getFechafinprevista() {
        return fechafinprevista;
    }

    /**
     * @param fechafinprevista the fechafinprevista to set
     */
    public void setFechafinprevista(Date fechafinprevista) {
        this.fechafinprevista = fechafinprevista;
    }

    /**
     * @return the fechainicio
     */
    public Date getFechainicio() {
        return fechainicio;
    }

    /**
     * @param fechainicio the fechainicio to set
     */
    public void setFechainicio(Date fechainicio) {
        this.fechainicio = fechainicio;
    }

    /**
     * @return the fechafin
     */
    public Date getFechafin() {
        return fechafin;
    }

    /**
     * @param fechafin the fechafin to set
     */
    public void setFechafin(Date fechafin) {
        this.fechafin = fechafin;
    }

    /**
     * @return the id_usuario
     */
    public Integer getId_usuario() {
        return id_usuario;
    }

    /**
     * @param id_usuario the id_usuario to set
     */
    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    /**
     * @return the horasduracionprevista
     */
    public Integer getHorasduracionprevista() {
        return horasduracionprevista;
    }

    /**
     * @param horasduracionprevista the horasduracionprevista to set
     */
    public void setHorasduracionprevista(Integer horasduracionprevista) {
        this.horasduracionprevista = horasduracionprevista;
    }

    /**
     * @return the porcentajecompletado
     */
    public Integer getPorcentajecompletado() {
        return porcentajecompletado;
    }

    /**
     * @param porcentajecompletado the porcentajecompletado to set
     */
    public void setPorcentajecompletado(Integer porcentajecompletado) {
        this.porcentajecompletado = porcentajecompletado;
    }

    /**
     * @return the fechaalta
     */
    public Date getFechaalta() {
        return fechaalta;
    }

    /**
     * @param fechaalta the fechaalta to set
     */
    public void setFechaalta(Date fechaalta) {
        this.fechaalta = fechaalta;
    }

    /**
     * @return the sprint
     */
    public Integer getSprint() {
        return sprint;
    }

    /**
     * @param sprint the sprint to set
     */
    public void setSprint(Integer sprint) {
        this.sprint = sprint;
    }

    /**
     * @return the releasetabla
     */
    public Integer getReleasetabla() {
        return releasetabla;
    }

    /**
     * @param releasetabla the releasetabla to set
     */
    public void setReleasetabla(Integer releasetabla) {
        this.releasetabla = releasetabla;
    }


}
