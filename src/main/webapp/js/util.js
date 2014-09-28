//VISTA
var util = function() {
    //contexto privado
//    var link = "#";
//    var neighborhood = 2;
//    var urlJson = ContextPath + '/json?ob=' + clase;
//    var urlJsp = ContextPath + '/jsp?ob=' + clase;
    return {
        getLoading: function() {
            return '<img src="images/ajax-loading.gif" alt="cargando..." />';
        },
//        getLoading2: function() {
//            return '<img src="images/ajax-loading.gif" alt="cargando..." />';
//        },
        getForeign: function(objForeign) {
            //falta organizar con metadatos para mostrar sólo los campos relevantes
            var numKeys = Object.keys(objForeign).length;
            var strResult = "";
            for (counter = 0; counter < numKeys - 1; counter++) {
                valor = objForeign[Object.keys(objForeign)[counter]];
                if (valor != true && valor != false)
                    strResult += " " + valor;
            }
            //if (typeof fieldContent == "string") {
            if (strResult.length > 50) //don't show too long fields
                strResult = strResult.substr(0, 20) + " ...";
            return strResult;
        },
        loadForm: function(modalName, headerData, bodyData, footerData, keyb) {
            $(modalName + ' .modal-header').empty().append(headerData);
            $(modalName + ' .modal-body').empty().append(bodyData);
            $(modalName + ' .modal-footer').empty().append(footerData);
            $(modalName).modal({
                keyboard: keyb
            })
        }
    }
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

//    /* Inicialización en español para la extensión 'UI date picker' para jQuery. */
//    /* Traducido por Vester (xvester [en] gmail [punto] com). */
//    jQuery(function($) {
//        $.datepicker.regional['es'] = {
//            closeText: 'Cerrar',
//            buttonImage: 'fonts/calendar.png',
//            prevText: '<Ant',
//            nextText: 'Sig>',
//            currentText: 'Hoy',
//            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
//            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
//            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
//            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
//            weekHeader: 'Sm',
//            dateFormat: 'dd/mm/yy',
//            firstDay: 1,
//            isRTL: false,
//            showMonthAfterYear: false,
//            yearSuffix: ''};
//        $.datepicker.setDefaults($.datepicker.regional['es']);
//    });

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
    //load spinner
//    var img = $('<img alt="cargando..." / >').attr('src', "images/ajax-loading.gif").load(function() {
//        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
//            spinner = '<h3>Loading...</h3>';
//        } else {
//            spinner = '<img src="images/ajax-loading.gif" alt="cargando..." />';
//        }
//    });
    
    
        $.when(ajax().ajaxCallSync('images/ajax-loading.gif', 'GET', '')).done(function() {
            spinner = '<img src="images/ajax-loading.gif" alt="cargando..." />';
        })
   
    
    
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


$.fn.spinner = function() {

    $(this).html(spinner);

};