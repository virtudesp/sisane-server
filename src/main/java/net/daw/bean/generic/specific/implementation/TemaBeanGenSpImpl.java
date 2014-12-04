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
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class TemaBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public TemaBeanGenSpImpl() {
    }

    public TemaBeanGenSpImpl(Integer id) {
        super(id);
    }

    @Expose
    private String nombre = "";
    
    @Expose
    private Date fechacreacion = new Date();
    
    @Expose(serialize = false)
    private Integer id_tipotema = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private TipotemaBeanGenSpImpl obj_tipotema = null;
    
    @Expose(serialize = false)
    private Integer id_usuario = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private UsuarioBeanGenSpImpl obj_usuario = null;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Date getFechacreacion() {
        return fechacreacion;
    }

    public void setFechacreacion(Date fechacreacion) {
        this.fechacreacion = fechacreacion;
    }
    
    
    public Integer getId_tipotema() {
        return id_tipotema;
    }

    public void setId_tipotema(Integer id_tipotema) {
        this.id_tipotema = id_tipotema;
    }

    public TipotemaBeanGenSpImpl getObj_tipotema() {
        return obj_tipotema;
    }

    public void setObj_tipotema(TipotemaBeanGenSpImpl obj_tipotema) {
        this.obj_tipotema = obj_tipotema;
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
