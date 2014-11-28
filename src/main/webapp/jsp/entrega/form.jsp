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

<form class="form-horizontal" role="form" action="#" id="entregaForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="nota">Nota:</label>
        <div class="col-sm-6">
            <input type="text" id="nota" class="form-control"  name="nota" size="15" placeholder="nota" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="fecha_group">Fecha:</label> 
        <div class="col-sm-3">           
            <div class='input-group date' id='fecha_group'>
                <input type='text' class="form-control" id='fecha_group' name="fecha_group" placeholder="Fecha" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_documento_id">Documento: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_documento_id" class="input-mini" name="id_documento" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_documento_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_documento_desc" id="obj_documento_desc"></label>                     
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_actividad_id">Actividad: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_actividad_id" class="input-mini" name="id_actividad" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_actividad_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_actividad_desc" id="obj_actividad_desc"></label>                     
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
        $('#documentoForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        nota: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una nota'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'La nota debe tener como máximo 255 caracteres'
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
                                    message: 'La fecha no tiene formato DD/MM/YYYY'
                                }
                            }
                        },
                        id_documento: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un documento'
                                },
                                integer: {
                                    message: 'El identificador de documento debe ser un entero'
                                }
                            }
                        },
                        id_actividad: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir una actividad'
                                },
                                integer: {
                                    message: 'El identificador de actividad debe ser un entero'
                                }
                            }
                        }

                    }
                })
                .on('change', '[name="id_documento"]', function() {
                    $('#documentoForm').bootstrapValidator('revalidateField', 'id_documento');
                })

                .on('change', '[name="id_actividad"]', function() {
                    $('#documentoForm').bootstrapValidator('revalidateField', 'id_actividad');
                })
                ;
        $('#fecha_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
            $('#entregaForm').bootstrapValidator('revalidateField', 'fecha_group');
        });
        
    });       

    
    
</script>
     