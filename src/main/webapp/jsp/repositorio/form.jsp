<%-- 
    Document   : form
    Created on : 27-ene-2014, 12:01:33
    Author     : al037431
--%>

<%@page import="java.text.SimpleDateFormat"%>
<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <fieldset>

        <div class="control-group">
            <label class="control-label" for="id">Id: </label>
            <div class="controls">
                <input id="id" name="id" type="text" size="30" maxlength="50" />
            </div>
        </div>        

        <div class="control-group">
            <label class="control-label" for="titulo">Titulo: </label>
            <div class="controls">
                <input id="titulo" name="titulo" type="text" size="30"  />
            </div>
        </div>   

        <div class="control-group">
            <label class="control-label" for="contenido">Contenido: </label>
            <div class="controls">
                <input id="contenido" name="contenido" type="text" size="30"  />
            </div>
        </div>   




        <div class="control-group">
            <label class="control-label" for="id_usuario">Usuario: </label> 
            <div class="controls">           
                <input readonly="true" id="id_usuario" class="input-mini"
                       name="id_usuario" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_usuario_button" href="#"><i class="icon-search"></i></a>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <span id="id_usuario_desc" class="alert alert-success"></span>                                       
            </div>
        </div> 

        <div class="control-group">
            <label class="control-label" for="id_lenguaje">Lenguaje: </label> 
            <div class="controls">                
                <input readonly="true" id="id_lenguaje" class="input-mini"
                       name="id_lenguaje" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_lenguaje_button" href="#"><i class="icon-search"></i></a>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <span id="id_lenguaje_desc" class="alert alert-success"></span>                                       
            </div>
        </div> 

        <div class="control-group">
            <label class="control-label" for="id_documento">Documento: </label> 
            <div class="controls">                
                <input readonly="true" id="id_documento" class="input-mini"
                       name="id_documento" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_documento_button" href="#"><i class="icon-search"></i></a>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <span id="id_documento_desc" class="alert alert-success"></span>                                       
            </div>
        </div> 





        <div class="control-group">
            <label class="control-label" for="descripcion">Fecha: </label> 
            <div class="controls">
                <input id="fecha" name="fecha" type="text" size="10" maxlength="50" value="" /> 
            </div>
        </div>
        <script>$("#fecha").datepicker({
                showOn: 'both',
                buttonImageOnly: true,
                changeYear: true,
                numberOfMonths: 1});
        </script>

        <div class="control-group">
            <div class="controls">
                <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
            </div>
        </div>
    </fieldset>
</form>
<script>
    $(function() {
        $("#datepicker").datepicker();
    });
</script>