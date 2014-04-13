<%-- 
    Document   : form
    Created on : 24-ene-2014, 11:23:46
    Author     : al037877
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
            <label class="control-label" for="id_documento">Documento: </label> 
            <div class="controls">           
                <input readonly="true" id="id_documento" class="input-mini"
                       name="id_documento" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_documento_button" href="#"><i class="icon-search"></i></a>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <span id="id_documento_desc" class="alert alert-success"></span>                                       
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
            <label class="control-label" for="valor">Voto: </label>
            <div class="controls">
                <input id="valor" name="valor" type="text" size="30" maxlength="50" />
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
            </div>
        </div>
    </fieldset>
</form>