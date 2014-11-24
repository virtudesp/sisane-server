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

<form class="form-horizontal" role="form" action="#" id="respuestaForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
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
        <label class="col-sm-2 control-label" for="obj_pregunta_id">Pregunta: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_pregunta_id" class="input-mini" name="id_pregunta" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_pregunta_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_usuario_desc"></label>                     
    </div>
        <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_opcion_id">Respuesta: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_opcion_id" class="input-mini" name="id_opcion" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_opcion_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_opcion_desc" id="obj_opcion_desc"></label>                     
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
        $('#respuestaForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                       
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
                        id_opcion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tipo de opcion'
                                },
                                integer: {
                                    message: 'El identificador de tipo de opcion debe ser un entero'
                                }
                            }
                        },
                        id_pregunta: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tipo de pregunta'
                                },
                                integer: {
                                    message: 'El identificador de tipo de pregunta debe ser un entero'
                                }
                            }
                        },
                        etiquetas: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una etiqueta'
                                },
                                stringLength: {
                                    max: 100,
                                    message: 'La longitud de las etiquetas debe ser de 100 caracteres como mucho'
                                }
                            }
                        }

                    }
                })

                .on('change', '[name="id_cuestionario"]', function() {
                    $('#respuestaForm').bootstrapValidator('revalidateField', 'id_cuestionario');
                })
                ;
        $('#alta_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
            $('#respuestaForm').bootstrapValidator('revalidateField', 'alta_group');
        });
        $('#cambio_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
            $('#respuestaForm').bootstrapValidator('revalidateField', 'cambio_group');
        });
    });       

    
    
</script>
     