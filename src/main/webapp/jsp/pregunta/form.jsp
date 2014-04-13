<%-- 
    Document   : form
    Created on : 20-ene-2014, 11:53:29
    Author     : al037721
--%>

<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <fieldset>
        <div class="control-group">
            <label class="control-label" for="id">Id: </label>
            <div class="controls">
                <input id="id" name="id" type="text" size="30" maxlength="50" />
            </div>
        </div>        
        <div class="control-group">
            <label class="control-label" for="descripcion">Descripción: </label> 
            <div class="controls">
                <input id="descripcion" name="descripcion" type="text" size="30" maxlength="50" />
            </div>
        </div>         
        <div class="control-group">
            <label class="control-label" for="id_cuestionario">Tipo de cuestionario: </label> 
            <div class="controls"> 
                <!-- <span id="id_cuestionario" class="alert alert-info"></span> -->
                <input readonly="true" id="id_cuestionario" class="input-mini"
                       name="id_cuestionario" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_cuestionario_button" href="#"><i class="icon-search"></i></a>
            </div>
            </div>
            <div class="control-group">
            <div class="controls">
                <span id="id_cuestionario_desc" class="alert alert-success"></span>                                       
            </div>
        </div>             
        <div class="control-group">
            <div class="controls">
               <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
            </div>
        </div>
    </fieldset>
</form>

