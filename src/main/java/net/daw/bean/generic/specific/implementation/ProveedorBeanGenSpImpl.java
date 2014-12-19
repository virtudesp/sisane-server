/*
 * Copyright (C) 2014 vesprada
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
 * @author vesprada
 */
public class ProveedorBeanGenSpImpl extends BeanGenImpl implements BeanInterface{
    private String nia;
    private String nombre;
    private String telefono;
    private String direccion;
    private String email;
    private String web;
    private String fax;
    private String localidad;
//    @Expose(serialize = false)
//    private Integer id_usuario_1 = 0; //id_usuario_1 //importante inicializar a 0 las claves ajenas
//    @Expose(deserialize = false)
//    private UsuarioBeanGenSpImpl obj_usuario_1 = null;
//    @Expose(serialize = false)
//     private Integer id_usuario_2 = 0; //id_usuario_2//importante inicializar a 0 las claves ajenas
//    @Expose(deserialize = false)
//    private UsuarioBeanGenSpImpl obj_usuario_2 = null;
    
    
    public ProveedorBeanGenSpImpl() {
    }

    public ProveedorBeanGenSpImpl(Integer id) {
        super(id);
    }

    public String getNia() {
        return nia;
    }

    public void setNia(String nia) {
        this.nia = nia;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWeb() {
        return web;
    }

    public void setWeb(String web) {
        this.web = web;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }
//    public Integer getId_usuario_1() {
//        return id_usuario_1;
//    }
//
//    public void setId_usuario_1(Integer id_usuario_1) {
//        this.id_usuario_1 = id_usuario_1;
//    }
//
//    public UsuarioBeanGenSpImpl getObj_usuario_1() {
//        return obj_usuario_1;
//    }
//
//    public void setObj_usuario_1(UsuarioBeanGenSpImpl obj_usuario_1) {
//        this.obj_usuario_1 = obj_usuario_1;
//    }
//
//    public Integer getId_usuario_2() {
//        return id_usuario_2;
//    }
//
//    public void setId_usuario_2(Integer id_usuario_2) {
//        this.id_usuario_2 = id_usuario_2;
//    }
//
//    public UsuarioBeanGenSpImpl getObj_usuario_2() {
//        return obj_usuario_2;
//    }
//
//    public void setObj_usuario_2(UsuarioBeanGenSpImpl obj_usuario_2) {
//        this.obj_usuario_2 = obj_usuario_2;
//    }
    
}
