<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>Cuestionario</h2>
    <div class="control-group">
        <label class="control-label" for="inputId">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputDescripcion">Descripción:</label>
        <div class="controls">
            <input type="text" id="descripcion" name="descripcion" size="15" placeholder="descripcion" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputFecha" >Fecha:</label>
        <div class="controls">
            <input type="text" id="fecha" name="fecha" placeholder="fecha" size="15" />
        </div>
    </div>
    <script>$("#fecha").datepicker({
            showOn: 'both',
            buttonImageOnly: true,
            changeYear: true,
            numberOfMonths: 1});
    </script>
    <div class="control-group">
        <label class="control-label"  for="inputEvaluacion">Evaluación:</label>
        <div class="controls">
            <input type="text" id="evaluacion" name="evaluacion" placeholder="evaluacion" size="15" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputActivo">Activo:</label>
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
