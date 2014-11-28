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

public class EntregaBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

     public EntregaBeanGenSpImpl() {
    }

    public EntregaBeanGenSpImpl(Integer id) {
        super(id);
    }
    
    
    
    @Expose
    private Integer nota;
    @Expose
    private Date fecha = new Date();
    @Expose(serialize = false)
    private Integer id_documento = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private DocumentoBeanGenSpImpl obj_documento = null;
    @Expose(serialize = false)
    private Integer id_actividad = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private ActividadBeanGenSpImpl obj_actividad = null;

   
    



    public Integer getNota() {
        return nota;
    }

    public void setNota(Integer nota) {
        this.nota = nota;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Integer getId_documento() {
        return id_documento;
    }

    public void setId_documento(Integer id_documento) {
        this.id_documento = id_documento;
    }

    public DocumentoBeanGenSpImpl getObj_documento() {
        return obj_documento;
    }

    public void setObj_documento(DocumentoBeanGenSpImpl obj_documento) {
        this.obj_documento = obj_documento;
    }

    public Integer getId_actividad() {
        return id_actividad;
    }

    public void setId_actividad(Integer id_actividad) {
        this.id_actividad = id_actividad;
    }

    public ActividadBeanGenSpImpl getObj_actividad() {
        return obj_actividad;
    }

    public void setObj_actividad(ActividadBeanGenSpImpl obj_actividad) {
        this.obj_actividad = obj_actividad;
    }
    
    
}
