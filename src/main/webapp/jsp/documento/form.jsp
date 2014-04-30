<%-- 
    Document   : form
    Created on : Jan 21, 2013, 10:24:17 AM
    Author     : Alvaro
--%>
<form class="form-horizontal" role="form" action="#" id="formulario" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" class="form-control" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Titulo:</label>
        <div class="col-sm-6">
            <input type="text" class="form-control" id="titulo" name="titulo" size="15" placeholder="titulo" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="contenido">Contenido:</label>
        <div class="col-sm-9">
            <textarea type="text"  class="form-control pull-left"  id="contenido" name="contenido" size="15" placeholder="contenido"></textarea>
        </div>
        <div class="col-sm-1">
            <a class="btn btn-primary btn-sm" id="contenido_button" href="#"><i class="glyphicon glyphicon-pencil"></i></a>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="alta">Alta:</label> 
        <div class="col-sm-2">
            <input id="alta"  class="form-control"  name="alta" type="text" size="10" maxlength="50" value="" placeholder="Fecha de alta"/> 
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="cambio">Cambio:</label> 
        <div class="col-sm-2">
            <input id="cambio"  class="form-control"  name="cambio" type="text" size="10" maxlength="50" value="" placeholder="Fecha de la modificación"/> 
        </div>
    </div>    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="hits">Hits:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="hits" name="hits" size="15" placeholder="hits" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id_usuario">Usuario: </label> 
        <div class="col-sm-1">              
            <input readonly="true"  class="form-control"  id="id_usuario" class="input-mini" name="id_usuario" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="id_usuario_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-8" for="id_usuario" id="id_usuario_desc"></label>                     
    </div>
    
    
    
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id_tipodocumento">Tipo de documento: </label> 
        <div class="col-sm-1">              
            <input readonly="true"  class="form-control"  id="id_tipodocumento" class="input-mini" name="id_tipodocumento" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="id_tipodocumento_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-8" for="id_usuario" id="id_tipodocumento_desc"></label>                     
    </div>
    
    
    
    
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="etiquetas">Etiquetas:</label>
        <div class="col-sm-10">
            <input type="text"  class="form-control"  id="etiquetas" name="etiquetas" size="15" placeholder="etiquetas" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="publicado">Publicado:</label>
        <div class="col-sm-1">
            <input type="checkbox" id="publicado" name="publicado" value="true" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="portada">Portada:</label>
        <div class="col-sm-1">
            <input type="checkbox" id="portada" name="portada" value="true" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="destacado">Destacado:</label>
        <div class="col-sm-1">
            <input type="checkbox" id="portada" name="destacado" value="true" />
        </div>
    </div>           
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit"  class="btn btn-primary"  id="submitForm" >Submit</button>
            <button type="reset"  class="btn btn-danger"  id="resetForm" >Reset</button>
        </div>
    </div>
</form>

<script>
    $("#alta").datepicker({
        showOn: 'both',
        buttonImageOnly: true,
        changeYear: true,
        numberOfMonths: 1
    });
    $("#cambio").datepicker({
        showOn: 'both',
        buttonImageOnly: true,
        changeYear: true,
        numberOfMonths: 1
    });
    $(function() {
        $("#datepicker").datepicker();
    });
    //http://jqueryvalidation.org/documentation/
    $('#formulario').validate({
        rules: {
            titulo: {
                required: true,
                maxlength: 255
            },
            contenido: {
                required: true
            },
            alta: {
                required: true
            },
            cambio: {
                required: true
            },
            hits: {
                required: true,
                maxlength: 6,
                digits: true
            },
            id_usuario: {
                required: true,
                digits: true
            },
            etiquetas: {
                required: true,
                maxlength: 255
            },
            publicado: {
                required: false
            },
            portada: {
                required: false
            }
        },
        messages: {
            titulo: {
                required: "Introduce un titulo",
                maxlength: "Tiene que ser menos de 255 caracteres"
            },
            contenido: {
                required: "Introduce contenido"
            },
            alta: {
                required: "Introduce una fecha de alta"
            },
            cambio: {
                required: "Introduce una fecha de modificación"
            },
            hits: {
                required: "Introduce una nota",
                maxlength: "Tiene que ser menos de 6 caracteres",
                digits: "Tiene que ser un numero entero"
            },
            id_usuario: {
                required: "Introduce un usuario",
                digits: "El id del usuario tiene que ser un entero"
            },
            etiquetas: {
                required: "Introduce una/s etiqueta/s",
                maxlength: "Tiene que ser menos de 255 caracteres"
            }

        },
        highlight: function(element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function(element) {
            element
                    .text('OK!').addClass('valid')
                    .closest('.control-group').removeClass('error').addClass('success');
        }
    });
</script>        