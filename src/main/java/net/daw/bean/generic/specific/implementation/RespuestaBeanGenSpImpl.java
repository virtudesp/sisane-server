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

public class RespuestaBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public RespuestaBeanGenSpImpl() {
    }

    public RespuestaBeanGenSpImpl(Integer id) {
        super(id);
    }

   
    @Expose(serialize = false)
    private Integer id_usuario = 0 ;
    @Expose(deserialize = false)
    private UsuarioBeanGenSpImpl obj_usuario= null;
     @Expose(serialize = false)
    private Integer id_pregunta = 0 ;
    @Expose(deserialize = false)
    private PreguntaBeanGenSpImpl obj_pregunta = null;
     @Expose(serialize = false)
    private Integer id_opcion = 0 ;
    @Expose(deserialize = false)
    private OpcionBeanGenSpImpl obj_opcion = null;

   

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

    public Integer getId_pregunta() {
        return id_pregunta;
    }

    public void setId_pregunta(Integer id_pregunta) {
        this.id_pregunta = id_pregunta;
    }

    public PreguntaBeanGenSpImpl getObj_pregunta() {
        return obj_pregunta;
    }

    public void setObj_pregunta(PreguntaBeanGenSpImpl obj_pregunta) {
        this.obj_pregunta = obj_pregunta;
    }

    public Integer getId_opcion() {
        return id_opcion;
    }

    public void setId_opcion(Integer id_opcion) {
        this.id_opcion = id_opcion;
    }

    public OpcionBeanGenSpImpl getObj_opcion() {
        return obj_opcion;
    }

    public void setObj_opcion(OpcionBeanGenSpImpl obj_opcion) {
        this.obj_opcion = obj_opcion;
    }
}
