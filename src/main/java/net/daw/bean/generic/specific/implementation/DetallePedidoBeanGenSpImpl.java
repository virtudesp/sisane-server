/*
 * Copyright (C) 2014 al038308
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
 * @author al038308
 */
public class DetallePedidoBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    @Expose
    private Integer cantidad = 0;
    @Expose(serialize = false)
    private Integer id_pedido = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private PedidoBeanGenSpImpl obj_pedido = null;
    @Expose(serialize = false)
    private Integer id_producto = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private ProductoBeanGenSpImpl obj_producto = null;  
    private Integer id_usuario = 0;
    @Expose (deserialize = false)
    private UsuarioBeanGenSpImpl obj_usuario = null;   
    private Integer id_tipoproducto = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private TipoproductoBeanGenSpImpl obj_tipoproducto = null;

    public DetallePedidoBeanGenSpImpl() {
    }

    public DetallePedidoBeanGenSpImpl(Integer id) {
        super(id);
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getId_pedido() {
        return id_pedido;
    }

    public void setId_pedido(Integer id_pedido) {
        this.id_pedido = id_pedido;
    }

    public PedidoBeanGenSpImpl getObj_pedido() {
        return obj_pedido;
    }

    public void setObj_pedido(PedidoBeanGenSpImpl obj_pedido) {
        this.obj_pedido = obj_pedido;
    }

    public Integer getId_producto() {
        return id_producto;
    }

    public void setId_producto(Integer id_producto) {
        this.id_producto = id_producto;
    }

    public ProductoBeanGenSpImpl getObj_producto() {
        return obj_producto;
    }

    public void setObj_producto(ProductoBeanGenSpImpl obj_producto) {
        this.obj_producto = obj_producto;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public UsuarioBeanGenSpImpl getObj_usuario() {
        return obj_usuario;
    }

    public void setObj_usuario(UsuarioBeanGenSpImpl obj_usuario) {
        this.obj_usuario = obj_usuario;
    }

    public Integer getId_tipoproducto() {
        return id_tipoproducto;
    }

    public void setId_tipoproducto(Integer id_tipoproducto) {
        this.id_tipoproducto = id_tipoproducto;
    }

    public TipoproductoBeanGenSpImpl getObj_tipoproducto() {
        return obj_tipoproducto;
    }

    public void setObj_tipoproducto(TipoproductoBeanGenSpImpl obj_tipoproducto) {
        this.obj_tipoproducto = obj_tipoproducto;
    }

}
