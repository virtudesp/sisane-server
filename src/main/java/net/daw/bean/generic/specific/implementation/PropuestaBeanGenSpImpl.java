/*
 * Copyright (C) 2014 al037805
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package net.daw.bean.generic.specific.implementation;

import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import com.google.gson.annotations.Expose;
import java.util.Date;

/**
 *
 * @author al037805
 */
public class PropuestaBeanGenSpImpl extends BeanGenImpl implements BeanInterface{
    
    public PropuestaBeanGenSpImpl() {
    }

    public PropuestaBeanGenSpImpl(Integer id) {
        super(id);
    }
    
    
    @Expose
    private String descripcion = "";
    @Expose
    private Date fecha = new Date();
    @Expose
    private Integer puntuacion = 0;
    
    @Expose (serialize = false)
    private Integer id_tipopropuesta = 0;
     @Expose(deserialize = false)
    private TipopropuestaBeanGenSpImpl obj_tipopropuesta = null;
    @Expose (serialize = false)
    private Integer id_usuario = 0;
    @Expose(deserialize = false)
    private UsuarioBeanGenSpImpl obj_usuario = null;

    /**
     * @return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param descripcion the descripcion to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
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
     * @return the puntuacion
     */
    public Integer getPuntuacion() {
        return puntuacion;
    }

    /**
     * @param puntuacion the puntuacion to set
     */
    public void setPuntuacion(Integer puntuacion) {
        this.puntuacion = puntuacion;
    }

    /**
     * @return the id_tipopropuesta
     */
    public Integer getId_tipopropuesta() {
        return id_tipopropuesta;
    }

    /**
     * @param id_tipopropuesta the id_tipopropuesta to set
     */
    public void setId_tipopropuesta(Integer id_tipopropuesta) {
        this.id_tipopropuesta = id_tipopropuesta;
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
     * @return the obj_usuario
     */
    public UsuarioBeanGenSpImpl getObj_usuario() {
        return obj_usuario;
    }

    /**
     * @param obj_usuario the obj_usuario to set
     */
    public void setObj_usuario(UsuarioBeanGenSpImpl obj_usuario) {
        this.obj_usuario = obj_usuario;
    }

    /**
     * @return the obj_tipopropuesta
     */
    public TipopropuestaBeanGenSpImpl getObj_tipopropuesta() {
        return obj_tipopropuesta;
    }

    /**
     * @param obj_tipopropuesta the obj_tipopropuesta to set
     */
    public void setObj_tipopropuesta(TipopropuestaBeanGenSpImpl obj_tipopropuesta) {
        this.obj_tipopropuesta = obj_tipopropuesta;
    }
    
    
    
    
}
