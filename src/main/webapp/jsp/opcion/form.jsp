<%-- 
    Document   : form
    Created on : Jan 21, 2013, 10:24:17 AM
    Author     : al037570
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
            <label class="control-label" for="descripcion">Descripcion: </label> 
            <div class="controls">           
                <input id="descripcion" name="descripcion" type="text" size="30" maxlength="255" />  
              </div>
        </div>
       
 
        <div class="control-group">
            <label class="control-label" for="id_pregunta">Id pregunta: </label> 
            <div class="controls">                
                <input readonly="true" id="id_pregunta" class="input-mini"
                       name="id_pregunta" type="text" size="5" maxlength="5" />  
                <a class="btn btn-mini" id="id_pregunta_button" href="#"><i class="icon-search"></i></a>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <span id="id_pregunta_desc" class="alert alert-success"></span>                                       
            </div>
        </div> 

        
        <div class="control-group">
            <label class="control-label" for="correcta">Correcta: </label>
            <div class="controls">
                <input type="checkbox" id="correcta" name="correcta" value="true" />
            </div>
        </div>
       

        <div class="control-group">
            <div class="controls">
                <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
            </div>
        </div>
    </fieldset>
</form>

