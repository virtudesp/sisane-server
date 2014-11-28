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

<form class="form-horizontal" role="form" action="#" id="detalle_pedidoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="cantidad">Cantidad:</label>
        <div class="col-sm-6">
            <input type="text" id="cantidad" class="form-control"  name="cantidad" size="15" placeholder="titulo" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="pedido">Pedido:</label>
        <div class="col-sm-6">
            <input type="text" id="pedido" class="form-control"  name="pedido" size="15" placeholder="titulo" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Producto:</label>
        <div class="col-sm-6">
            <input type="text" id="titulo" class="form-control"  name="titulo" size="15" placeholder="titulo" />
        </div>
    </div>


    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" id="submitForm">Guardar</button>
        </div>
    </div>

</form>


<script type="text/javascript">

    $(document).ready(function() {

    //http://jqueryvalidation.org/documentation/
    $('#detalle_pedidoForm')
            .bootstrapValidator({
            container: '#messages',
                    feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                            invalid: 'glyphicon glyphicon-remove',
                            validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                    cantidad: {
                    validators: {
                    notEmpty: {
                    message: 'Debe introducir una cantidad'
                    },
                            stringLength: {
                            max: 255,
                                    message: 'El título debe tener como máximo 255 caracteres'
                            }
                    }
                    },
                            id_pedido: {
                            validators: {
                            notEmpty: {
                            message: 'Debe introducir el numero del pedido'
                            },
                                    stringLength: {
                                    max: 255,
                                            message: 'El numero de pedido debe tener como máximo 255 caracteres'
                                    }
                            }
                            },
                            id_producto: {
                            validators: {
                            notEmpty: {
                            message: 'Debe introducir el numero del producto'
                            },
                                    stringLength: {
                                    max: 255,
                                            message: 'El producto debe tener como máximo 255 caracteres'
                                    }
                            }
                            }

                    }

            });



</script>
