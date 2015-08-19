/*
 * Copyright (C) 2015 rafa
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
import net.daw.bean.group.GroupBeanImpl;
import net.daw.bean.publicinterface.BeanInterface;
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.annotations.SelectSourceMetaInformation;
import net.daw.helper.statics.MetaEnum;

/**
 *
 * @author rafa
 */
@SelectSourceMetaInformation(
        SqlSelect = "select id_usuario, count(id) as numautores from documento  group by id_usuario", //id y 1=1 obligatorios
        Description = "Documento"
)
public class DocumentosautorBean extends BeanGenImpl implements BeanInterface {

    @Expose(serialize = false)
    @MethodMetaInformation(
            UltraShortName = "Usuario",
            ShortName = "Usuario",
            Description = "Identificador de Usuario",
            IsIdForeignKey = true,
            ReferencesTable = "usuario",
            Type = MetaEnum.FieldType.Integer
    )
    private Integer id_usuario = 0; //importante inicializar a 0 las claves ajenas

    @Expose(deserialize = false)
    @MethodMetaInformation(
            UltraShortName = "Usuario",
            ShortName = "Usuario",
            Description = "Referencia al usuario propietario",
            IsObjForeignKey = true,
            ReferencesTable = "usuario",
            MyIdName = "id_usuario",
            MyMetaName = "meta_usuario"
    )
    private GroupBeanImpl obj_usuario = null;

    @Expose
    @MethodMetaInformation(
            UltraShortName = "Ndocs.",
            ShortName = "Nº Docs.",
            Description = "Número de documentos",
            Type = MetaEnum.FieldType.Integer
    )
    private Integer numautores = 0;

    public DocumentosautorBean() {
    }

    public DocumentosautorBean(Integer id) {
        super(id);
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public GroupBeanImpl getObj_usuario() {
        return obj_usuario;
    }

    public void setObj_usuario(GroupBeanImpl obj_usuario) {
        this.obj_usuario = obj_usuario;
    }

    public Integer getNumautores() {
        return numautores;
    }

    public void setNumautores(Integer numautores) {
        this.numautores = numautores;
    }



}
