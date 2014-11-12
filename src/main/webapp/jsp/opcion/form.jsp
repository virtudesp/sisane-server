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

<form class="form-horizontal" role="form" action="#" id="opcionForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Valor:</label>
        <div class="col-sm-6">
            <input type="text" id="valor" class="form-control"  name="valor" size="15" placeholder="valor del cuestionario" />
        </div>
    </div>
    
    

    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_pregunta">Pregunta: </label> 
        <div class="col-sm-2">              
            <input class="form-control"  id="obj_pregunta" class="input-mini" name="id_pregunta" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_pregunta_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_pregunta_desc"></label>                     
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
        $('#alta_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        $('#cambio_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        //http://jqueryvalidation.org/documentation/
        $('#opcionForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        valor: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un valor'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El título debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        alta_group: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una fecha de alta'
                                },
                                date: {
                                    format: 'DD/MM/YYYY',
                                    message: 'La fecha de alta no tiene formato DD/MM/YYYY'
                                }
                            }
                        },
                        cambio_group: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una fecha de cambio'
                                },
                                date: {
                                    format: 'DD/MM/YYYY',
                                    message: 'La fecha de cambio no tiene formato DD/MM/YYYY'
                                }
                            }
                        },
                        id_pregunta: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir una pregunta'
                                },
                                integer: {
                                    message: 'El identificador de pregunta debe ser un entero'
                                }
                            }
                        }
                    }
                })
                
                .on('change', '[name="id_pregunta"]', function() {
                    $('#opcionForm').bootstrapValidator('revalidateField', 'id_pregunta');
                })
                ;
        $('#alta_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
            $('#opcionForm').bootstrapValidator('revalidateField', 'alta_group');
        });
        $('#cambio_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
            $('#opcionForm').bootstrapValidator('revalidateField', 'cambio_group');
        });
    });       

    
    
</script>
     