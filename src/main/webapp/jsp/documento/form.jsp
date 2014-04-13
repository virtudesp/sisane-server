<%-- 
    Document   : form
    Created on : Jan 21, 2013, 10:24:17 AM
    Author     : Alvaro
--%>
<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>documento</h2>
    <div class="control-group">
        <label class="control-label" for="inputId">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputNombre">Titulo:</label>
        <div class="controls">
            <input type="text" id="titulo" name="titulo" size="15" placeholder="titulo" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputNombre">Contenido:</label>
        <div class="controls">
            <textarea type="text" id="contenido" name="contenido" size="15" placeholder="contenido"></textarea>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="descripcion">Fecha: </label> 
        <div class="controls">
            <input id="fecha" name="fecha" type="text" size="10" maxlength="50" value="" placeholder="fecha"/> 
        </div>
    </div>
    <script>$("#fecha").datepicker({
            showOn: 'both',
            buttonImageOnly: true,
            changeYear: true,
            numberOfMonths: 1});
    </script>
    <div class="control-group">
        <label class="control-label"  for="inputNombre">Nota:</label>
        <div class="controls">
            <input type="text" id="nota" name="nota" size="15" placeholder="nota" />
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
        <label class="control-label"  for="inputNombre">Etiquetas:</label>
        <div class="controls">
            <input type="text" id="etiquetas" name="etiquetas" size="15" placeholder="etiquetas" />
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