<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>
<!--Obtiene el usuario a traves del id del pojo.-->
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");%>
<%
        int id = user.getId();
%>

<form class="form-horizontal" role="form" action="#" id="proveedorForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="nia">Nia:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="nia" name="nia" size="15" placeholder="nia" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="nombre">Nombre:</label>
        <div class="col-sm-6">
            <input type="text" id="nombre" class="form-control"  name="nombre" size="15" placeholder="nombre" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="telefono">Teléfono:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="telefono" name="telefono" size="15" placeholder="telefono" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="direccion">Dirección:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="direccion" name="direccion" size="15" placeholder="direccion" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="email">Email:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="email" name="email" size="15" placeholder="email" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="web">Web:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="web" name="web" size="15" placeholder="web" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="fax">Fax:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="fax" name="fax" size="15" placeholder="fax" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="localidad">Localidad:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="localidad" name="localidad" size="15" placeholder="localidad" />
        </div>
    </div>
    


    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" id="submitForm">Guardar</button>
        </div>
    </div>

</form>
        

<script type="text/javascript">

    $(document).ready(function() {
       
        //http://jqueryvalidation.org/documentation/
        $('#proveedorForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        nia: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un nia'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El NIA debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        nombre: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un nombre'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El nombre debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        telefono: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir telefono'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El teléfono debe tener como máximo 255 caracteres'
                                }
                                
                            }
                        },
                         direccion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una dirección'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'La dirección debe tener como máximo 255 caracteres'
                                }
                                
                            }
                        },
                         email: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un email'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El email debe tener como máximo 255 caracteres'
                                }
                                
                            }
                        },
                           web: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una dirección web'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El web debe tener como máximo 255 caracteres'
                                }
                                
                            }
                        },
                           fax: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un fax'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El fax debe tener como máximo 255 caracteres'
                                }
                                
                            }
                        },
                           localidad: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una localidad'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El localidad debe tener como máximo 255 caracteres'
                                }
                                
                            }
                        }

                    }
                })
               
                ;
       
        });
         

    
    
</script>
     