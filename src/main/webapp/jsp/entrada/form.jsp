<%-- 
    Document   : form
    Created on : Jan 21, 2013, 10:24:17 AM
    Author     : Jose
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
            <label class="control-label"  for="inputTitulo">Título:</label>
            <div class="controls">
                <input type="text" id="titulo" name="titulo" size="15"placeholder="Título" />
            </div>
        </div>
        <div class="control-group">
            <label class="control-label"  for="inputContenido">Contenido:</label>
            <div class="controls">
                <input type="text" id="contenido" name="contenido" size="15" placeholder="Contenido" />
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
            <label class="control-label" for="id_hilo">Hilo: </label> 
            <div class="controls">                
                <input readonly="true" id="id_hilo" class="input-mini"
                       name="id_hilo" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_hilo_button" href="#"><i class="icon-search"></i></a>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <span id="id_hilo_desc" class="alert alert-success"></span>                                       
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