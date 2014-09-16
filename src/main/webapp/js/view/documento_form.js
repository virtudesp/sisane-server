/* 
 * Copyright (C) 2014 rafa
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */






//$("#documentoForm #alta").datepicker({
//    showOn: 'both',
//    buttonImageOnly: true,
//    changeYear: true,
//    numberOfMonths: 1
//});
//$("#documentoForm #cambio").datepicker({
//    showOn: 'both',
//    buttonImageOnly: true,
//    changeYear: true,
//    numberOfMonths: 1,
//    onSelect: function(dateText) {
//    $("#documentoForm").bootstrapValidator('revalidateField', "#cambio");
//  }
//});


//http://jqueryvalidation.org/documentation/
//$('#documentoForm').validate({
//    //debug: true,
//    rules: {
//        titulo: {
////            minlength: 1,
//            maxlength: 255,
//            required: true
//
//        },
//        contenido: {
////            minlength: 1,
//            required: true
//        },
//        alta: {
//            required: true
//        },
//        cambio: {
//            required: true
//        },
//        hits: {
//            required: true,
//            maxlength: 6,
//            digits: true
//        },
//        obj_usuario_id: {
//            required: true,
//            digits: true
//        },
//        obj_tipodocumento_id: {
//            required: true,
//            digits: true
//        },
//        etiquetas: {
//            required: true,
//            maxlength: 255
//        },
//        publicado: {
//            required: false
//        },
//        portada: {
//            required: false
//        },
//        destacado: {
//            required: false
//        }
//    },
//    messages: {
//        titulo: {
//            required: "Introduce un titulo",
//            maxlength: "Tiene que ser menos de 255 caracteres"
//        },
//        contenido: {
//            required: "Introduce contenido"
//        },
//        alta: {
//            required: "Introduce una fecha de alta"
//        },
//        cambio: {
//            required: "Introduce una fecha de modificación"
//        },
//        hits: {
//            required: "Introduce un número entero",
//            maxlength: "Tiene que ser menos de 6 caracteres",
//            digits: "Tiene que ser un numero entero"
//        },
//        obj_usuario_id: {
//            required: "Escoge un usuario",
//            digits: "El id del usuario tiene que ser un entero"
//        },
//        obj_tipodocumento_id: {
//            required: "Escoge un tipo de documento",
//            digits: "El id del tipo de documento tiene que ser un entero"
//        },
//        etiquetas: {
//            required: "Introduce una/s etiqueta/s",
//            maxlength: "Tiene que ser menos de 255 caracteres"
//        }
//
//    },
////errorPlacement: function (error, element) {
////        error.appendTo(element.parent().prev());
////    },
//
//    highlight: function(element) {
//        $(element).closest('.form-group').addClass('has-error');
//        $(element).closest('.control-group').removeClass('success').addClass('error');
//    },
//    unhighlight: function(element) {
//        $(element).closest('.form-group').removeClass('has-error');
//    },
//    success: function(element) {
//        element.text('OK!').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
//    }
//
////    submitHandler: function(form) {
////        alert("envio2");
////        return false;
////    }
////    
////    highlight: function(element) {
////        $(element).closest('.form-group').addClass('has-error');
////    },
////    unhighlight: function(element) {
////        $(element).closest('.form-group').removeClass('has-error');
////    },
////    errorElement: 'span',
////    errorClass: 'help-block',
////    errorPlacement: function(error, element) {
////        if (element.parent('.input-group').length) {
////            error.insertAfter(element.parent());
////        } else {
////            error.insertAfter(element);
////        }
////    }
//});





function documentoForm_load(valores) {
    $('#documento_form #titulo').val(valores['titulo']);
    $('#documento_form #contenido').val(valores['contenido']);
    $('#documento_form #alta').val(valores['alta']);
    $('#documento_form #cambio').val(valores['cambio']);
    $('#documento_form #hits').val(valores['hits']);
    $('#documento_form #id_usuario').val(valores['id_usuario']);
    $('#documento_form #etiquetas').val(valores['etiquetas']);
    $('#documento_form #publicado').val(valores['publicado']);
    $('#documento_form #portada').val(valores['portada']);
}
function documentoForm_unload() {
    var valores = [];
    valores['titulo'] = $('#documento_form #titulo');
    valores['contenido'] = $('#documento_form #contenido');
    valores['alta'] = $('#documento_form #alta');
    valores['cambio'] = $('#documento_form #cambio');
    valores['hits'] = $('#documento_form #hits');
    valores['id_usuario'] = $('#documento_form #id_usuario');
    valores['etiquetas'] = $('#documento_form #etiquetas');
    valores['publicado'] = $('#documento_form #publicado');
    valores['portada'] = $('#documento_form #portada');
    return valores;
}

$(document).ready(function() {
//    $('#obj_tipodocumento_id').on('change', 'input', function() {
//        alert('cambio');
//        $('#obj_tipodocumento_desc').html="qqq";
//    });
    $(function() {
        $('#alta_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        $('#cambio_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
    });

//http://jqueryvalidation.org/documentation/
    $('#documentoForm')
//            .find('[name="id_usuario"]')
//            // Revalidate the color when it is changed
//            .change(function(e) {
//                alert('cambio');
//                $('#documentoForm').bootstrapValidator('revalidateField', 'id_usuario');
//            })
//            .end()
            .bootstrapValidator({
                container: '#messages',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    titulo: {
                        validators: {
                            notEmpty: {
                                message: 'The full name is required and cannot be empty'
                            },
                            stringLength: {
                                max: 255,
                                message: 'The title must be less than 255 characters long'
                            }
                        }
                    },
                    contenido: {
                        validators: {
                            notEmpty: {
                                message: 'The full name is required and cannot be empty'
                            }
                        }
                    },
                    alta_group: {
                        validators: {
                            notEmpty: {
                                message: 'alta The full name is required and cannot be empty'
                            },
                            date: {
                                format: 'DD/MM/YYYY',
                                message: 'alta ssThe full name is required and cannot be empty'
                            }
                        }
                    },
                    cambio_group: {
                        validators: {
                            notEmpty: {
                                message: 'cambio The full name is required and cannot be empty'
                            },
                            date: {
                                format: 'DD/MM/YYYY',
                                message: 'alta ssThe full name is required and cannot be empty'
                            }
                        }
                    },
                    hits: {
                        validators: {
                            notEmpty: {
                                message: 'The full name is required and cannot be empty'
                            },
                            integer: {
                                message: 'The value is not an integer'
                            },
                            between: {
                                min: -0,
                                max: 99999999,
                                message: 'The latitude must be between 0 and 99999999'
                            }
                        }

                    },
                    id_usuario: {
                        validators: {
                            notEmpty: {
                                message: 'Tienes que elegir un usuario'
                            },
                            integer: {
                                message: 'El identificador de usuario debe ser un entero'
                            }
                        }
                    },
                    id_tipodocumento: {
                        validators: {
                            notEmpty: {
                                message: 'Tienes que elegir un tipo de documento'
                            },
                            integer: {
                                message: 'El identificador de tipo de documento debe ser un entero'
                            }
                        }
                    },
                    etiquetas: {
                        validators: {
                            notEmpty: {
                                message: 'No has añadido etiquetas'
                            },
                            stringLength: {
                                max: 100,
                                message: 'La longitud de las etiquetas debe ser de 100 caracteres como mucho'
                            }
                        }
                    }

                }
//            });



            })
            .on('change', '[name="id_usuario"]', function() {
                $('#documentoForm').bootstrapValidator('revalidateField', 'id_usuario');
            })

            .on('change', '[name="id_tipodocumento"]', function() {
                $('#documentoForm').bootstrapValidator('revalidateField', 'id_tipodocumento');
            })
            ;
//    $('#id_usuario').on('change', function() {
//        alert('cambio id_usuario');
//        $('#documentoForm').bootstrapValidator('revalidateField', 'id_usuario');
//    });


//    $('#id_usuario').on('dp.change', function(e) {
//        // Revalidate the date when user change it
//        $('#documentoForm').bootstrapValidator('revalidateField', 'id_usuario');
//    });


    $('#alta_group').on('dp.change dp.show', function(e) {
        // Revalidate the date when user change it
        $('#documentoForm').bootstrapValidator('revalidateField', 'alta_group');
    });
    $('#cambio_group').on('dp.change dp.show', function(e) {
        // Revalidate the date when user change it
        $('#documentoForm').bootstrapValidator('revalidateField', 'cambio_group');
    });
});

//http://bootstrapvalidator.com/
//https://github.com/Eonasdan/bootstrap-datetimepicker