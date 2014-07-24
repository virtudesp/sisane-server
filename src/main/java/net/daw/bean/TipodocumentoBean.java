/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean;

import com.google.gson.annotations.Expose;

/**
 *
 * @author al037877
 */
public class TipodocumentoBean  extends GenericBeanImpl implements GenericBeanInterface {
  @Expose
    private String descripcion = "";
  @Expose
    private Boolean privado = false;

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Boolean getPrivado() {
        return privado;
    }

    public void setPrivado(Boolean privado) {
        this.privado = privado;
    }
    
    
}
