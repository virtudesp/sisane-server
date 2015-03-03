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
import net.daw.helper.annotations.TableSourceMetaInformation;
import net.daw.helper.annotations.MethodMetaInformation;

/**
 *
 * @author rafa
 */
@TableSourceMetaInformation(
        TableName="producto",
        Description="Productos"            
)
public class ProductoBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    @Expose
    @MethodMetaInformation(ShortName = "Cód.")
    private String codigo = "";

    @Expose
    @MethodMetaInformation(ShortName = "Descripción")
    private String descripcion = "";

    @Expose
    @MethodMetaInformation(ShortName = "Precio")
    private Double precio = 0.0;

    @Expose(serialize = false)
    @MethodMetaInformation(
            UltraShortName = "Tipo",
            ShortName = "Tipo de producto",
            IsIdForeignKey = true,
            ReferencesTable = "tipoproducto"
    )
    private Integer id_tipoproducto = 0; //importante inicializar a 0 las claves ajenas

    @Expose(deserialize = false)
    @MethodMetaInformation(
            ShortName = "Tipo de producto",
            IsObjForeignKey = true,
            ReferencesTable = "tipoproducto"
    )
    private TipoproductoBeanGenSpImpl obj_tipoproducto = null;

    @Expose(serialize = false)
    @MethodMetaInformation(
            UltraShortName = "Prov.",
            ShortName = "Proveedor",
            IsIdForeignKey = true,
            ReferencesTable = "proveedor"
    )    
    private Integer id_proveedor = 0; //importante inicializar a 0 las claves ajenas

    @Expose(deserialize = false)
    @MethodMetaInformation(
            ShortName = "Proveedor",
            IsObjForeignKey = true,
            ReferencesTable = "proveedor"
    )    
    private ProveedorBeanGenSpImpl obj_proveedor = null;

    @Expose
    @MethodMetaInformation(
            ShortName = "Ruta", 
            IsPathToObject = true
    )
    private String path;

    public ProductoBeanGenSpImpl() {
    }

    public ProductoBeanGenSpImpl(Integer id) {
        super(id);
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    /**
     * @return the id_tipoproducto
     */
    public Integer getId_tipoproducto() {
        return id_tipoproducto;
    }

    /**
     * @param id_tipoproducto the id_tipoproducto to set
     */
    public void setId_tipoproducto(Integer id_tipoproducto) {
        this.id_tipoproducto = id_tipoproducto;
    }

    /**
     * @return the obj_producto
     */
    public TipoproductoBeanGenSpImpl getObj_tipoproducto() {
        return obj_tipoproducto;
    }

    /**
     * @param obj_producto the obj_producto to set
     */
    public void setObj_tipoproducto(TipoproductoBeanGenSpImpl obj_tipoproducto) {
        this.obj_tipoproducto = obj_tipoproducto;
    }

    public Integer getId_proveedor() {
        return id_proveedor;
    }

    public void setId_proveedor(Integer id_proveedor) {
        this.id_proveedor = id_proveedor;
    }

    public ProveedorBeanGenSpImpl getObj_proveedor() {
        return obj_proveedor;
    }

    public void setObj_proveedor(ProveedorBeanGenSpImpl obj_proveedor) {
        this.obj_proveedor = obj_proveedor;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

}
