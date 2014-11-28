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

public class TipooperacionBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public TipooperacionBeanGenSpImpl() {
    }

    public TipooperacionBeanGenSpImpl(Integer id) {
        super(id);
    }

    @Expose(serialize = false)
    private Integer id_operacion = 0;
    @Expose(deserialize = false)
    private OperacionBeanGenSpImpl obj_operacion = null;
   
    

    public Integer getId_operacion() {
        return id_operacion;
    }

    public void setId_operacion(Integer id_operacion) {
        this.id_operacion = id_operacion;
    }

    public OperacionBeanGenSpImpl getObj_operacion() {
        return obj_operacion;
    }

    public void setObj_operacion(OperacionBeanGenSpImpl obj_operacion) {
        this.obj_operacion = obj_operacion;
    }

  


}
