<%-- 
    Document   : form
    Created on : 29-ene-2014, 18:40:00
    Author     : Edu
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
            <label class="control-label"  for="inputEnunciado">Enunciado: </label>
            <div class="controls">
                <input type="text" id="enunciado" name="enunciado" size="15" placeholder="Enunciado" />
            </div>
        </div>
        <div class="control-group">
            <label class="control-label"  for="inputDescripciondetallado">Descripcion: </label>
            <div class="controls">
                <input type="text" id="descripciondetallado" name="descripciondetallado" size="15" placeholder="Descripcion" />
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
            <label class="control-label" for="id_requerimiento">Requerimiento: </label> 
            <div class="controls">                
                <input readonly="true" id="id_requerimiento" class="input-mini"
                       name="id_requerimiento" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_requerimiento_button" href="#"><i class="icon-search"></i></a>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <span id="id_requerimiento_desc" class="alert alert-success"></span>                                       
            </div>
        </div> 
        <div class="control-group">
            <label class="control-label" for="fechainicioprevista">Fecha de Inicio Prevista: </label> 
            <div class="controls">
                <input id="fechainicioprevista" name="fechainicioprevista" type="text" size="10" maxlength="50"  /> 
            </div>
        </div>
        <script>$("#fechainicioprevista").datepicker({
                showOn: 'both',
                buttonImageOnly: true,
                changeYear: true,
                numberOfMonths: 1});
        </script>


        <div class="control-group">
            <label class="control-label" for="fechafinprevista">Fecha Fin Prevista: </label> 
            <div class="controls">
                <input id="fechafinprevista" name="fechafinprevista" type="text" size="10" maxlength="50"  /> 
            </div>
        </div>
        <script>$("#fechafinprevista").datepicker({
                showOn: 'both',
                buttonImageOnly: true,
                changeYear: true,
                numberOfMonths: 1});
        </script>


        <div class="control-group">
            <label class="control-label" for="fechainicio">Fecha de Inicio </label> 
            <div class="controls">
                <input id="fechainicio" name="fechainicio" type="text" size="10" maxlength="50" /> 
            </div>
        </div>
        <script>$("#fechainicio").datepicker({
                showOn: 'both',
                buttonImageOnly: true,
                changeYear: true,
                numberOfMonths: 1});
        </script>

        <div class="control-group">
            <label class="control-label" for="fechafin">Fecha de Fin </label> 
            <div class="controls">
                <input id="fechafin" name="fechafin" type="text" size="10" maxlength="50" /> 
            </div>
        </div>
        <script>$("#fechafin").datepicker({
                showOn: 'both',
                buttonImageOnly: true,
                changeYear: true,
                numberOfMonths: 1});
        </script>

        <div class="control-group">
            <label class="control-label" for="horasduracionprevista">Duracion Prevista: </label>
            <div class="controls">
                <input type="text" id="horasduracionprevista" name="horasduracionprevista" maxlength="5" placeholder="Duracion" />
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="porcentajecompletado">Porcentaje Completado: </label>
            <div class="controls">
                <input type="text" id="porcentajecompletado" name="porcentajecompletado" maxlength="3" placeholder="Porcentaje" />
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="fechaalta">Fecha de Alta: </label> 
            <div class="controls">
                <input id="fechaalta" name="fechaalta" type="text" size="10" maxlength="50" /> 
            </div>
        </div>
        <script>$("#fechaalta").datepicker({
                showOn: 'both',
                buttonImageOnly: true,
                changeYear: true,
                numberOfMonths: 1});
        </script>

        <div class="control-group">
            <label class="control-label" for="sprint">Sprint: </label>
            <div class="controls">
                <input type="text" id="sprint" name="sprint" maxlength="5" placeholder="Sprint" />
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="releasetabla">Release: </label>
            <div class="controls">
                <input type="text" id="releasetabla" name="releasetabla" maxlength="3" placeholder="Release" />
            </div>
        </div>


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