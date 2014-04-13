<%-- 
    Document   : form
    Created on : 23-ene-2014, 9:22:05
    Author     : Javi Bonet
--%>

<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>Actividad Offline</h2>
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
            <label class="control-label" for="inputFecha">Fecha: </label> 
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
        <label class="control-label"  for="inputCalificacion">Calificacion:</label>
        <div class="controls">
            <input type="text" id="calificacion" name="calificacion" size="15" placeholder="calificacion" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputEvaluacion">Evaluacion:</label>
        <div class="controls">
            <input type="text" id="evaluacion" name="evaluacion" size="15" placeholder="evaluacion" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputActivo">Activo:</label>
        <div class="controls">
            <input type="text" id="activo" name="activo" size="15" placeholder="activo" />
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
        </div>
    </div>
</form>
