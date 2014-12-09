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

public class OperacionBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public OperacionBeanGenSpImpl() {
    }

    public OperacionBeanGenSpImpl(Integer id) {
        super(id);
    }

    private String descripcion = "";
    @Expose(serialize = false)
    private Integer id_objeto = 0;
    @Expose(deserialize = false)
    private ObjetoBeanGenSpImpl obj_objeto = null;
    
    @Expose(serialize = false)
    private Integer id_tipooperacion = 0;
    @Expose(deserialize = false)
    private TipooperacionBeanGenSpImpl obj_tipooperacion = null;
   
    

    public Integer getId_tipooperacion() {
        return id_tipooperacion;
    }

    public void setId_tipooperacion(Integer id_tipooperacion) {
        this.id_tipooperacion = id_tipooperacion;
    }

    public TipooperacionBeanGenSpImpl getObj_tipooperacion() {
        return obj_tipooperacion;
    }

    public void setObj_operacion(TipooperacionBeanGenSpImpl obj_tipooperacion) {
        this.obj_tipooperacion = obj_tipooperacion;
    }
    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getId_objeto() {
        return id_objeto;
    }

    public void setId_objeto(Integer id_objeto) {
        this.id_objeto = id_objeto;
    }

    public ObjetoBeanGenSpImpl getObj_objeto() {
        return obj_objeto;
    }

    public void setObj_objeto(ObjetoBeanGenSpImpl obj_objeto) {
        this.obj_objeto = obj_objeto;
    }

}
