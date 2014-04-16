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
            <label class="control-label"  for="inputResumen">Resumen:</label>
            <div class="controls">
                <input type="text" id="resumen" name="resumen" size="15"placeholder="Resumen" />
            </div>
        </div>
        <div class="control-group">
            <label class="control-label"  for="inputCambios">Cambios:</label>
            <div class="controls">
                <input type="text" id="cambios" name="cambios" size="15" placeholder="Cambio" />
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="id_estado">Estado: </label> 
            <div class="controls">                
                <input readonly="true" id="id_estado" class="input-mini"
                       name="id_estado" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_estado_button" href="#"><i class="glyphicon-search"></i></a>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <span id="id_estado_desc" class="alert alert-success"></span>                                       
            </div>
        </div> 

                <div class="control-group">
            <label class="control-label" for="id_repositorio">Repositorio: </label> 
            <div class="controls">           
                <input readonly="true" id="id_repositorio" class="input-mini"
                       name="id_repositorio" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_repositorio_button" href="#"><i class="glyphicon-search"></i></a>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <span id="id_repositorio_desc" class="alert alert-success"></span>                                       
            </div>
        </div>   
        <div class="control-group">
        <label class="control-label" for="inputId_usuario">Usuario:</label>
        <div class="controls">           
            <input readonly="true" id="id_usuario" class="input-mini" 
                   name="id_usuario" type="text" size="5" maxlength="5" />
            <a class="btn btn-mini" id="id_usuario_button" href="#"><i class="glyphicon-search"></i></a>
        </div>
    </div>
     <div class="control-group">
                <div class="controls">
                    <span id="id_usuario_desc" class="alert alert-success"></span>                                       
                </div>
            </div> 
        <div class="control-group">
            <label class="control-label" for="fechaalta">Fecha Alta: </label> 
            <div class="controls">
                <input id="fechaalta" name="fechaalta" type="text" size="10" maxlength="50" value="" /> 
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="fecharesolucionn">Fecha Resolución: </label> 
            <div class="controls">
                <input id="fecharesolucion" name="fecharesolucion" type="text" size="10" maxlength="50" value="" /> 
            </div>
        </div>
        <script>
            $("#fechaalta").datepicker({
                showOn: 'both',
                buttonImageOnly: true,
                changeYear: true,
                numberOfMonths: 1});

            $("#fecharesolucion").datepicker({
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