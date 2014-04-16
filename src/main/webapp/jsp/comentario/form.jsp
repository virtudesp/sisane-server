<%-- 
    Document   : form
    Created on : 29-ene-2014, 12:11:54
    Author     : al037684
--%>

<%@page import="java.text.SimpleDateFormat"%>

<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>Comentario</h2>

    <div class="control-group">
        <label class="control-label" for="inputId">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>

    <div class="control-group">
        <label class="control-label"  for="inputTitulo">Titulo: </label>
        <div class="controls">
            <input type="text" id="titulo" name="titulo" size="15" placeholder="titulo" />
        </div>
    </div>

    <div class="control-group">
        <label class="control-label"  for="inputContenido">Contenido: </label>
        <div class="controls">
            <input type="text" id="contenido" name="contenido" size="15" placeholder="contenido" />
        </div>
    </div>

    <div class="control-group">
        <label class="control-label"  for="inputFecha">Fecha: </label>
        <div class="controls">
            <input type="text" id="fecha" name="fecha" placeholder="fecha" />
        </div>
    </div>
    <script>$("#fecha").datepicker({
            showOn: 'both',
            buttonImageOnly: true,
            changeYear: true,
            numberOfMonths: 1});
    </script>

    <div class="control-group">
        <label class="control-label" for="id_usuario">Id usuario: </label> 
        <div class="controls">           
            <input readonly="true" id="id_usuario" class="input-mini"
                   name="id_usuario" type="text" size="5" maxlength="5" />  
            <a class="btn btn-mini" id="id_usuario_button" href="#"><i class="glyphicon-search"></i></a>
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <span id="id_usuario_desc" class="alert alert-success"></span>                                       
        </div>
    </div> 

    <div class="control-group">
        <label class="control-label" for="id_documento">Id documento: </label> 
        <div class="controls">           
            <input readonly="true" id="id_documento" class="input-mini"
                   name="id_documento" type="text" size="5" maxlength="5" />  
            <a class="btn btn-mini" id="id_documento_button" href="#"><i class="glyphicon-search"></i></a>
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <span id="id_documento_desc" class="alert alert-success"></span>                                       
        </div>
    </div> 


    <div class="control-group">
        <div class="controls">
            <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
        </div>
    </div>
</form>

<script>
    $(function() {
        $("#datepicker").datepicker();
    });
</script>