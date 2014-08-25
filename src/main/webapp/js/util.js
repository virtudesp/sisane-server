function ajaxCallSync(url, type, data) {
    return $.ajax({
        type: type,
        url: url,
        data: data,
        async: false,
        timeout: 30000
    });
}

function ajaxCallASync(url, type, data, callBackFunction) {
    $.ajax({
        type: type,
        url: url,
        data: data,
        async: true,
        timeout: 30000,
        success: callBackFunction
    });
}

function cargaDescripcionClaveAjenaEnFormulario(lugarID, lugarDesc, objetoClaveAjena, path) {
    if ($(lugarID).val() != "") {
        objInfo = objeto(objetoClaveAjena, path).getOne($(lugarID).val());
        if (objInfo != "" && $(lugarID).val() != 0) {
            props = Object.getOwnPropertyNames(objInfo);
            $(lugarDesc).text(objInfo[props[0]]); //muestra el primer campo
        } else {
            $(lugarDesc).text("???");
        }
    }
}

function cargaModalBuscarClaveAjena(strObjetoForeign, strPlace, control, functionCallback, path) {
    var objConsulta = objeto(strObjetoForeign, path);
    var consultaView = vista(objConsulta, path);
    cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Elección</h3>';
    pie = '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
    listado = consultaView.getEmptyList();
    loadForm(strPlace, cabecera, listado, pie, true);
    var consultaControl = control(path);
    consultaControl.inicia(consultaView, 1, null, null, 10, null, null, null, functionCallback, null, null, null);
}

function creoleParse(content, lugar) {
    var div = document.createElement('div');
    div.innerHTML = "";
    creole.parse(div, content);

    //var tablas = div.getElementsByTagName('table');
    //for (var i = 0; i < tablas.length; i++) {
    //    tablas[i].className = 'table table-bordered';
    //}                    

    lugar.empty().html(div);

    var codigo = lugar.html();
    codigo = codigo.replace("<table>", '<table class="table table-bordered"><tbody>');
    codigo = codigo.replace("</table>", '</tbody></table>');

    lugar.empty().append(codigo);

}

function getNeighborhood(link, page_number, total_pages, neighborhood) {
    page_number = parseInt(page_number);
    total_pages = parseInt(total_pages);
    neighborhood = parseInt(neighborhood);
    vector = "<div class=\"pagination\"><ul>";
    if (page_number > 1)
        vector += ("<li><a class=\"pagination_link\" id=\"" + (page_number - 1) + "\" href=\"" + link + (page_number - 1) + "\">prev</a></li>");
    if (page_number > neighborhood + 1)
        vector += ("<li><a class=\"pagination_link\" id=\"1\" href=\"" + link + "1\">1</a></li>");
    if (page_number > neighborhood + 2)
        vector += ("<li>" + "<a href=\"#\">...</a>" + "</li>");
    for (i = (page_number - neighborhood); i <= (page_number + neighborhood); i++) {
        if (i >= 1 && i <= total_pages) {
            if (page_number == i) {
                vector += ("<li class=\"active\"><a class=\"pagination_link\" id=\"" + i + "\" href=\"" + link + i + "\">" + i + "</a></li>");
            }
            else
                vector += ("<li><a class=\"pagination_link\" id=\"" + i + "\" href=\"" + link + i + "\">" + i + "</a></li>");
        }
    }
    if (page_number < total_pages - (neighborhood + 1))
        vector += ("<li>" + "<a href=\"#\">...</a>" + "</li>");
    if (page_number < total_pages - (neighborhood))
        vector += ("<li><a class=\"pagination_link\" id=\"" + total_pages + "\" href=\"" + link + total_pages + "\">" + total_pages + "</a></li>");
    if (page_number < total_pages)
        vector += ("<li><a class=\"pagination_link\"  id=\"" + (page_number + 1) + "\" href=\"" + link + (page_number + 1) + "\">next</a></li>");
    vector += "</ul></div>";
    return vector;
}

function buildDataTable(cabecera, campos, datos) {
    var tabla = "<table class=\"table table table-striped table-condensed\">";
    if (cabecera != null) {
        tabla += '<tr>';
        $.each(cabecera, function(index, value) {
            tabla += '<th>' + value + '</th>';
        })
        tabla += '</tr>';
    }
    $.each(datos['list'], function(index, value) {
        tabla += '<tr>';

        $.each(campos, function(index, valor) {
            tabla += '<td>' + value[valor] + '</td>';
        })
        tabla += '<td><div class="btn-toolbar"><div class="btn-group">';
        tabla += '<a class="btn btn-mini action01" id=' + value.id + ' href="#"><i class="glyphicon-eye-open"></i></a>';
        tabla += '<a class="btn btn-mini action02" id=' + value.id + ' href="#"><i class="glyphicon-zoom-in"></i></a>';
        tabla += '<a class="btn btn-mini action03" id=' + value.id + ' href="#"><i class="glyphicon-pencil"></i></a>';
        tabla += '<a class="btn btn-mini action04" id=' + value.id + ' href="#"><i class="glyphicon-remove"></i></a>';
        tabla += '</div></div></td>';
        tabla += '</tr>';
    });
    tabla += "</table>";
    return tabla;
}

function buildViewTable(cabecera, campos, datos) {
    var tabla = "<table class=\"table table table-bordered table-condensed\">";
    $.each(campos, function(index, valor) {
        tabla += '<tr><td><strong>' + cabecera[index] + '</strong></td><td>' + datos[valor] + '</td></tr>';
    })
    tabla += '</table>';
    return tabla;
}

function loadUpdateFormData(campos, datos) {
    $.each(campos, function(index, valor) {
        $('#' + campos[index]).val(datos[campos[index]]);
    })
}

function loadForm(modalName, headerData, bodyData, footerData, keyb) {
    $(modalName + ' .modal-header').empty().append(headerData);
    $(modalName + ' .modal-body').empty().append(bodyData);
    $(modalName + ' .modal-footer').empty().append(footerData);
    $(modalName).modal({
        keyboard: keyb
    })
}

function startSpinner(place, ContextPath) {
    $(place).empty();
    $(place).html('<img src="' + ContextPath + '/fonts/ajax-loading.gif" alt="cargando..." />');

}
;

function createDiv(id, data) {
    var divContainer = $('<div>').attr({
        id: id
    });
    $('body').append(divContainer);
    $('#' + id).append(data);
}

function procesaAjax(direccion, funcion) {
    $.ajax({
        url: direccion,
        //data: "nocache=" + Math.random(),
        type: "GET",
        dataType: "json",
        beforeSend: function() {
        },
        success: function(source) {
            $("#data").empty();
            funcion(source);
        },
        error: function(dato) {
            $("#data").empty();
            $("#data").append("ERROR en la recepción de datos de clientes");
        }
    });
}

function showObjeto(source) {
    $("#data").append("<p>" + source['id'] + " " + source['nombre'] + "</p><hr/>");
}

function showLista(source) {
    $.each(source['list'], function(index) {
        $("#data").append('<p>1: index: ' + index + ' id: ' + source['list'][index]['id'] + ' nombre: ' + source['list'][index]['nombre'] + '</p><hr/>');
    });
    $.each(source['list'], function(index, value) {
        $("#data").append('<p>2: index: ' + index + ' id: ' + value['id'] + ' nombre: ' + value['nombre'] + '</p><hr/>');
    });
    $.each(source['list'], function(index, value) {
        showObjeto(value);
    });
}

function replaceAll(str, search, rpl) {
    return str.split(search).join(rpl);
}



function inicializacion() {

    creole = new Parse.Simple.Creole({
        forIE: document.all,
        interwiki: {
            WikiCreole: 'http://www.wikicreole.org/wiki/',
            Wikipedia: 'http://en.wikipedia.org/wiki/'
        },
        linkFormat: ''
    });

    /* Inicialización en español para la extensión 'UI date picker' para jQuery. */
    /* Traducido por Vester (xvester [en] gmail [punto] com). */
    jQuery(function($) {
        $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            buttonImage: 'fonts/calendar.png',
            prevText: '<Ant',
            nextText: 'Sig>',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''};
        $.datepicker.setDefaults($.datepicker.regional['es']);
    });

    //para solucionar el bug de la autollamada recursiva 
    //muy dificil de encontrar y depurar
    //dos modales a la vez se pasan el foco de una a la otra
    //https://github.com/twbs/bootstrap/issues/4781
    //https://github.com/makeusabrew/bootbox/issues/60
    $(document).on('show', '.modal', function() {
        $(document).off('focusin.modal');
    });
    $.fn.serializeObject = function()
    {
        // http://jsfiddle.net/davidhong/gP9bh/
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = encodeURIComponent(this.value) || '';
            }
        });
        return o;
    };
}

function getIntegerArray(min, max) {
    var iArray = [];
    for (var counter = min; counter <= max; counter++) {
        iArray.push(counter);
    }
    return iArray;
}



function htmlEncode(value) {
    //create a in-memory div, set it's inner text(which jQuery automatically encodes)
    //then grab the encoded contents back out.  The div never exists on the page.
    return $('<div/>').text(value).html();
}

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}

function enviarDatosUpdateForm(view, prefijo_div) {
    var disabled = $(prefijo_div + '#formulario').find(':input:disabled').removeAttr('disabled');
    var jsonObj = [];
    jsonObj = $(prefijo_div + '#formulario').serializeObject();
    disabled.attr('disabled', 'disabled');

    //json is sent encoded. be careful of the dates. Dates must be decoded at server side before fill the bean
    //jsonfile = {json: htmlEncode(JSON.stringify(jsonObj))};
    jsonfile = {json: JSON.stringify(jsonObj)};
    cabecera = "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" + "<h3 id=\"myModalLabel\">Respuesta del servidor</h3>";
    pie = "<button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">Cerrar</button>";
    resultado = view.getObject().saveOne(jsonfile);
    if (resultado["status"] = "200") {
        mensaje = 'valores actualizados correctamente para el registro con id=' + resultado["message"];
        loadForm('#modal02', cabecera, "Código: " + resultado["status"] + "<br />" + mensaje + "<br />" + view.getObjectTable(resultado["message"]), pie, true);
    } else {
        mensaje = 'el servidor ha retornado el mensaje de error=' + resultado["message"];
        loadForm('#modal02', cabecera, "Código: " + resultado["status"] + "<br />" + mensaje + "<br />" + view.getObjectTable(resultado["message"]), pie, true);
    }
    $(prefijo_div + '#modal02').css({
        'right': '20px',
        'left': '20px',
        'width': 'auto',
        'margin': '0',
        'display': 'block'
    });
}

function linkBack() {
    history.back();
    return false;
}
;

$.fn.populateSelectBox = function(values, captions) {
    var combo = $(this);
    if (combo.is("select")) {
        $.each(values, function(index) {
            if (typeof captions === "undefined")
                combo.append($("<option />").val(this).text(this));
            else
                combo.append($("<option />").val(this).text(captions[index]));
        });
    }
};

function getUrlObjectFromUrlString(url) {
    if (typeof url == 'undefined') {
        return {};
    } else {
        if (url == "") {
            return {};
        } else {
            a = url.split('&');
        }
    }
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p = a[i].split('=');
        if (p.length != 2)
            p = ['id', p[0]]; //id parameter by default
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}
;

function getUrlObjectFromParamsWithoutParamArray(urlObj, nameParameterArray) {
    var newUrlObj = jQuery.extend(true, {}, urlObj); //http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
    $.each(nameParameterArray, function() {
        delete newUrlObj[this];
    })
    return newUrlObj;
}

function getUrlStringFromParamsObject(urlObj) {
    var result = "";
    for (var key in urlObj) {
        result += "&" + key + "=" + urlObj[key];
    }
    return result.substring(1);
}

function validateUrlObjectParameters(objParams, objModel) {
    //security borders comprobation, pendent of moving
    if (objParams["vf"] > objModel.getCachedCountFields()) {
        objParams["vf"] = objModel.getCachedCountFields();
    }
    if (objParams["page"] > objModel.getCachedPages()) {
        objParams["page"] = objModel.getCachedPages();
    }
    if (objParams["rpp"] > 50) {
        objParams["rpp"] = 50;
    }
    return objParams;
}

function defaultizeUrlObjectParameters(objParams) {
    if (typeof objParams["page"] == 'undefined')
        objParams["page"] = 1;
    if (typeof objParams["id"] == 'undefined')
        objParams["id"] = 1;
    if (typeof objParams["rpp"] == 'undefined')
        objParams["rpp"] = 10;
    if (typeof objParams["vf"] == 'undefined')
        objParams["vf"] = 10;
    return objParams;
}