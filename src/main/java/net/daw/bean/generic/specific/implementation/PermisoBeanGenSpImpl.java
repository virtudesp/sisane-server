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

public class PermisoBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public PermisoBeanGenSpImpl() {
    }

    public PermisoBeanGenSpImpl(Integer id) {
        super(id);
    }

   
    @Expose(serialize = false)
    private Integer id_tipousuario = 0 ;
    @Expose(deserialize = false)
    private TipousuarioBeanGenSpImpl obj_tipousuario= null;
     @Expose(serialize = false)
    private Integer id_tipooperacion = 0 ;
    @Expose(deserialize = false)
    private TipooperacionBeanGenSpImpl obj_tipooperacion = null;
    private Boolean permitido = false;

    public Integer getId_tipousuario() {
        return id_tipousuario;
    }

    public void setId_tipousuario(Integer id_tipousuario) {
        this.id_tipousuario = id_tipousuario;
    }

    public TipousuarioBeanGenSpImpl getObj_tipousuario() {
        return obj_tipousuario;
    }

    public void setObj_tipousuario(TipousuarioBeanGenSpImpl obj_tipousuario) {
        this.obj_tipousuario = obj_tipousuario;
    }

    public Integer getId_tipooperacion() {
        return id_tipooperacion;
    }

    public void setId_tipooperacion(Integer id_tipooperacion) {
        this.id_tipooperacion = id_tipooperacion;
    }

    public TipooperacionBeanGenSpImpl getObj_tipooperacion() {
        return obj_tipooperacion;
    }

    public void setObj_tipooperacion(TipooperacionBeanGenSpImpl obj_tipooperacion) {
        this.obj_tipooperacion = obj_tipooperacion;
    }
    
    public Boolean getPermitido() {
        return permitido;
    }

    public void setPermitido(Boolean permitido) {
        this.permitido = permitido;
    }

   

  
}
