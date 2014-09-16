<form class="form-horizontal" role="form" action="#" id="documentoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Titulo:</label>
        <div class="col-sm-6">
            <input type="text" id="titulo" class="form-control"  name="titulo" size="15" placeholder="titulo" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="contenido">Contenido:</label>
        <div class="col-sm-9">
            <textarea type="text"  class="form-control pull-left"  id="contenido" name="contenido" size="15" placeholder="contenido"></textarea>
        </div>
        <div class="col-sm-1">
            <a class="btn btn-primary btn-sm" id="contenido_button" href="#"><i class="glyphicon glyphicon-pencil"></i></a>
        </div>
    </div>






    <div class="form-group">
        <label class="col-sm-2 control-label" for="alta_group">Alta:</label> 
        <div class="col-sm-3">           
            <div class='input-group date' id='alta_group'>
                <input type='text' class="form-control" id='alta' name="alta_group" placeholder="Fecha de alta" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="cambio_group">Cambio:</label> 
        <div class="col-sm-3">      
            <div class='input-group date' id='cambio_group'>
                <input type='text' class="form-control" id='cambio' name="cambio_group" placeholder="Fecha de cambio" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>








    <div class="form-group">
        <label class="col-sm-2 control-label"  for="hits">Hits:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="hits" name="hits" size="15" placeholder="hits" />
        </div>
    </div>



    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_usuario_id">Usuario: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_usuario_id" class="input-mini" name="id_usuario" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_usuario_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_usuario_desc"></label>                     
    </div>




    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_tipodocumento_id">Tipo de documento: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_tipodocumento_id" class="input-mini" name="id_tipodocumento" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_tipodocumento_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_tipodocumento_desc"></label>                     
    </div>





    <div class="form-group">
        <label class="col-sm-2 control-label"  for="etiquetas">Etiquetas:</label>
        <div class="col-sm-10">
            <input type="text"  class="form-control"  id="etiquetas" name="etiquetas" size="15" placeholder="etiquetas" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="publicado">Publicado:</label>
        <div class="col-sm-1">
            <input type="checkbox" id="publicado" name="publicado" value="true" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="portada">Portada:</label>
        <div class="col-sm-1">
            <input type="checkbox" id="portada" name="portada" value="true" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="destacado">Destacado:</label>
        <div class="col-sm-1">
            <input type="checkbox" id="portada" name="destacado" value="true" />
        </div>
    </div> 

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary" id="submitForm">Guardar</button>
            <button type="reset"  class="btn btn-danger"  id="resetForm">Limpiar</button>
            <a class="btn btn-primary"  id="returnForm">Volver</a>
        </div>
    </div>



</form>

<div id="modal01" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header" id="modal-header"></div>
            <div class="modal-body" id="modal-body"></div>
            <div class="modal-footer" id="modal-footer"></div>
        </div>
    </div>
</div>

<script src="js/view/documento_form.js" charset="UTF-8"></script>      