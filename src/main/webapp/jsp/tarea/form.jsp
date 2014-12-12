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

<form class="form-horizontal" role="form" action="#" id="temaForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="descripcion">Titulo de la tarea:</label>
        <div class="col-sm-6">
            <input type="text" id="descripcion" class="form-control"  name="descripcion" size="15" placeholder="Título de la tarea" />
        </div>
    </div>
    
     <div class="form-group">
        <label class="col-sm-2 control-label" for="fechaentrega">Fecha entrega:</label> 
        <div class="col-sm-3">           
            <div class='input-group date' id='fechaentrega'>
                <input type='text' class="form-control" id='fechaentrega' name="fechaentrega" placeholder="Fechaentrega" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>
    
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_usuario_id">Usuario: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_usuario_id" class="input-mini" name="id_usuario" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_usuario_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_usuario_desc"></label>                     
    </div>
    
     <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_tipotarea_id">Tipo tarea: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_tipotarea_id" class="input-mini" name="id_tipotarea" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_tipotarea_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_tipotarea_desc" id="obj_tipotarea_desc"></label>                     
    </div>
    
     <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_estadotarea_id">Estado tarea: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_estadotarea_id" class="input-mini" name="id_estadotarea" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_estadotarea_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_estadotarea_desc" id="obj_estadotarea_desc"></label>                     
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
        $('#fechaentrega').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        //http://jqueryvalidation.org/documentation/
        $('#temaForm')
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
                                    message: 'Debe introducir un descripcion de la tarea'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'La descripcion de la tarea debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                         fechaentrega: {
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
                         id_estadotarea: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tipo tarea'
                                },
                                integer: {
                                    message: 'El identificador de estado tarea debe ser un entero'
                                }
                            }
                        },
                        id_tipotarea: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tipo de documento'
                                },
                                integer: {
                                    message: 'El identificador de tipo tarea  debe ser un entero'
                                }
                            }
                        }
                    }
                })
                .on('change', '[name="id_usuario"]', function() {
                    $('#temaForm').bootstrapValidator('revalidateField', 'id_usuario');
                })

                .on('change', '[name="id_tipotema"]', function() {
                    $('#temaForm').bootstrapValidator('revalidateField', 'id_tipotema');
                })
                ;
                 .on('change', '[name="id_estadotarea"]', function() {
                    $('#temaForm').bootstrapValidator('revalidateField', 'id_estadotarea');
                })
                ;
    });       

    
    
</script>
     