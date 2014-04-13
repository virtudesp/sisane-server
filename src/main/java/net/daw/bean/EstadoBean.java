/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean;

/**
 *
 * @author Diana Ortega
 */
public class EstadoBean {
    
    private Integer id = 0;
    private String nombre = "";
    
    
     public EstadoBean() {
    }

    public EstadoBean(Integer id) {
        this.id = id;
    }

   
    public int getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }  
    
}
