<%-- 
    Document   : form
    Created on : Jan 21, 2013, 10:24:17 AM
    Author     : Alvaro
--%>
<form class="form-horizontal" role="form" action="#" id="formulario" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="inputId">Id:</label>
        <div class="col-sm-2">
            <input type="text" class="form-control" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="inputNombre">Titulo:</label>
        <div class="col-sm-6">
            <input type="text" class="form-control" id="titulo" name="titulo" size="15" placeholder="titulo" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="inputNombre">Contenido:</label>
        <div class="col-sm-9">
            <textarea type="text"  class="form-control pull-left"  id="contenido" name="contenido" size="15" placeholder="contenido"></textarea>
        </div>
        <div class="col-sm-1">
            <a class="btn btn-mini pull-right" id="contenido_button" href="#"><i class="glyphicon glyphicon-pencil"></i></a>
        </div>

    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="descripcion">Fecha: </label> 
        <div class="col-sm-3">
            <input id="fecha"  class="form-control"  name="fecha" type="text" size="10" maxlength="50" value="" placeholder="fecha"/> 
        </div>
    </div>
    <script>
        $("#fecha").datepicker({
            showOn: 'both',
            buttonImageOnly: true,
            changeYear: true,
            numberOfMonths: 1});
    </script>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="inputNombre">Nota:</label>
        <div class="col-sm-1">
            <input type="text"  class="form-control"  id="nota" name="nota" size="15" placeholder="nota" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id_usuario">Usuario: </label> 
        <div class="col-sm-1">              
            <input readonly="true"  class="form-control"  id="id_usuario" class="input-mini" name="id_usuario" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-mini" id="id_usuario_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>
        <div class="col-sm-8">
            <span id="id_usuario_desc" class="alert alert-success"></span>                                       
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="inputNombre">Etiquetas:</label>
        <div class="col-sm-10">
            <input type="text"  class="form-control"  id="etiquetas" name="etiquetas" size="15" placeholder="etiquetas" />
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit"  class="btn btn-primary"  id="submitForm" >Submit</button>
            <button type="reset"  class="btn btn-danger"  id="resetForm" >Reset</button>
        </div>
    </div>
</form>
<script>
    $(function() {
        $("#datepicker").datepicker();
    });
</script>