//VISTA
var vista = function(clase, ContextPath) {
    //contexto privado
    var link = "#";
    var neighborhood = 2;
    var urlJson = ContextPath + '/json?ob=' + clase;
    var urlJsp = ContextPath + '/jsp?ob=' + clase;
    function getForeign(objForeign) {
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
    }
    function printValue(value, valor) {
        var strResult = "";
        if (/obj_/.test(valor)) {
            if (value[valor].id > 0) {
                strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + getForeign(value[valor]) + '</a>';
            } else {
                strResult = '???';
            }
        } else {
            switch (value[valor]) {
                case true:
                    strResult = '<i class="glyphicon glyphicon-ok"></i>';
                    break;
                case false:
                    strResult = '<i class="glyphicon glyphicon-remove"></i>';
                    break;
                default:
                    strResult = decodeURIComponent(value[valor]);
                    //if (typeof fieldContent == "string") {
                    if (strResult.length > 50) //don't show too long fields
                        strResult = strResult.substr(0, 20) + " ...";
                    //}
            }
        }
        return strResult;
    }
    return {
        //contexto público (interface)
//        getName: function() {
//            return objeto.getName();
//        },
//        getObject: function() {
//            return objeto;
//        },
        getLoading: function() {
            return '<img src="fonts/ajax-loading.gif" alt="cargando..." />';
        },
//        getRegisterTableView: function(place, id) {
//            $(place).empty().append("<h1>Vista de " + this.getName() + "</h1>");
//            $(place).append((this.getObjectTable(id)));
//            $(place).append('<a class="btn btn-primary" href="jsp#/' + this.getName() + '/edit/' + id + '">Editar</a>');
//            $(place).append('<a class="btn btn-primary" href="jsp#/' + this.getName() + '/remove/"' + id + '">Borrar</a>');
//            $(place).append('<a class="btn btn-primary" href="jsp#/' + this.getName() + '/list/"' + id + '">Volver</a>');
//        },
        getPageLinks: function(url, page_number, total_pages, neighborhood) {
            vector = "<ul class=\"pagination\">";
            if (page_number > 1)
                vector += ('<li><a class="pagination_link" id="' + (page_number - 1) + '" href="' + url + '&page=' + (page_number - 1) + '">prev</a></li>');
            if (page_number > neighborhood + 1)
                vector += ('<li><a class="pagination_link" id="1" href="' + url + '&page=1">1</a></li>');
            if (page_number > neighborhood + 2)
                vector += ('<li>' + '<a href="#">...</a>' + '</li>');
            for (i = (page_number - neighborhood); i <= (page_number + neighborhood); i++) {
                if (i >= 1 && i <= total_pages) {
                    if (page_number === i) {
                        vector += ('<li class="active"><a class="pagination_link" id="' + i + '" href="' + url + '&page=' + i + '">' + i + '</a></li>');
                    }
                    else
                        vector += ('<li><a class="pagination_link" id="' + i + '" href="' + url + '&page=' + i + '">' + i + '</a></li>');
                }
            }
            if (page_number < total_pages - (neighborhood + 1))
                vector += ('<li>' + '<a href="#">...</a>' + '</li>');
            if (page_number < total_pages - (neighborhood))
                vector += ('<li><a class="pagination_link" id="' + total_pages + '" href="' + url + '&page=' + total_pages + '">' + total_pages + '</a></li>');
            if (page_number < total_pages)
                vector += ('<li><a class="pagination_link"  id="' + (page_number + 1) + '" href="' + url + '&page=' + (page_number + 1) + '">next</a></li>');
            vector += "</ul>";
            return vector;
        },
        getObjectTable: function(cabecera, value, nombres) {
//            objeto.loadAggregateViewOne(id);
//            cabecera = objeto.getCachedPrettyFieldNames();
//            value = objeto.getCachedOne();
//            nombres = objeto.getCachedFieldNames();
//            path = objeto.getPath();
            var tabla = "<table class=\"table table table-bordered table-condensed\">";
            $.each(nombres, function(index, valor) {
                tabla += '<tr><td><strong>' + cabecera[index] + '</strong></td>';

//                if (/id_/.test(valor)) {
////                    if (datos[valor] == 0) {
////                        tabla += "nulo" + ', <strong> id:0 </strong>';
////                    } else {
////                        $.when(ajaxCallSync(path + '/json?ob=' + valor.split("_")[1].replace(/[0-9]*$/, "") + '&op=get&id=' + datos[valor], 'GET', '')).done(function(data) {
////                            contador = 0;
////                            add_tabla = "";
////                            for (key in data) {
////                                if (contador === 0)
////                                    add_tabla = data[key];
////                                if (contador === 1)
////                                    add_tabla = data[key] + ', <strong> id: </strong>' + datos[valor];
////                                //if (contador > 1)
////                                //add_tabla = ", " + data[key].substr(0, 8)  + "... ";  
////                                contador++;
////                            }
////                            if (contador === 0) {
////                                add_tabla = datos[valor] + ' #error';
////                            }
////                            tabla += add_tabla;
////                        });
////                    }
//
//                }
//                else {
//                    switch (datos[valor]) {
//                        case true:
//                            tabla += '<i class="glyphicon glyphicon-ok"></i>';
//                            break;
//                        case false:
//                            tabla += '<i class="glyphicon glyphicon-remove"></i>';
//                            break;
//                        default:
//                            tabla += decodeURIComponent(datos[valor]);
//                    }
//                    tabla += '</td></tr>';
//                }



                tabla += '<td>' + printValue(value, valor) + '</td>';

//                if (/obj_tipodocumento/.test(valor)) {
//                    if (value[valor].id > 0) {
//                        strClaveAjena = value[valor].id + ": " + value[valor].descripcion;
//                        strClaveAjena = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + strClaveAjena + '</a>';
//                        tabla += '<td>' + strClaveAjena + '</td>';
//                    } else {
//                        tabla += '<td>???</td>';
//                    }
//                }
//                if (/obj_usuario/.test(valor)) {
//                    if (value[valor].id > 0) {
//                        strClaveAjena = value[valor].id + ": " + value[valor].login;
//                        strClaveAjena = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + strClaveAjena + '</a>';
//                        tabla += '<td>' + strClaveAjena + '</td>';
//                    } else {
//                        tabla += '<td>sin usuario</td>';
//                    }
//                }
//                if (!(/obj_/.test(valor))) {
//                    switch (value[valor]) {
//                        case true:
//                            tabla += '<td><i class="glyphicon glyphicon-ok"></i></td>';
//                            break;
//                        case false:
//                            tabla += '<td><i class="glyphicon glyphicon-remove"></i></td>';
//                            break;
//                        default:
//                            var fieldContent = decodeURIComponent(value[valor]);
//                            if (typeof fieldContent == "string") {
//                                if (value[valor].length > 50) //don't show too long fields
//                                    fieldContent = decodeURIComponent(value[valor]).substr(0, 20) + " ...";
//                            }
//                            tabla += '<td>' + fieldContent + '</td>';
//                    }
//                }


            });
            tabla += '</table>';
            return tabla;
        },
        getTemplate: function() {
            $.when(ajaxCallSync(objeto.getUrlJsp() + '&op=' + template, 'GET', '')).done(function(data) {
                form = data;
            });
            return form;
        },
        getPanel: function(titulo, contenido) {
            return '<div class="panel panel-default"><div class="panel-heading"><h1>' + titulo + '</h1></div><div class="panel-body">' + contenido + '</div></div>';
        },
        getEmptyForm: function() {
            $.when(ajaxCallSync(urlJsp + '&op=form&mode=1', 'GET', '')).done(function(data) {
                form = data;
            });
            return form;
        },
        getEmptyList: function() {
            $.when(ajaxCallSync(urlJsp + '&op=list&mode=1', 'GET', '')).done(function(data) {
                form = data;
            });
            return form;
        },
//        getEmptyList: function() {
//            $.when(ajaxCallSync(objeto.getUrlJsp() + '&op=list&mode=1', 'GET', '')).done(function(data) {
//                forma = data;
//            });
//            return forma;
//        },
        getEmptyDiv: function() {
            return '<div id="content"></div>';
        },
        doFillForm: function(id) {
            campos = objeto.getFieldNames();
            datos = objeto.getOne(id);
            $.each(campos, function(index, valor) {
                var a = true;
                switch (datos[campos[index]]) {
                    case true:
                        $('#' + campos[index]).attr("checked", "checked");
                        break;
                    case false:
                        break;
                    default:
                        $('#' + campos[index]).val(decodeURIComponent(datos[campos[index]]));
                }

            });
        },
        getRegistersInfo: function(regs) {
            return "<p><small>Mostrando una consulta de " + regs + " registros.</small></p>";
        },
        getOrderInfo: function(objParams) {
            if (order) {
                strOrder = "<p><small>Contenido ordenado por " + objParams["order"] + " (" + objParams["ordervalue"] + ') <a href="jsp#/' + clase + '/list/' + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"])) + '" id="linkQuitarOrden">(Quitar orden)</a></small></p>';
            } else {
                strOrder = "<p>Contenido no ordenado</p>";
            }
            return strOrder;
        },
        getFilterInfo: function(objParams) {
            if (filter) {
                strFilter = "<p><small>Contenido filtrado (" + objParams ['filter'] + " " + objParams['filteroperator'] + " " + objParams['filtervalue'] + ') <a href="jsp#/' + clase + '/list/' + getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"])) + '" id="linkQuitarFiltro">(Quitar filtro)</small></a></p>';
            } else {
                strFilter = "<p>Contenido no filtrado</p>";
            }
            return strFilter;
        },
        getUrlFromParamsWithoutOrder: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            var url = '';
            if (pag)
                url += "page=" + pag;
            if (rpp)
                url += "&rpp=" + rpp;
            if (filter)
                url += "&filter=" + filter;
            if (filteroperator)
                url += "&filteroperator=" + filteroperator;
            if (filtervalue)
                url += "&filtervalue=" + filtervalue;
            if (systemfilter)
                url += "&systemfilter=" + systemfilter;
            if (systemfilteroperator)
                url += "&systemfilteroperator=" + systemfilteroperator;
            if (systemfiltervalue)
                url += "&systemfiltervalue=" + systemfiltervalue;
            return url;
        },
        getUrlFromParamsWithoutPage: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            var url = '';
            if (rpp)
                url += "rpp=" + rpp;
            if (order)
                url += "&order=" + order;
            if (ordervalue)
                url += "&ordervalue=" + ordervalue;
            if (filter)
                url += "&filter=" + filter;
            if (filteroperator)
                url += "&filteroperator=" + filteroperator;
            if (filtervalue)
                url += "&filtervalue=" + filtervalue;
            if (systemfilter)
                url += "&systemfilter=" + systemfilter;
            if (systemfilteroperator)
                url += "&systemfilteroperator=" + systemfilteroperator;
            if (systemfiltervalue)
                url += "&systemfiltervalue=" + systemfiltervalue;
            return url;
        },
        getUrlFromParamsWithoutFilter: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            var url = '';
            if (pag)
                url += "page=" + pag;
            if (rpp)
                url += "&rpp=" + rpp;
            if (order)
                url += "&order=" + order;
            if (ordervalue)
                url += "&ordervalue=" + ordervalue;
            if (systemfilter)
                url += "&systemfilter=" + systemfilter;
            if (systemfilteroperator)
                url += "&systemfilteroperator=" + systemfilteroperator;
            if (systemfiltervalue)
                url += "&systemfiltervalue=" + systemfiltervalue;
            return url;
        },
        getUrlFromParamsWithoutRpp: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            var url = '';
            if (pag)
                url += "page=" + pag;
            if (order)
                url += "&order=" + order;
            if (ordervalue)
                url += "&ordervalue=" + ordervalue;
            if (filter)
                url += "&filter=" + filter;
            if (filteroperator)
                url += "&filteroperator=" + filteroperator;
            if (filtervalue)
                url += "&filtervalue=" + filtervalue;
            if (systemfilter)
                url += "&systemfilter=" + systemfilter;
            if (systemfilteroperator)
                url += "&systemfilteroperator=" + systemfilteroperator;
            if (systemfiltervalue)
                url += "&systemfiltervalue=" + systemfiltervalue;
            return url;
        },
        getRppLinks: function(objParams) {
            var UrlFromParamsWithoutRpp = getUrlStringFromParamsObject(getUrlObjectFromParamsWithoutParamArray(objParams, ["rpp"]));
            var botonera = '<div id="pagination"><ul class="pagination">';
            if (rpp == 5)
                botonera += '<li class="active">';
            else
                botonera += '<li>';
            botonera += '<a class="pagination_link" id="1" href="jsp#/' + clase + '/list/' + UrlFromParamsWithoutRpp + '&rpp=5">5</a></li>';
            if (rpp == 10)
                botonera += '<li class="active">';
            else
                botonera += '<li>';
            botonera += '<a class="pagination_link" id="2" href="jsp#/' + clase + '/list/' + UrlFromParamsWithoutRpp + '&rpp=10">10</a></li>';
            if (rpp == 20)
                botonera += '<li class="active">';
            else
                botonera += '<li>';
            botonera += '<a class="pagination_link" id="3" href="jsp#/' + clase + '/list/' + UrlFromParamsWithoutRpp + '&rpp=20">20</a></li>';
            if (rpp == 50)
                botonera += '<li class="active">';
            else
                botonera += '<li>';
            botonera += '<a class="pagination_link" id="4" href="jsp#/' + clase + '/list/' + UrlFromParamsWithoutRpp + '&rpp=50">50</a></li>';
            botonera += '</ul></div>';
            return botonera;
        },
        getHeaderPageTable: function(prettyFieldNames, fieldNames, visibleFields, UrlFromParamsWithoutOrder) {
            var numField = 0; //visible field counter
            var tabla = "";

            if (prettyFieldNames !== null) {
                tabla += '<tr>';
                $.each(prettyFieldNames, function(index, value) {
                    numField++; //field counter
                    if (numField <= visibleFields) {
                        if (value === "acciones") {
                            tabla += '<th class="col-md-2">' + value;
                            tabla += '</th>';
                        } else {
                            if (fieldNames[numField - 1] === "id") {
                                tabla += '<th class="col-md-1">' + value;
                            } else {
                                tabla += '<th>' + value;
                            }
                            if (fieldNames[numField - 1].substr(0, 4) == "obj_") {
                                fieldName = fieldNames[numField - 1].substring(4);
                                fieldName = "id_" + fieldName;
                            } else {
                                fieldName = fieldNames[numField - 1];
                            }
                            tabla += '<br />';
                            tabla += '<a class="orderAsc' + index + '" href="jsp#/' + clase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + fieldName + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
                            tabla += '<a class="orderDesc' + index + '" href="jsp#/' + clase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + fieldName + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
                            tabla += '</th>';
                        }
                    }
                    if (numField == visibleFields + 1) {
                        tabla += '<th class="col-md-2">acciones</th>';
                    }

                });
                tabla += '</tr>';
            }
            return tabla;
        },
        getBodyPageTable: function(page, fieldNames, visibleFields, tdbuttons) {
//            var tabla = "";
//            $.each(page, function(index, value) {
//                tabla += '<tr>';
//                var numField = 0;
//                var id;
//                $.each(fieldNames, function(index, valor) {
//                    if ("id" == valor) {
//                        id = value[valor];
//                    }
//                    //numField++;
//                    //if (numField <= visibleFields) {
//                        if (/id_/.test(valor)) {
//                            //falta codificar un método dame clave ajena en el modelo ...
//
//                            //falta sacar esto como un callback
//
//                            foreignRegister = objeto.getForeignKey(value[valor], valor);
//                            tabla += '<td>' + foreignRegister["id"] + '</td>';
//
//
//
////                            $.when(ajaxCallSync(path + '/json?ob=' + valor.split("_")[1].replace(/[0-9]*$/, "") + '&op=get&id=' + value[valor], 'GET', '')).done(function(data) {
////                                var contador = 0;
////                                var add_tabla = "";
////                                for (key in data) {
////                                    if (contador == 0)
////                                        add_tabla = '<td>id=' + data[key] + '(no existe)</td>';
////                                    if (contador == 1)
////                                        add_tabla = '<td>' + data[key] + '</td>';
////                                    contador++;
////                                }
////                                if (contador == 0) {
////                                    add_tabla = '<td>' + value[valor] + ' #error</td>';
////                                }
////                                tabla += add_tabla;
////                            });
//                        } else {
//                            switch (value[valor]) {
//                                case true:
//                                    tabla += '<td><i class="glyphicon glyphicon-ok"></i></td>';
//                                    break;
//                                case false:
//                                    tabla += '<td><i class="glyphicon glyphicon-remove"></i></td>';
//                                    break;
//                                default:
//                                    var fieldContent = decodeURIComponent(value[valor]);
//                                    if (typeof fieldContent == "string") {
//                                        if (value[valor].length > 50) //don't show too long fields
//                                            fieldContent = decodeURIComponent(value[valor]).substr(0, 20) + " ...";
//                                    }
//                                    tabla += '<td>' + fieldContent + '</td>';
//                            }
//                        }
//                    //}
//                });
//                tabla += '<td>';
//                tabla += tdbuttons(id);
////                tabla += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
////                tabla += '<a class="btn btn-default" href="jsp#/' + operationName + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
////                tabla += '<a class="btn btn-default" href="jsp#/' + operationName + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
////                tabla += '<a class="btn btn-default" href="jsp#/' + operationName + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
////                tabla += '</div></div>';
//                tabla += '</td>';
//                tabla += '</tr>';
//            });
//            return tabla;


            var tabla = "";
            $.each(page, function(index, value) {
                tabla += '<tr>';
                var numField = 0;
                var id;
                var strClaveAjena;
                $.each(fieldNames, function(index, valor) {
                    if ("id" == valor) {
                        id = value[valor];
                    }
                    numField++;
                    if (numField <= visibleFields) {

                        tabla += '<td>' + printValue(value, valor) + '</td>';

//                        if (/obj_tipodocumento/.test(valor)) {
//                            if (value[valor].id > 0) {
//                                strClaveAjena = value[valor].id + ": " + value[valor].descripcion;
//                                strClaveAjena = '<a href="jsp#/tipodocumento/view/' + value[valor].id + '">' + strClaveAjena + '</a>';
//                                tabla += '<td>' + strClaveAjena + '</td>';
//                            } else {
//                                tabla += '<td>sin tipo</td>';
//                            }
//                        }
//                        if (/obj_usuario/.test(valor)) {
//                            if (value[valor].id > 0) {
//                                strClaveAjena = value[valor].id + ": " + value[valor].login;
//                                strClaveAjena = '<a href="jsp#/usuario/view/' + value[valor].id + '">' + strClaveAjena + '</a>';
//                                tabla += '<td>' + strClaveAjena + '</td>';
//                            } else {
//                                tabla += '<td>sin usuario</td>';
//                            }
//                        }
//                        if (!(/obj_/.test(valor))) {
//                            switch (value[valor]) {
//                                case true:
//                                    tabla += '<td><i class="glyphicon glyphicon-ok"></i></td>';
//                                    break;
//                                case false:
//                                    tabla += '<td><i class="glyphicon glyphicon-remove"></i></td>';
//                                    break;
//                                default:
//                                    var fieldContent = decodeURIComponent(value[valor]);
//                                    if (typeof fieldContent == "string") {
//                                        if (value[valor].length > 50) //don't show too long fields
//                                            fieldContent = decodeURIComponent(value[valor]).substr(0, 20) + " ...";
//                                    }
//                                    tabla += '<td>' + fieldContent + '</td>';
//                            }
//                        }
                    }
                });
                tabla += '<td>';
                tabla += tdbuttons(id);
                tabla += '</td>';
                tabla += '</tr>';
            });
            return tabla;



        },
//        getPageTable: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, botonera) {
//            var tabla = '';
//            var visibleFields = 7;
//            var fieldNames = objeto.getFieldNames();
//            var prettyFieldNames = objeto.getPrettyFieldNamesAcciones();
//            var UrlFromParamsWithoutOrder = this.getUrlFromParamsWithoutOrder(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue);
//
//            tabla += "<table class=\"table table-responsive table-hover table-striped table-condensed\">";
//
//            tabla += this.getHeaderPageTable(prettyFieldNames, visibleFields, objeto.getName(), UrlFromParamsWithoutOrder);
//
//            page = objeto.getPage(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue)['list'];
//            if (page != 0) {
//                tabla += this.getBodyPageTable(page, fieldNames, visibleFields, objeto.getName(), objeto.getPath());
//                tabla += "</table>";
//            } else {
//                tabla = "<div class=\"alert alert-info\"><h4>Ha habido un problema con la base de datos</h4><br/>El probema puede ser:<ul><li>La tabla está vacia.</li><li>Tu busqueda no tubo resultados.</li></ul></div>";
//            }
//            return tabla;
//        }
//        getPageTable: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, botonera) {
//            urlWithoutOrder = this.getUrlFromParamsWithoutOrder(pag,rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, botonera);
//            var tabla = "<table class=\"table table-responsive table-hover table-striped table-condensed\">";
//            var visibleFields = 5;
//            var numField = 0; //visible field counter
//            if (objeto.getPrettyFieldNamesAcciones() !== null) {
//                tabla += '<tr>';
//                $.each(objeto.getPrettyFieldNamesAcciones(), function(index, value) {
//                    numField++; //field counter
//                    if (numField <= visibleFields) {
//                        if (value === "acciones") {
//                            tabla += '<th class="col-md-2">' + value;
//                            tabla += '</th>';
//                        } else {
//                            if (value === "id") {
//                                tabla += '<th class="col-md-1">' + value;
//                                tabla += '<br /><a class="orderAsc' + index + '" href="jsp#/' + this.getName() + '/list/' + url + '&order=id&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
//                                tabla += '<a class="orderDesc' + index + '" href="#"><i class="glyphicon glyphicon-arrow-down"></i></a>';
//                                tabla += '</th>';
//                            } else {
//                                tabla += '<th>' + value;
//                                tabla += '<br /><a class="orderAsc' + index + '" href="#"><i class="glyphicon glyphicon-arrow-up"></i></a>';
//                                tabla += '<a class="orderDesc' + index + '" href="#"><i class="glyphicon glyphicon-arrow-down"></i></a>';
//                                tabla += '</th>';
//                            }
//                        }
//                    }
//                    if (numField == visibleFields + 1) {
//                        tabla += '<th class="col-md-2">acciones</th>';
//                    }
//
//                });
//                tabla += '</tr>';
//            }
//
//            page = objeto.getPage(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue)['list'];
//            if (page != 0) {
//                $.each(page, function(index, value) {
//                    tabla += '<tr>';
//                    numField = 0;
//                    $.each(objeto.getFieldNames(), function(index, valor) {
//                        if ("id" == valor) {
//                            id = valor;
//                        }
//                        numField++;
//                        if (numField <= visibleFields) {
//                            if (/id_/.test(valor)) {
//                                $.when(ajaxCallSync(objeto.getPath() + '/json?ob=' + valor.split("_")[1].replace(/[0-9]*$/, "") + '&op=get&id=' + value[valor], 'GET', '')).done(function(data) {
//                                    contador = 0;
//                                    add_tabla = "";
//                                    for (key in data) {
//                                        if (contador == 0)
//                                            add_tabla = '<td>id=' + data[key] + '(no existe)</td>';
//                                        if (contador == 1)
//                                            add_tabla = '<td>' + data[key] + '</td>';
//                                        contador++;
//                                    }
//                                    if (contador == 0) {
//                                        add_tabla = '<td>' + value[valor] + ' #error</td>';
//                                    }
//                                    tabla += add_tabla;
//                                });
//                            } else {
//                                switch (value[valor]) {
//                                    case true:
//                                        tabla += '<td><i class="glyphicon glyphicon-ok"></i></td>';
//                                        break;
//                                    case false:
//                                        tabla += '<td><i class="glyphicon glyphicon-remove"></i></td>';
//                                        break;
//                                    default:
//                                        var fieldContent = decodeURIComponent(value[valor]);
//                                        if (typeof fieldContent == "string") {
//
//                                            if (value[valor].length > 50) //don't show too long fields
//                                                fieldContent = decodeURIComponent(value[valor]).substr(0, 20) + " ...";
//
//                                        }
//                                        tabla += '<td>' + fieldContent + '</td>';
//                                }
//                            }
//                        }
//                    });
//
//                    tabla += '<td><div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
//                    if (callback) {
//
//                    } else {
//                        tabla += '<a class="btn btn-default" href="jsp#/' + vista.getName() + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i> ' + valor.text + '</a>';
//                        tabla += '<a class="btn btn-default" href="jsp#/' + vista.getName() + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i> ' + valor.text + '</a>';
//                        tabla += '<a class="btn btn-default" href="jsp#/' + vista.getName() + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i> ' + valor.text + '</a>';
//                    }
//                    tabla += '</div></div></td>';
//                    tabla += '</tr>';
//                });
//                tabla += "</table>";
//            } else {
//                tabla = "<div class=\"alert alert-info\"><h4>Ha habido un problema con la base de datos</h4><br/>El probema puede ser:<ul><li>La tabla está vacia.</li><li>Tu busqueda no tubo resultados.</li></ul></div>";
//            }
//
//            return tabla;
//
//        }
    };

};



