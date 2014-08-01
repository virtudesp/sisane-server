//MODELO
var objeto = function(clase, ContextPath) {
    //contexto privado
    var urlJson = ContextPath + '/json?ob=' + clase;
    var urlJsp = ContextPath + '/jsp?ob=' + clase;
    //cache vars
    var cFieldNames = null;
    var cPrettyFieldNames = null;
    var cPrettyFieldNamesAcciones = null;
    var cCountFields = null;
    var cPage = null;
    var cPages = null;
    var cRegisters = null;
    return {
        //contexto público (interface)
        getName: function() {
            return clase;
        },
        getView: function(pagina, order, ordervalue, rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
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
            $.when(ajaxCallSync(urlJson + '&op=getview' + filterParams + '&rpp=' + rpp + orderParams + '&page=' + pagina + systemfilterParams, 'GET', '')).done(function(data) {
                pagina_objs = data; //decodeURI htmlDecode
            });
            //return pagina_objs;
            cFieldNames = pagina_objs.data.columns;
            cCountFields = cFieldNames.length;
            cPrettyFieldNames = pagina_objs.data.prettyColumns;
            cPrettyFieldNamesAcciones = cPrettyFieldNames;
            cPrettyFieldNamesAcciones.push("acciones");
            cPage = pagina_objs.data.page.list;
            cPages = pagina_objs.data.pages.data;
            cRegisters = pagina_objs.data.registers.data;
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
            if (cPrettyFieldNames == null) {
                $.when(ajaxCallSync(urlJson + '&op=getprettycolumns', 'GET', '')).done(function(data) {
                    prettyFieldNames = data;
                    cPrettyFieldNames = data;
                });
            } else {
                prettyFieldNames = cPrettyFieldNames;
            }
            return prettyFieldNames;
        },
        getPrettyFieldNamesAcciones: function() {
            if (cPrettyFieldNamesAcciones == null) {
                $.when(ajaxCallSync(urlJson + '&op=getprettycolumns', 'GET', '')).done(function(data) {
                    prettyFieldNames = data;
                    prettyFieldNames.push("acciones");
                    cPrettyFieldNamesAcciones = prettyFieldNames;
                    //prettyFieldNames = data['data'];
                    //prettyFieldNames.push("acciones");
                });
            } else {
                prettyFieldNames = cPrettyFieldNamesAcciones;
            }
            return prettyFieldNames;
        },
        getCountFields: function() {
            if (cCountFields == null) {
                $.when(ajaxCallSync(urlJson + '&op=getcolumns', 'GET', '')).done(function(data) {
                    //countFields = data['data'].length;
                    countFields = data.length;
                    cCountFields = countFields;
                });
            } else {
                countFields = cCountFields;
            }
            return countFields;
        },
        getFieldNames: function() {
            if (cFieldNames == null) {
            $.when(ajaxCallSync(urlJson + '&op=getcolumns', 'GET', '')).done(function(data) {
                //fieldNames = data['data'];
                dataFieldNames = data;
                cFieldNames=dataFieldNames;
            });
             } else {
                dataFieldNames = cFieldNames;
            }
            return dataFieldNames;
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
            if (cPage == null) {
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
                    pagina_objs = data.list; //decodeURI htmlDecode
                    cPage = data.list;
                });
            } else {
                pagina_objs = cPage;
            }
            return pagina_objs;
        },
        getPages: function(rpp, filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            if (cPages == null) {
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
                    cPages = data['data'];
                });
            } else {
                pages = cPages;
            }
            return pages;
        },
        getRegisters: function(filter, filteroperator, filtervalue, systemfilter, systemfilteroperator, systemfiltervalue) {
            if (cRegisters == null) {
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
                    cRegisters = data['data'];
                });
            } else {
                regs = cRegisters;
            }
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
