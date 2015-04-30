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
import net.daw.helper.statics.MetaEnum;

@TableSourceMetaInformation(
        TableName = "tipodocumento",
        Description = "Tipos de documento"
)
public class TipodocumentoBean extends BeanGenImpl implements BeanInterface {

    @Expose
    @MethodMetaInformation(
            UltraShortName = "Desc.",
            ShortName = "Descripción",
            Description = "Descripción del tipo de documento",
            Type = MetaEnum.FieldType.String,
            MinLength = 0,
            MaxLength = 255,
            DefaultValue = "Sin tipo"
    )
    private String descripcion = "";
    @Expose
    @MethodMetaInformation(
            UltraShortName = "¿Priv?",
            ShortName = "¿Privado?",
            Description = "¿El documento es privado?",
            Type = MetaEnum.FieldType.Boolean,
            DefaultValue = "0"
    )
    private Boolean privado = false;

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Boolean getPrivado() {
        return privado;
    }

    public void setPrivado(Boolean privado) {
        this.privado = privado;
    }

}
