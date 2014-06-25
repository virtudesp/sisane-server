//MODELO
var objeto = function(clase, ContextPath) {
    //contexto privado
    var urlDatos = ContextPath + '/json?ob=' + clase;
    return {
        //contexto público (interface)
        getName: function() {
            return clase;
        },
        getGenericOperation: function(operation, id) {
            $.when(ajaxCallSync(urlDatos + '&op=' + operation + "&id=" + id, 'GET', '')).done(function(data) {
                resultado = data['data'];
            });
            return resultado;
        },
        getPrettyFieldNames: function() {
            $.when(ajaxCallSync(urlDatos + '&op=getcolumns', 'GET', '')).done(function(data) {
                prettyFieldNames = data['data'];
            });
            return prettyFieldNames;
        },
        getPrettyFieldNamesAcciones: function() {
            $.when(ajaxCallSync(urlDatos + '&op=getcolumns', 'GET', '')).done(function(data) {
                prettyFieldNames = data['data'];
                prettyFieldNames.push("acciones");

            });
            return prettyFieldNames;
        },
        getCountFields: function() {
            $.when(ajaxCallSync(urlDatos + '&op=getcolumns', 'GET', '')).done(function(data) {
                countFields = data['data'].length;
            });
            return countFields;
        },
        getFieldNames: function() {
            $.when(ajaxCallSync(urlDatos + '&op=getcolumns', 'GET', '')).done(function(data) {
                fieldNames = data['data'];
            });
            return fieldNames;
        },
        getPage: function(pagina, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            if (order) {
                orderParams = '&order=' + order + '&ordervalue=' + ordervalue;
            } else {
                orderParams = "";
            }
            if (filter) {
                filterParams = "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
            } else {
                filterParams = "";
            }
            if (systemfilter) {
                systemfilterParams = "&systemfilter=" + systemfilter + "&systemfilteroperator=" + systemfilteroperator + "&systemfiltervalue=" + systemfiltervalue;
            } else {
                systemfilterParams = "";
            }
            $.when(ajaxCallSync(urlDatos + '&op=getpage' + filterParams + '&rpp=' + rpp + orderParams + '&page=' + pagina + systemfilterParams, 'GET', '')).done(function(data) {
                pagina_objs = data; //decodeURI htmlDecode
            });
            return pagina_objs;
        },
        getPages: function(rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            if (filter) {
                filterParams = "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
            } else {
                filterParams = "";
            }
            if (systemfilter) {
                systemfilterParams = "&systemfilter=" + systemfilter + "&systemfilteroperator=" + systemfilteroperator + "&systemfiltervalue=" + systemfiltervalue;
            } else {
                systemfilterParams = "";
            }
            $.when(ajaxCallSync(urlDatos + '&op=getpages' + filterParams + '&rpp=' + rpp + systemfilterParams, 'GET', '')).done(function(data) {
                pages = data['data'];
            });
            return pages;
        },
        getRegisters: function(filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            if (filter) {
                filterParams = "&filter=" + filter + "&filteroperator=" + filteroperator + "&filtervalue=" + filtervalue;
            } else {
                filterParams = "";
            }
            if (systemfilter) {
                systemfilterParams = "&systemfilter=" + systemfilter + "&systemfilteroperator=" + systemfilteroperator + "&systemfiltervalue=" + systemfiltervalue;
            } else {
                systemfilterParams = "";
            }
            $.when(ajaxCallSync(urlDatos + '&op=getregisters' + filterParams + systemfilterParams, 'GET', '')).done(function(data) {
                regs = data['data'];
            });
            return regs;
        },
        getAll: function() {
            $.when(ajaxCallSync(urlDatos + '&op=getall', 'GET', '')).done(function(data) {
                one = data;
            });
            return one;
        },
        getOne: function(id1) {
            $.when(ajaxCallSync(urlDatos + '&op=get&id=' + id1, 'GET', '')).done(function(data) {
                one = data;
            });
            return one;
        },
        saveOne: function(jsonfile) {
            $.when(ajaxCallSync(urlDatos + '&op=save', 'GET', jsonfile)).done(function(data) {
                feedback = data;
            });
            return feedback;
        },
        removeOne: function(id) {
            $.when(ajaxCallSync(urlDatos + '&op=remove&id=' + id, 'GET', '')).done(function(data) {
                feedback = data;
            });
            return feedback;
        }
    };
};
//VISTA
var vista = function(objeto, ContextPath) {
    //contexto privado
    var link = "#";
    var neighborhood = 2;
    var urlDatos = ContextPath + '/jsp?ob=' + objeto.getName();
    return {
        //contexto público (interface)
        getName: function() {
            return objeto.getName();
        },
        getObject: function() {
            return objeto;
        },
        getLoading: function() {
            return '<img src="fonts/ajax-loading.gif" alt="cargando..." />';
        },
        getRegisterTableView: function(place, id) {
            $(place).empty().append("<h1>Vista de " + this.getName() + "</h1>");
            $(place).append((this.getObjectTable(id)));
            $(place).append('<a class="btn btn-primary" href="jsp#/' + this.getName() + '/edit/' + id + '">Editar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/' + this.getName() + '/remove/"' + id + '">Borrar</a>');
            $(place).append('<a class="btn btn-primary" href="jsp#/' + this.getName() + '/list/"' + id + '">Volver</a>');
        },
        getPageLinks: function(page_number, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            page_number = parseInt(page_number);
            total_pages = parseInt(objeto.getPages(rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue));
            neighborhood = parseInt(neighborhood);
            vector = "<ul class=\"pagination\">";
            if (page_number > 1)
                vector += ("<li><a class=\"pagination_link\" id=\"" + (page_number - 1) + "\" href=\"" + link + (page_number - 1) + "\">prev</a></li>");
            if (page_number > neighborhood + 1)
                vector += ("<li><a class=\"pagination_link\" id=\"1\" href=\"" + link + "1\">1</a></li>");
            if (page_number > neighborhood + 2)
                vector += ("<li>" + "<a href=\"#\">...</a>" + "</li>");
            for (i = (page_number - neighborhood); i <= (page_number + neighborhood); i++) {
                if (i >= 1 && i <= total_pages) {
                    if (page_number === i) {
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
            vector += "</ul>";
            return vector;
        },
        getPageTable: function(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue, botonera) {
            var tabla = "<table class=\"table table-responsive table-hover table-striped table-condensed\">";
            var visibleFields = 5;
            var numField = 0; //visible field counter
            if (objeto.getPrettyFieldNamesAcciones() !== null) {
                tabla += '<tr>';
                $.each(objeto.getPrettyFieldNamesAcciones(), function(index, value) {
                    numField++; //field counter
                    if (numField <= visibleFields) {
                        if (value === "acciones") {
                            tabla += '<th class="col-md-2">' + value;
                            tabla += '</th>';
                        } else {
                            if (value === "id") {
                                tabla += '<th class="col-md-1">' + value;
                                tabla += '<br /><a class="orderAsc' + index + '" href="#"><i class="glyphicon glyphicon-arrow-up"></i></a>';
                                tabla += '<a class="orderDesc' + index + '" href="#"><i class="glyphicon glyphicon-arrow-down"></i></a>';
                                tabla += '</th>';
                            } else {
                                tabla += '<th>' + value;
                                tabla += '<br /><a class="orderAsc' + index + '" href="#"><i class="glyphicon glyphicon-arrow-up"></i></a>';
                                tabla += '<a class="orderDesc' + index + '" href="#"><i class="glyphicon glyphicon-arrow-down"></i></a>';
                                tabla += '</th>';
                            }
                        }
                    }
                    if (numField == visibleFields + 1) {
                        tabla += '<th class="col-md-2">acciones</th>';
                    }

                });
                tabla += '</tr>';
            }

            page = objeto.getPage(pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue)['list'];
            if (page != 0) {
                $.each(page, function(index, value) {
                    tabla += '<tr>';
                    numField = 0;
                    $.each(objeto.getFieldNames(), function(index, valor) {
                        numField++;
                        if (numField <= visibleFields) {
                            if (/id_/.test(valor)) {
                                $.when(ajaxCallSync(ContextPath + '/json?ob=' + valor.split("_")[1].replace(/[0-9]*$/, "") + '&op=get&id=' + value[valor], 'GET', '')).done(function(data) {
                                    contador = 0;
                                    add_tabla = "";
                                    for (key in data) {
                                        if (contador == 0)
                                            add_tabla = '<td>id=' + data[key] + '(no existe)</td>';
                                        if (contador == 1)
                                            add_tabla = '<td>' + data[key] + '</td>';
                                        contador++;
                                    }
                                    if (contador == 0) {
                                        add_tabla = '<td>' + value[valor] + ' #error</td>';
                                    }
                                    tabla += add_tabla;
                                });
                            } else {
                                switch (value[valor]) {
                                    case true:
                                        tabla += '<td><i class="glyphicon glyphicon-ok"></i></td>';
                                        break;
                                    case false:
                                        tabla += '<td><i class="glyphicon glyphicon-remove"></i></td>';
                                        break;
                                    default:
                                        var fieldContent = decodeURIComponent(value[valor]);
                                        if (typeof fieldContent == "string") {

                                            if (value[valor].length > 50) //don't show too long fields
                                                fieldContent = decodeURIComponent(value[valor]).substr(0, 20) + " ...";

                                        }
                                        tabla += '<td>' + fieldContent + '</td>';
                                }
                            }
                        }
                    });

                    tabla += '<td><div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';

                    $.each(botonera, function(indice, valor) {
                        tabla += '<a class="' + valor.class + '" id=' + value.id + ' href="#"><i class="' + valor.icon + '"></i> ' + valor.text + '</a>';
                    });
                    tabla += '</div></div></td>';
                    tabla += '</tr>';
                });
                tabla += "</table>";
            } else {
                tabla = "<div class=\"alert alert-info\"><h4>Ha habido un problema con la base de datos</h4><br/>El probema puede ser:<ul><li>La tabla está vacia.</li><li>Tu busqueda no tubo resultados.</li></ul></div>";
            }

            return tabla;
        },
        getObjectTable: function(id) {
            cabecera = objeto.getPrettyFieldNames();
            datos = objeto.getOne(id);
            var tabla = "<table class=\"table table table-bordered table-condensed\">";
            $.each(objeto.getFieldNames(), function(index, valor) {

                tabla += '<tr><td><strong>' + cabecera[index] + '</strong></td>';
                tabla += '<td>';
                if (/id_/.test(valor)) {
                    if (datos[valor] == 0) {
                        tabla += "nulo" + ', <strong> id:0 </strong>';
                    } else {
                        $.when(ajaxCallSync(ContextPath + '/json?ob=' + valor.split("_")[1].replace(/[0-9]*$/, "") + '&op=get&id=' + datos[valor], 'GET', '')).done(function(data) {
                            contador = 0;
                            add_tabla = "";
                            for (key in data) {
                                if (contador === 0)
                                    add_tabla = data[key];
                                if (contador === 1)
                                    add_tabla = data[key] + ', <strong> id: </strong>' + datos[valor];
                                //if (contador > 1)
                                //add_tabla = ", " + data[key].substr(0, 8)  + "... ";  
                                contador++;
                            }
                            if (contador === 0) {
                                add_tabla = datos[valor] + ' #error';
                            }
                            tabla += add_tabla;
                        });
                    }
                }
                else {
                    switch (datos[valor]) {
                        case true:
                            tabla += '<i class="glyphicon glyphicon-ok"></i>';
                            break;
                        case false:
                            tabla += '<i class="glyphicon glyphicon-remove"></i>';
                            break;
                        default:
                            tabla += decodeURIComponent(datos[valor]);
                    }
                    tabla += '</td></tr>';
                }
            });
            tabla += '</table>';
            return tabla;
        },
        getEmptyList: function() {
            $.when(ajaxCallSync(urlDatos + '&op=list&mode=1', 'GET', '')).done(function(data) {
                form = data;
            });
            return form;
        },
        getEmptyDiv: function() {
            return '<div id="content"></div>';
        },
        getEmptyForm: function() {
            $.when(ajaxCallSync(urlDatos + '&op=form&mode=1', 'GET', '')).done(function(data) {
                form = data;
            });
            return form;
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
        getRegistersInfo: function(filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            regs = this.getObject().getRegisters(filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue);
            return "<p>Mostrando una consulta de " + regs + " registros.</p>";
        },
        getOrderInfo: function(order, ordervalue) {
            if (order) {
                strOrder = "<p>Contenido ordenado por " + order + " (" + ordervalue + ') <a href="#" id="linkQuitarOrden">(Quitar orden)</a></p>';
            } else {
                strOrder = "<p>Contenido no ordenado</p>";
            }
            return strOrder;
        },
        getFilterInfo: function(filter, filteroperator, filtervalue) {
            if (filter) {
                strFilter = "<p>Contenido filtrado (" + filter + " " + filteroperator + " " + filtervalue + ') <a href="#" id="linkQuitarFiltro">(Quitar filtro)</a></p>';
            } else {
                strFilter = "<p>Contenido no filtrado</p>";
            }
            return strFilter;
        }
    };

};


