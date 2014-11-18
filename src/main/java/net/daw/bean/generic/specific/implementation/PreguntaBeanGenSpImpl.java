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

public class PreguntaBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public PreguntaBeanGenSpImpl() {
    }

    public PreguntaBeanGenSpImpl(Integer id) {
        super(id);
    }

   @Expose
    private String descripcion = "";
    //private String presentacion = "";
    @Expose(serialize = false)
    private Integer id_cuestionario = 0 ;
    @Expose(deserialize = false)
    private CuestionarioBeanGenSpImpl obj_cuestionario = null;

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

    public CuestionarioBeanGenSpImpl getObj_cuestionario() {
        return obj_cuestionario;
    }

    public void setObj_cuestionario(CuestionarioBeanGenSpImpl obj_cuestionario) {
        this.obj_cuestionario = obj_cuestionario;
    }

   
}
