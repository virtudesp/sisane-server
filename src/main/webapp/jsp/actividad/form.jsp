<%-- 
    Document   : form
    Created on : 24-ene-2014, 20:35:26
    Author     : Jacobo
--%>

<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>Actividad</h2>
    <div class="control-group">
        <label class="control-label" for="inputId">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputNombre">Enunciado:</label>
        <div class="controls">
            <input type="text" id="enunciado" name="enunciado" size="15" placeholder="Enunciado" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="descripcion">Fecha: </label> 
        <div class="controls">
            <input id="fecha" name="fecha" type="text" size="10" maxlength="50" value=""  placeholder="Fecha" /> 
        </div>
    </div>
    <script>$("#fecha").datepicker({
            showOn: 'both',
            buttonImageOnly: true,
            changeYear: true,
            numberOfMonths: 1});
    </script>
    <div class="control-group">
        <label class="control-label"  for="inputNombre">Evaluación:</label>
        <div class="controls">
            <input type="text" id="evaluacion" name="evaluacion" size="15" placeholder="Evaluación" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputApe1" >Activo:</label>
        <div class="controls">
            <input type="checkbox" id="activo" name="activo" value="true" />
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