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

import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import com.google.gson.annotations.Expose;

import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.annotations.TableSourceMetaInformation;

@TableSourceMetaInformation(
        TableName="comentario",
        Description="Comentarios"            
)
public class ComentarioBean extends BeanGenImpl implements BeanInterface {

    @MethodMetaInformation(
            ShortName = "Contenido"
    )
    @Expose
    private String contenido = "";

    @MethodMetaInformation(
            ShortName = "Nº de Propuesta",
            IsIdForeignKey = true,
            ReferencesTable = "propuesta"
    )
    @Expose(serialize = false)
    private Integer id_propuesta = 0; //importante inicializar a 0 las claves ajenas

    @MethodMetaInformation(
            ShortName = "Propuesta",
            IsObjForeignKey = true,
            ReferencesTable = "propuesta"
    )
    @Expose(deserialize = false)
    private PropuestaBean obj_propuesta = null;

    @MethodMetaInformation(
            ShortName = "Usuario",
            IsIdForeignKey = true,
            ReferencesTable = "usuario"
    )
    @Expose(serialize = false)
    private Integer id_usuario = 0; //importante inicializar a 0 las claves ajenas

    @MethodMetaInformation(
            ShortName = "Usuario",
            IsObjForeignKey = true,
            ReferencesTable = "usuario"
    )
    @Expose(deserialize = false)
    private UsuarioBean obj_usuario = null;

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public UsuarioBean getObj_usuario() {
        return obj_usuario;
    }

    public void setObj_usuario(UsuarioBean obj_usuario) {
        this.obj_usuario = obj_usuario;
    }

    public Integer getId_propuesta() {
        return id_propuesta;
    }

    public void setId_propuesta(Integer id_propuesta) {
        this.id_propuesta = id_propuesta;
    }

    public PropuestaBean getObj_propuesta() {
        return obj_propuesta;
    }

    public void setObj_propuesta(PropuestaBean obj_propuesta) {
        this.obj_propuesta = obj_propuesta;
    }

    public ComentarioBean() {
    }

    public ComentarioBean(Integer id) {
        super(id);
    }

}
