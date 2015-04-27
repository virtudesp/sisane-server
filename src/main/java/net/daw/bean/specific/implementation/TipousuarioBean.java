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
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.annotations.TableSourceMetaInformation;
import net.daw.helper.statics.MetaEnum;

@TableSourceMetaInformation(
        TableName = "tipousuario",
        Description = "Tipos de usuarios en el sistema"
)
public class TipousuarioBean extends BeanGenImpl implements BeanInterface {
    @Expose
    @MethodMetaInformation(
            UltraShortName = "Desc.",
            ShortName = "Descripción",
            Description = "Descripción del tipo de usuario",
            Type = MetaEnum.FieldType.String,
            MinLenght = 0,
            MaxLenght = 255,
            DefaultValue = "Sin tipo"
    )
    private String descripcion = "";

    public TipousuarioBean() {

    }

    public TipousuarioBean(Integer id) {
        super(id);
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
