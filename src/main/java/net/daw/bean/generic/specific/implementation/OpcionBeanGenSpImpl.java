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

import com.google.gson.annotations.Expose;
import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;

/**
 *
 * @author rafa
 */
public class OpcionBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    @Expose
    private String valor = "";
    @Expose(serialize = false)
    private Integer id_pregunta = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private PreguntaBeanGenSpImpl obj_pregunta = null; // CAMBIAR POR PREGUNTA
    
    public OpcionBeanGenSpImpl() {
    }

    public OpcionBeanGenSpImpl(Integer id) {
        super(id);
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }
    
    /**
     * @return the id_pregunta
     */
    public Integer getId_pregunta() {
        return id_pregunta;
    }
    /**
     * @param id_pregunta the id_tipoproducto to set
     */
    public void setId_pregunta(Integer id_pregunta) {
        this.id_pregunta = id_pregunta;
    }
    /**
     * @return the obj_pregunta
     */
    public PreguntaBeanGenSpImpl getObj_pregunta() {
        return obj_pregunta;
    }
    /**
     * @param obj_pregunta the obj_producto to set
     */
    public void setObj_pregunta(PreguntaBeanGenSpImpl obj_pregunta) {
        this.obj_pregunta = obj_pregunta;
    }
}
