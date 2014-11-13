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

<form class="form-horizontal" role="form" action="#" id="clienteForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
   
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="nombre">Nombre:</label>
        <div class="col-sm-6">
            <input type="text" id="nombre" class="form-control"  name="nombre" size="15" placeholder="nombre" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="ape1">Primer apellido:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="ape1" name="ape1" size="15" placeholder="Primer apellido" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="ape2">Segundo apellido:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="ape2" name="ape2" size="15" placeholder="Segundo apellido" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="email">Email:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="email" name="email" size="15" placeholder="email" />
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
        $('#clienteForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                    
                        nombre: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un nombre'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El nombre debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        ape1: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un primer apellido'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El primer apellido debe tener como máximo 255 caracteres'
                                }
                                
                            }
                        },
                         ape2: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un segundo apellido'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El segundo apellido debe tener como máximo 255 caracteres'
                                }
                                
                            }
                        },
                         email: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un email'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El email debe tener como máximo 255 caracteres'
                                }
                                
                            }
                        },
                           
                                
                            
                        

                    }
                });
       
        });
         

    
    
</script>
     