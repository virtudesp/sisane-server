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
<%UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");%>
<%
        int id = user.getId();
%>

<form class="form-horizontal" role="form" action="#" id="propuestaForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Descripcion:</label>
        <div class="col-sm-6">
            <input type="text" id="descripcion" class="form-control"  name="descripcion" size="45" placeholder="descripcion" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="fecha_group">Fecha:</label> 
        <div class="col-sm-3">           
            <div class='input-group date' id='fecha_group'>
                <input type='text' class="form-control" id='fecha' name="fecha_group" placeholder="Fecha" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="puntuacion">Puntuacion:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="puntuacion" name="puntuacion" size="15" placeholder="puntuacion" />
        </div>
    </div>

    
    
    

    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_tipopropuesta_id">Tipo de propuesta: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_tipopropuesta_id" class="input-mini" name="id_tipopropuesta" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_tipopropuesta_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_tipopropuesta_desc" id="obj_tipopropuesta_desc"></label>                     
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_usuario_id">Usuario: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  value="<%=id%>"  class="form-control"  id="obj_usuario_id" class="input-mini" name="id_usuario" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_usuario_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_usuario_desc"></label>                     
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
        $('#fecha_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        //http://jqueryvalidation.org/documentation/
        $('#propuestaForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        descripcion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una descripcion'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'La descripcion debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        fecha_group: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una fecha'
                                },
                                date: {
                                    format: 'DD/MM/YYYY',
                                    message: 'La fecha no tiene un formato DD/MM/YYYY'
                                }
                            }
                        },
                        puntuacion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una puntuacion'
                                },
                                integer: {
                                    message: 'El valor de la puntuacion debe ser un entero'
                                },
                                between: {
                                    min: 1,
                                    max: 10,
                                    message: 'La puntuacion debe ser 1 como minimo y 10 como maximo'
                                }
                            }

                        },
                        id_usuario: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un usuario'
                                },
                                integer: {
                                    message: 'El identificador de usuario debe ser un entero'
                                }
                            }
                        },
                        id_tipopropuesta: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tipo de propuesta'
                                },
                                integer: {
                                    message: 'El identificador del tipo de propuesta debe ser un entero'
                                }
                            }
                        }
                        
                      

                    }
                })
                .on('change', '[name="id_usuario"]', function() {
                    $('#propuestaForm').bootstrapValidator('revalidateField', 'id_usuario');
                })
                .on('change', '[name="id_tipopropuesta"]', function() {
                    $('#propuestaForm').bootstrapValidator('revalidateField', 'id_tipopropuesta');
                })
                ;
                
        $('#fecha_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
            $('#propuestaForm').bootstrapValidator('revalidateField', 'fecha_group');
        });
        
    });       

    
    
</script>
