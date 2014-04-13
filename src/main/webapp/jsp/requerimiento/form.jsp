<%-- 
    Document   : form
    Created on : Jan 21, 2013, 10:24:17 AM
    Author     : Jordi
--%>
<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>Requerimiento</h2>
    <div class="control-group">
        <label class="control-label" for="inputId">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputEnunciado">Enunciado:</label>
        <div class="controls">
            <input type="text" id="enunciado" name="enunciado" size="15" placeholder="enunciado" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputFechaalta">Fecha: </label> 
        <div class="controls">
            <input id="fechaalta" name="fechaalta" type="text" size="10" maxlength="50" value="" /> 
        </div>
        <script>$("#fechaalta").datepicker({
                showOn: 'both',
                buttonImageOnly: true,
                changeYear: true,
                numberOfMonths: 1});
        </script>
    </div>
    <div class="control-group">
        <div class="controls">
            <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
        </div>
    </div>
</form>

