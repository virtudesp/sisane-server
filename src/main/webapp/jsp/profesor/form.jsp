<%-- 
    Document   : form
    Author     : Pedro Benito
--%>
<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <h2>Entrada</h2>
    <div class="control-group">
        <label class="control-label" for="inputId">ID:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputId_usuario">ID Usuario:</label>
        <div class="controls">
            <input type="text" id="id_usuario" name="id_usuario" placeholder="Id usuario" />
            <a class="btn btn-mini" id="id_usuario_button" href="#"><i class="icon-search"></i></a>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputDni">DNI:</label>
        <div class="controls">
            <input type="text" id="dni" name="dni" size="15" placeholder="Documento identidad" />
        </div>
    </div>

    <div class="control-group">
        <label class="control-label"  for="inputNombre">Nombre:</label>
        <div class="controls">
            <input type="text" id="nombre" name="nombre" size="15" placeholder="Nombre" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputApe1">Primer Apellido:</label>
        <div class="controls">
            <input type="text" id="ape1" name="ape1" size="15" placeholder="Primer apellido" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputApe2">Segundo Apellido:</label>
        <div class="controls">
            <input type="text" id="ape2" name="ape2" size="15" placeholder="Segundo Apellido" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputSexo">Sexo:</label>
        <div class="controls">
            <select id="sexo" name="sexo" type="text" autofocus="autofocus">
                <option value="">Seleccione una opción...</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputTelefono">Teléfono:</label>
        <div class="controls">
            <input type="text" id="telefono" name="telefono" size="15" placeholder="Móvil o fijo" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputEmail">Em@il:</label>
        <div class="controls">
            <input type="text" id="email" name="email" size="15" placeholder="Email" />
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
        </div>
    </div>
</form>