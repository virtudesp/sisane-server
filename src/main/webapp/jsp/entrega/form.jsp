<%-- 
    Document   : form
    Created on : Jan 21, 2013, 10:24:17 AM
    Author     : al037805
--%>
<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>Entrega</h2>
    <div class="control-group">
        <label class="control-label" for="id">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="id_documento">Documento:</label>
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
        <label class="control-label"  for="id_actividad">Actividad:</label>
        <div class="controls">
             <input readonly="true" id="id_actividad" class="input-mini"
                       name="id_actividad" type="text" size="5" maxlength="5" />  
            <a class="btn btn-mini" id="id_actividad_button" href="#"><i class="glyphicon-search"></i></a>
        </div>
    </div>
    
    <div class="control-group">
            <div class="controls">
                <span id="id_actividad_desc" class="alert alert-success"></span>                                       
            </div>
    </div> 
    
    <div class="control-group">
        <label class="control-label"  for="nota">Nota:</label>
        <div class="controls">
            <input type="text" id="nota" name="nota" size="15" placeholder="nota" />
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
<script>
    $(function() {
        $("#datepicker").datepicker();
    });
</script>
