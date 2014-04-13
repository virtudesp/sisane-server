/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean;

/**
 *
 * @author al037721
 */
public class PreguntaBean {

    private Integer id = 0;
    private String descripcion = "";
    private Integer id_cuestionario = 0;

    public PreguntaBean() {
    }

    public PreguntaBean(Integer id) {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getId_cuestionario() {
        return id_cuestionario;
    }

    public void setId_cuestionario(Integer id_cuestionario) {
        this.id_cuestionario = id_cuestionario;
    }
    
    
}
