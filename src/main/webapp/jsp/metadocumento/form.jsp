<%-- 
    Document   : form
    Created on : 20-ene-2014, 12:23:50
    Author     : al037431
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>Metadocumento</h2>
    <div class="control-group">
        <label class="control-label" for="inputId">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputTitulo">Titulo:</label>
        <div class="controls">
            <input type="text" id="titulo" name="titulo" size="15" placeholder="titulo" />
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
</form>