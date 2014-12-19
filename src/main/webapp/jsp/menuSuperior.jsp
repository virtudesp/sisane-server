<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>

<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>

<%
    int id_tipousuario = 0, id_usuario = 0;
    UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    if (user != null) {
        id_tipousuario = user.getId_tipousuario();
        id_usuario = user.getId();
    }
%>

<ul class="nav navbar-nav">
    <li><a href="jsp">Inicio</a></li>
    <li><a href="jsp#/usuario">Usuarios</a></li>
    <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Mantenimientos <b class="caret"></b></a>
        <ul class="dropdown-menu">
            <li><a href="jsp#/documento">Documento</a></li>            
            <li><a href="jsp#/cuestionario">Cuestionario</a></li>
            <li><a href="jsp#/pregunta">Pregunta</a></li>
            <li><a href="jsp#/opcion">Opcion</a></li>
            <li><a href="jsp#/proveedor">Proveedor</a></li>
            <li><a href="jsp#/impuesto">Impuesto</a></li>
            <li><a href="jsp#/pedido">Pedido</a></li>
            <li><a href="#">Vacío</a></li>
            <li class="divider"></li>
            <li class="dropdown-header">División</li>
            <li><a href="#">Vacío</a></li>
            <li><a href="#">Vacío</a></li>
            <li class="divider"></li>
            <li class="dropdown-header">Red Social</li>
            <li><a href="jsp#/estado">Estado</a></li>
            <li><a href="jsp#/publicacion">Publicacion</a></li>
            <li><a href="jsp#/estado">Estado</a></li>
            <li><a href="jsp#/amigo">Amigo</a></li>
            <li class="divider"></li>
            <li class="dropdown-header">Facturacion</li>
            <li><a href="jsp#/pedido">Pedido</a></li>
            <li><a href="jsp#/detalle_pedido">Detalle Pedido</a></li>
            <li><a href="jsp#/impuesto">Impuesto</a></li>
            <li><a href="jsp#/proveedor">Proveedor</a></li>
            <li class="divider"></li>
            <li class="dropdown-header">Propuestas y votaciones</li>
            <li><a href="jsp#/tipopropuesta">Tipo propuesta</a></li>
            <li><a href="jsp#/Propuesta">Propuesta</a></li>            
        </ul>
    </li>    
</ul>



