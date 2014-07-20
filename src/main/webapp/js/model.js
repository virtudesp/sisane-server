//MODELO
var objeto = function(clase, ContextPath) {
    //contexto privado
    var urlJson = ContextPath + '/json?ob=' + clase;
    var urlJsp = ContextPath + '/jsp?ob=' + clase;
    return {
        //contexto público (interface)
        getName: function() {
            return clase;
        },
        getPath: function() {
            return ContextPath;
        },
        getUrlJson: function() {
            return urlJson;
        },
        getUrlJsp: function() {
            return urlJsp;
        },
        validateUser: function(user, password) {
            $.when(ajaxCallSync(urlJson + '&op=validate&user=' + user + "&password=" + password, 'GET', '')).done(function(data) {
                resultado = data['data'];
            });
            return resultado;
        },
        getGenericOperation: function(operation, id) {
            $.when(ajaxCallSync(urlJson + '&op=' + operation + "&id=" + id, 'GET', '')).done(function(data) {
                resultado = data['data'];
            });
            return resultado;
        },
        getPrettyFieldNames: function() {
            $.when(ajaxCallSync(urlJson + '&op=getprettycolumns', 'GET', '')).done(function(data) {
                prettyFieldNames = data;
            });
            return prettyFieldNames;
        },
        getPrettyFieldNamesAcciones: function() {
            $.when(ajaxCallSync(urlJson + '&op=getprettycolumns', 'GET', '')).done(function(data) {
                prettyFieldNames = data;
                data.push("acciones");
                //prettyFieldNames = data['data'];
                //prettyFieldNames.push("acciones");

            });
            return prettyFieldNames;
        },
        getCountFields: function() {
            $.when(ajaxCallSync(urlJson + '&op=getcolumns', 'GET', '')).done(function(data) {
                //countFields = data['data'].length;
                countFields = data.length;
            });
            return countFields;
        },
        getFieldNames: function() {
            $.when(ajaxCallSync(urlJson + '&op=getcolumns', 'GET', '')).done(function(data) {
                //fieldNames = data['data'];
                fieldNames = data;
            });
            return fieldNames;
        },
        getForeignKey: function(id, campo) {
//            //pte
//            //con la id sacamos el registro
//            //con el campo sacamos la id de la clave ajena
            registro = this.getOne(id);
            idAjena = registro[campo];
            //hay que obtener el nombre del campo
            var objetoForeign = campo.split("_")[1].replace(/[0-9]*$/, "");
            var foreignObject = objeto(objetoForeign, ContextPath);
            var registroForeign = foreignObject.getOne(idAjena);
            return registroForeign;
//            
//            //falta comprobaciones
//            
//            $.when(ajaxCallSync(ContextPath + '/json?ob=' + objetoForeign + '&op=get&id=' + value[valor], 'GET', '')).done(function(data) {
//                var contador = 0;
//                var add_tabla = "";
//                for (key in data) {
//                    if (contador == 0)
//                        add_tabla = '<td>id=' + data[key] + '(no existe)</td>';
//                    if (contador == 1)
//                        add_tabla = '<td>' + data[key] + '</td>';
//                    contador++;
//                }
//                if (contador == 0) {
//                    add_tabla = '<td>' + value[valor] + ' #error</td>';
//                }
//                tabla += add_tabla;
//            });
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
            $.when(ajaxCallSync(urlJson + '&op=getpage' + filterParams + '&rpp=' + rpp + orderParams + '&page=' + pagina + systemfilterParams, 'GET', '')).done(function(data) {
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
            $.when(ajaxCallSync(urlJson + '&op=getpages' + filterParams + '&rpp=' + rpp + systemfilterParams, 'GET', '')).done(function(data) {
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
            $.when(ajaxCallSync(urlJson + '&op=getregisters' + filterParams + systemfilterParams, 'GET', '')).done(function(data) {
                regs = data['data'];
            });
            return regs;
        },
        getAll: function() {
            $.when(ajaxCallSync(urlJson + '&op=getall', 'GET', '')).done(function(data) {
                one = data;
            });
            return one;
        },
        getOne: function(id1) {
            $.when(ajaxCallSync(urlJson + '&op=get&id=' + id1, 'GET', '')).done(function(data) {
                one = data;
            });
            return one;
        },
        saveOne: function(jsonfile) {
            $.when(ajaxCallSync(urlJson + '&op=save', 'GET', jsonfile)).done(function(data) {
                feedback = data;
            });
            return feedback;
        },
        removeOne: function(id) {
            $.when(ajaxCallSync(urlJson + '&op=remove&id=' + id, 'GET', '')).done(function(data) {
                feedback = data;
            });
            return feedback;
        }
    };
};
