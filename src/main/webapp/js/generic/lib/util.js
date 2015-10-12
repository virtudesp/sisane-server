/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/openAUSIAS
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var broth = {
   

    notifyException: function (errorStatus, errorMessage) {
        console.log("Error " + errorStatus + ": " + errorMessage);
        return "Error " + errorStatus + ": " + errorMessage;
    },
    
    delay: function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    }
}

var ns = {


    view: {

//        printValue: function (value, valor, recortar) {
//            var thisObject = this;
//            var strResult = "";
//            if (/obj_/.test(valor)) {
//                if (value[valor].id > 0) {
//                    strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + util().getForeign(value[valor]) + '</a>';
//                } else {
//                    strResult = '???';
//                }
//            } else {
//                switch (value[valor]) {
//                    case true:
//                        strResult = '<i class="glyphicon glyphicon-ok"></i>';
//                        break;
//                    case false:
//                        strResult = '<i class="glyphicon glyphicon-remove"></i>';
//                        break;
//                    default:
//                        strResult = decodeURIComponent(value[valor]);
//                        //if (typeof fieldContent == "string") {
//                        if (recortar)
//                            if (strResult.length > 50) //don't show too long fields
//                                strResult = strResult.substr(0, 20) + " ...";
//                        //}
//                }
//                ;
//            }
//            ;
//            return strResult;
//        },
//        printObjectValue: function (meta, valor, name) {
//            var desc = "";
//            $.each(meta, function (index, metaValue) {
//                if (metaValue.IsForeignKeyDescriptor) {
//                    desc += valor[metaValue.Name] + " ";
//                }
//            })
//            return '<a href="#/' + name + '/view/' + valor.id + '">' + valor.id + ": " + broth.clipString(desc) + '</a>';
//        },
//        printObjectValue2: function (value) {
//            var arr_metadata = _.map(value.data.meta, function (oMeta) {
//                if (oMeta.IsForeignKeyDescriptor) {
//                    return  value.data.bean[oMeta.Name];
//                } else {
//                    return "";
//                }
//            });
//            var strForeign = arr_metadata.join(' ');
//            return '<a href="#/' + value.meta.ReferencesTable + '/view/' + value.data.bean.id + '">' + value.data.bean.id + ": " + broth.clipString(strForeign, 30) + '</a>';
//        },
       

//        getEmptyDiv: function() {
//            return '<div id="content"></div>';
//        }        ,
//        getObjectTable: function (nombresCamposBonitos, valoresRegistro, nombresCampos) {
//            var thisObject = this;
//            var tabla = "<table class=\"table table table-bordered table-condensed\">";
//            $.each(nombresCampos, function (index, nombreDeCampo) {
//                tabla += '<tr><td><strong>' + nombresCamposBonitos[index] + '</strong></td>';
//                tabla += '<td>' + thisObject.printValue(valoresRegistro, nombreDeCampo, false) + '</td>';
//            });
//            tabla += '</table>';
//            return tabla;
//        }
//        ,

//        getHeaderPageTable: function (prettyFieldNames, fieldNames, visibleFields, UrlFromParamsWithoutOrder) {
//            var strNombreClase = this.clase;
//            var numField = 0; //visible field counter
//            var tabla = "";
//            if (prettyFieldNames !== null) {
//                tabla += '<tr>';
//                $.each(prettyFieldNames, function (index, value) {
//                    numField++; //field counter
//                    if (numField <= visibleFields) {
////                        if (value === "acciones") {
////                            tabla += '<th class="col-md-2">' + value;
////                            tabla += '</th>';
////                        } else {
//                        if (fieldNames[numField - 1] === "id") {
//                            tabla += '<th class="col-md-1">' + value;
//                        } else {
//                            tabla += '<th>' + value;
//                        }
//                        ;
//                        if (fieldNames[numField - 1].substr(0, 4) == "obj_") {
//                            fieldName = fieldNames[numField - 1].substring(4);
//                            fieldName = "id_" + fieldName;
//                        } else {
//                            fieldName = fieldNames[numField - 1];
//                        }
//                        ;
//                        tabla += '<br />';
//                        tabla += '<a class="orderAsc" id="' + fieldName + '" href="jsp#/' + strNombreClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + fieldName + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
//                        tabla += '<a class="orderDesc" id="' + fieldName + '" href="jsp#/' + strNombreClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + fieldName + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
//                        tabla += '</th>';
//                    }
//                });
//                tabla += '<th class="col-md-2">acciones</th>';
//                tabla += '</tr>';
//            }
//            ;
//            return tabla;
//        },
//        getBodyPageTable: function (page, fieldNames, visibleFields, tdbuttons) {
//            var thisObject = this;
//            var tabla = "";
//            $.each(page, function (index, value) {
//                tabla += '<tr>';
//                var numField = 0;
//                var id;
//                var strClaveAjena;
//                $.each(fieldNames, function (index, valor) {
//                    if ("id" == valor) {
//                        id = value[valor];
//                    }
//                    ;
//                    numField++;
//                    if (numField <= visibleFields) {
//                        tabla += '<td>' + thisObject.printValue(value, valor, true) + '</td>';
//                    }
//                });
//                tabla += '<td>';
//                tabla += tdbuttons(id);
//                tabla += '</td>';
//                tabla += '</tr>';
//            });
//            return tabla;
//        },
 

    },
    util: {
//        nofunction: function () {
//
//        },
////        getRequestsUrl: function () {
////            return location.protocol + '//' + location.hostname + ':' + location.port + '/' + this.getAppName() + '/json';
////        },
//        setSpinner: function (htmlSpinner) {
//            spinner = htmlSpinner;
//        },
        getInputTypeTextLenght: function (intMaxLenght) {
            if (intMaxLenght <= 255) {
                if (intMaxLenght <= 200) {
                    if (intMaxLenght <= 150) {
                        if (intMaxLenght <= 100) {
                            if (intMaxLenght <= 50) {
                                if (intMaxLenght <= 25) {
                                    return 3;
                                } else {
                                    return 4;
                                }
                                ;
                            } else {
                                return 5;
                            }
                            ;
                        } else {
                            return 6;
                        }
                        ;
                    } else {
                        return 7;
                    }
                    ;
                } else {
                    return 8;
                }
                ;
            } else {
                return 9;
            }
            ;
        },

//        getSpinner2: function() {
//            return '<img src="images/ajax-loading.gif" alt="cargando..." />';
//        },
        getForeign: function (objForeign) {
            //falta organizar con metadatos para mostrar sólo los campos relevantes
            var numKeys = Object.keys(objForeign).length;
            var strResult = "";
            var counter;
            for (counter = 0; counter < numKeys - 1; counter++) {
                if (Object.keys(objForeign)[counter] != 'password') {
                    if (Object.keys(objForeign)[counter].substring(0, 4) != 'obj_') {
                        var valor;
                        valor = objForeign[Object.keys(objForeign)[counter]];
                        if (valor != true && valor != false)
                            strResult += " " + valor;
                    }
                }
            }
            //if (typeof fieldContent == "string") {
            if (strResult.length > 50) //don't show too long fields
                strResult = strResult.substr(0, 20) + " ...";
            return strResult;
        },
        getIntegerArray: function (min, max) {
            var iArray = [];
            for (var counter = min; counter <= max; counter++) {
                iArray.push(counter);
            }
            return iArray;
        },
        linkBack: function () {
            history.back();
            return false;
        },
        createGhostDiv: function (id, data) {
            var divContainer = $('<div>').attr({
                id: id
            });
            $('body').append(divContainer);
            $('#' + id).append(data);
        },
        creoleParse: function (content, lugar) {
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
        },
        replaceObjxId: function (arrFields) {

            var arrayLength = arrFields.length;
            for (var i = 0; i < arrayLength; i++) {
                arrFields[i] = arrFields[i].replace('obj', 'id');
            }
            return arrFields;
        }
    },
    ajax: {
        callSync: function (url, type, data) {
            return $.ajax({
                type: type,
                url: url,
                data: data,
                async: false,
                timeout: 30000
            });
        },
        callASync: function (url, type, data, callBackFunction) {
            return $.ajax({
                type: type,
                url: url,
                data: data,
                async: true,
                timeout: 30000,
                success: callBackFunction
            });
        },
        call: function (direccion, funcion) {
            $.ajax({
                url: direccion,
                //data: "nocache=" + Math.random(),
                type: "GET",
                dataType: "json",
                beforeSend: function () {
                },
                success: function (source) {
                    $("#data").empty();
                    funcion(source);
                },
                error: function (dato) {
                    $("#data").empty();
                    $("#data").append("ERROR en la recepción de datos de clientes");
                }
            });
        },
    },
    html: {
       
//        buttonBars: {
////            loadButtons: function (id) {
////                var botonera = "";
////                botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
////                botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
////                botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
////                botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
////                botonera += '</div></div>';
////                return botonera;
////            },
//           
//        },
//        tags: {
//            p: function (strText) {
//                return '<p>' + strText + '</p>';
//            },
//            h1: function (strText) {
//                return '<h1>' + strText + '</h1>';
//            }
//        },
//        modal: {
            
//            fillAndload: function (modalName, headerData, bodyData, footerData, keyb) {
//                $(modalName + ' .modal-header').empty().append(headerData);
//                $(modalName + ' .modal-body').empty().append(bodyData);
//                $(modalName + ' .modal-footer').empty().append(footerData);
//                $(modalName).modal({
//                    keyboard: keyb
//                })
//            },
           
//        },
        
//        listGroup: {
//            getListGroup: function (params) {
//                var listg = '<div class="list-group">';
//                $.each(params, function (index, value) {
//                    listg += '<a href="' + value.url + '" class="list-group-item">';
//                    listg += '<span class="liste' + index + '">' + value.badgeText + '</span>';
//                    listg += '<i class="fa fa-fw ' + value.icon + '"></i> ' + value.listText;
//                    listg += '</a>';
//                });
//                return listg + '</div>';
//            }
//        },
 
        
        
    }

};






