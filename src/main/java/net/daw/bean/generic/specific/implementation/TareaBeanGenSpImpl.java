/*
 * Copyright (C) July 2014 Rafael Aznar
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

public class TareaBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public TareaBeanGenSpImpl() {
    }

    public TareaBeanGenSpImpl(Integer id) {
        super(id);
    }

    @Expose
    private String descripcion = "";
    
    @Expose
    private Date fechaentrega = new Date();
    
    @Expose(serialize = false)
    private Integer id_tipotarea = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private TipotareaBeanGenSpImpl obj_tipotarea = null;
    
    @Expose(serialize = false)
    private Integer id_estadotarea = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private EstadotareaBeanGenSpImpl obj_estadotarea = null;
    
    @Expose(serialize = false)
    private Integer id_usuario = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private UsuarioBeanGenSpImpl obj_usuario = null;

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFechaentrega() {
        return fechaentrega;
    }

    public void setFechaentrega(Date fechaentrega) {
        this.fechaentrega = fechaentrega;
    }

    public Integer getId_tipotarea() {
        return id_tipotarea;
    }

    public void setId_tipotarea(Integer id_tipotarea) {
        this.id_tipotarea = id_tipotarea;
    }

    public TipotareaBeanGenSpImpl getObj_tipotarea() {
        return obj_tipotarea;
    }

    public void setObj_tipotarea(TipotareaBeanGenSpImpl obj_tipotarea) {
        this.obj_tipotarea = obj_tipotarea;
    }

    public Integer getId_estadotarea() {
        return id_estadotarea;
    }

    public void setId_estadotarea(Integer id_estadotarea) {
        this.id_estadotarea = id_estadotarea;
    }

    public EstadotareaBeanGenSpImpl getObj_estadotarea() {
        return obj_estadotarea;
    }

    public void setObj_estadotarea(EstadotareaBeanGenSpImpl obj_estadotarea) {
        this.obj_estadotarea = obj_estadotarea;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public UsuarioBeanGenSpImpl getObj_usuario() {
        return obj_usuario;
    }

    public void setObj_usuario(UsuarioBeanGenSpImpl obj_usuario) {
        this.obj_usuario = obj_usuario;
    }
    
    

}