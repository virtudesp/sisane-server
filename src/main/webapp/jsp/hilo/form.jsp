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
                <input id="id" name="id" type="text" size="30" maxlength="50" disabled="true" />
            </div>
        </div>        
        <div class="control-group">
            <label class="control-label"  for="inputNombre">Nombre:</label>
            <div class="controls">
                <input type="text" id="nombre" name="nombre" size="15"placeholder="Nombre" />
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
