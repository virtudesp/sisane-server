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

public class ComentarioBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public ComentarioBeanGenSpImpl() {
    }

    public ComentarioBeanGenSpImpl(Integer id) {
        super(id);
    }

    @Expose
    private String contenido = "";
    
    @Expose(serialize = false)
    private Integer id_propuesta = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private PropuestaBeanGenSpImpl obj_propuesta = null;
    
    @Expose(serialize = false)
    private Integer id_usuario = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private UsuarioBeanGenSpImpl obj_usuario = null;

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

    public UsuarioBeanGenSpImpl getObj_usuario() {
        return obj_usuario;
    }

    public void setObj_usuario(UsuarioBeanGenSpImpl obj_usuario) {
        this.obj_usuario = obj_usuario;
    }

    public Integer getId_propuesta() {
        return id_propuesta;
    }

    public void setId_propuesta(Integer id_propuesta) {
        this.id_propuesta = id_propuesta;
    }

    public PropuestaBeanGenSpImpl getObj_propuesta() {
        return obj_propuesta;
    }

    public void setObj_propuesta(PropuestaBeanGenSpImpl obj_propuesta) {
        this.obj_propuesta = obj_propuesta;
    }

   
    
}
