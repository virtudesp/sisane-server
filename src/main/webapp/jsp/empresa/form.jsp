<%-- 
    Document   : form
    Created on : Jan 21, 2013, 10:24:17 AM
    Author     : AntonioNP
--%>
<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>Empresa</h2>
    <div class="control-group">
        <label class="control-label" for="inputId">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputId_usuario">Id Usuario:</label>
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
        <label class="control-label" for="inputNombre">Nombre:</label>
        <div class="controls">
            <input type="text" id="nombre" name="nombre" placeholder="nombre" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputCif">Cif:</label>
        <div class="controls">
            <input type="text" id="cif" name="cif" placeholder="cif" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputDireccion">Dirección:</label>
        <div class="controls">
            <input type="text" id="direccion" name="direccion" placeholder="direccion" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputLocalidad">Localidad:</label>
        <div class="controls">
            <input type="text" id="localidad" name="localidad" placeholder="localidad" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputProvincia">Provincia:</label>
        <div class="controls">
            <input type="text" id="provincia" name="provincia" placeholder="provincia" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputPais">Pais:</label>
        <div class="controls">
            <input type="text" id="pais" name="pais" placeholder="pais" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputTelefono">Teléfono:</label>
        <div class="controls">
            <input type="text" id="telefono" name="telefono" placeholder="telefono" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputFax">Fax:</label>
        <div class="controls">
            <input type="text" id="fax" name="fax" placeholder="fax" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputActividad">Actividad:</label>
        <div class="controls">
            <input type="text" id="actividad" name="actividad" placeholder="actividad" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputNombrecontacto">Nombre de contacto:</label>
        <div class="controls">
            <input type="text" id="nombrecontacto" name="nombrecontacto" placeholder="nombrecontacto" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputEmailcontacto">Email:</label>
        <div class="controls">
            <input type="text" id="emailcontacto" name="emailcontacto" placeholder="emailcontacto" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputValidada">Validada:</label>
        <div class="controls">
            <input type="text" id="validada" name="validada" placeholder="validada" />
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
        </div>
    </div>
</form>
