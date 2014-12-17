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

public class UsuarioBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    @Expose
    private String login = "";
    @Expose
    private String password = "";
    @Expose(serialize = false)
    private Integer id_tipousuario = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private TipousuarioBeanGenSpImpl obj_tipousuario = null;
    @Expose(serialize = false)
    private Integer id_estado = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private EstadoBeanGenSpImpl obj_estado = null;
    @Expose
    private String ciudad = "";
    @Expose
    private String firma = "";
    @Expose
    private String skin = "";

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

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

    public Integer getId_estado() {
        return id_estado;
    }

    public void setId_estado(Integer id_estado) {
        this.id_estado = id_estado;
    }

    public EstadoBeanGenSpImpl getObj_estado() {
        return obj_estado;
    }

    public void setObj_estado(EstadoBeanGenSpImpl obj_estado) {
        this.obj_estado = obj_estado;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getFirma() {
        return firma;
    }

    public void setFirma(String firma) {
        this.firma = firma;
    }

    public String getSkin() {
        return skin;
    }

    public void setSkin(String skin) {
        this.skin = skin;
    }

}
