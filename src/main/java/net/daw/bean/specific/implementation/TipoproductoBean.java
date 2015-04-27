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
package net.daw.bean.specific.implementation;

import com.google.gson.annotations.Expose;
import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import net.daw.helper.annotations.TableSourceMetaInformation;

@TableSourceMetaInformation(
        TableName="tipoproducto",
        Description="Tipos de producto"            
)
public class TipoproductoBean extends BeanGenImpl implements BeanInterface {

    private String descripcion = "";
    @Expose(serialize = false)
    private Integer id_impuesto = 0;
    @Expose(deserialize = false)
    private ImpuestoBean obj_impuesto = null;

    public TipoproductoBean() {

    }

    public TipoproductoBean(Integer id) {
        super(id);
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getId_impuesto() {
        return id_impuesto;
    }

    public void setId_impuesto(Integer id_impuesto) {
        this.id_impuesto = id_impuesto;
    }

    public ImpuestoBean getObj_impuesto() {
        return obj_impuesto;
    }

    public void setObj_impuesto(ImpuestoBean obj_impuesto) {
        this.obj_impuesto = obj_impuesto;
    }

    
    
}
