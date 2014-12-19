/*
 * Copyright (C) 2014 a021008858z
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
 * @author a021008858z
 */
public class AmistadBeanGenSpImpl extends BeanGenImpl implements BeanInterface {
    
    @Expose(serialize = false)
    private Integer id_usuario_1 = 0; //id_usuario_1 //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private UsuarioBeanGenSpImpl obj_usuario_1 = null;
    @Expose(serialize = false)
     private Integer id_usuario_2 = 0; //id_usuario_2//importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private UsuarioBeanGenSpImpl obj_usuario_2 = null;
 
    public AmistadBeanGenSpImpl(){ 
        
    }
    public AmistadBeanGenSpImpl(int id){
        super(id);
    }

    public Integer getId_usuario_1() {
        return id_usuario_1;
    }

    public void setId_usuario_1(Integer id_usuario_1) {
        this.id_usuario_1 = id_usuario_1;
    }

    public UsuarioBeanGenSpImpl getObj_usuario_1() {
        return obj_usuario_1;
    }

    public void setObj_usuario_1(UsuarioBeanGenSpImpl obj_usuario_1) {
        this.obj_usuario_1 = obj_usuario_1;
    }

    public Integer getId_usuario_2() {
        return id_usuario_2;
    }

    public void setId_usuario_2(Integer id_usuario_2) {
        this.id_usuario_2 = id_usuario_2;
    }

    public UsuarioBeanGenSpImpl getObj_usuario_2() {
        return obj_usuario_2;
    }

    public void setObj_usuario_2(UsuarioBeanGenSpImpl obj_usuario_2) {
        this.obj_usuario_2 = obj_usuario_2;
    }
    
   
    
}

