/*
 * Copyright (C) 2015 rafa
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



var ns = {
    strings: {
        replaceAll: function (str, search, rpl) {
            return str.split(search).join(rpl);
        },
        clipValue: function (strResult) {
            if (strResult.length > 30)
                return strResult.substr(0, 30).trim() + " ...";
            else
                return strResult.trim();
        },
        safe_tags_replace: function (str) {
            return str.replace(/[&<>]/g, function (tag) {
                var tagsToReplace = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;'
                }
                return tagsToReplace[tag] || tag;
            });
        },
        escapeHtml: function (unsafe) {
            if (typeof (unsafe) === 'string') {
                return unsafe
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")
                        .replace(/"/g, "&quot;")
                        .replace(/'/g, "&#039;");
            } else
                return unsafe;

        },
        print: function (value) {
            return ns.strings.escapeHtml(decodeURIComponent(value));
        },
        printForeignValue: function (meta, valor, recortar) {

        },
        printValue: function (meta, valor, recortar) {
            var strResult = "";
            if (meta.IsObjForeignKey) {
                strResult = "obj";
                
                
                ns.view.printObjectValue(rowValues[metaValue.MyMetaName], rowValues[metaValue.Name],metaValue.ReferencesTable)
                
            } else {
                switch (meta.Type) {
                    case 'Boolean':
                        if (valor == true) {
                            strResult = '<i class="glyphicon glyphicon-ok"></i>';
                        } else {
                            strResult = '<i class="glyphicon glyphicon-remove"></i>';
                        }
                        break;
                    default:
                        strResult = ns.strings.print(valor);
                        if (recortar)
                            if (strResult.length > 30)
                                strResult = strResult.substr(0, 30) + " ...";
                }
            }
            return strResult;
        },
        printPlainValue: function (meta, valor, recortar) {
            var strResult = "";
            if (meta.IsObjForeignKey) {
                strResult = "obj";
            } else {
                switch (meta.Type) {
                    case 'Boolean':
                        if (valor == true) {
                            strResult = 'YES';
                        } else {
                            strResult = 'NO';
                        }
                        break;
                    default:
                        strResult = ns.strings.print(valor);
                        if (recortar)
                            if (strResult.length > 30)
                                strResult = strResult.substr(0, 30) + " ...";
                }
            }
            return strResult;
        }

    },
    arrays: {
        getArrayFromMultiSlicedArray: function (field, arrayToBeSliced) {
            var resultArray = [];
            $.each(arrayToBeSliced, function (index, value) {

                resultArray.push(value[field]);


            })
            return resultArray;
        },
        filterArray: function (strSearchTerm, arrayData) {
            var resultArray = [];
            $.each(arrayData, function (index1, value1) {
                thisValue1 = value1;
                $.each(value1, function (index2, value2) {

                    if ((new RegExp(strSearchTerm)).test(value2)) {
                        resultArray.push(thisValue1);
                        return false;
                    }
                })
            })
            return resultArray;
        }
    },
    view: {
        getClassName: function () {
            return this.clase;
        },
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
        printObjectValue: function (meta, valor, name) {
            var desc = "";
            $.each(meta, function (index, metaValue) {
                if (metaValue.IsForeignKeyDescriptor) {
                    desc += valor[metaValue.Name] + " ";
                }
            })
            return '<a href="#/' + name + '/view/' + valor.id + '">' + valor.id + ": " + ns.strings.clipValue(desc) + '</a>';
        },
        getSpinner: function () {
            return '<img src="images/ajax-loading.gif" alt="cargando..." />';
        },
//        getEmptyDiv: function() {
//            return '<div id="content"></div>';
//        }        ,
        getObjectTable: function (nombresCamposBonitos, valoresRegistro, nombresCampos) {
            var thisObject = this;
            var tabla = "<table class=\"table table table-bordered table-condensed\">";
            $.each(nombresCampos, function (index, nombreDeCampo) {
                tabla += '<tr><td><strong>' + nombresCamposBonitos[index] + '</strong></td>';
                tabla += '<td>' + thisObject.printValue(valoresRegistro, nombreDeCampo, false) + '</td>';
            });
            tabla += '</table>';
            return tabla;
        }
        ,
        doResultOperationNotifyToUser: function (place, resultadoStatus, resultadoMessage, id, mostrar) {
            var strNombreClase = this.clase;
            if (resultadoStatus == "200") {
                mensaje = "<h3>La operacion se ha ejecutado con éxito</h3>";
            } else {
                mensaje = "<h3>ERROR</h3>";
            }
            mensaje += "<h5>Código: " + resultadoStatus + "</h5><h5>" + resultadoMessage + "</h5>";
            $(place).append(this.getEmptyModal());
            util().loadForm('#modal01', this.getFormHeader('Respuesta del servidor'), mensaje, this.getFormFooter(), true);
            $('#modal01').css({
                'right': '20px',
                'left': '20px',
                'width': 'auto',
                'margin': '10px',
                'display': 'block'
            });
            if (mostrar && resultadoStatus == "200") {
                $('#modal01').on('hidden.bs.modal', function () {
                    window.location.href = "jsp#/" + strNombreClase + "/view/" + id;
                })
            } else {
                $('#modal01').on('hidden.bs.modal', function () {
                    $(place).empty();
                });
            }
            ;
        },
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
        doEventsLoading: function () {

        },
        okValidation: function (f) {
            $('#' + this.clase + 'Form').on('success.form.bv', f);
        }
    },
    util: {
        nofunction: function () {

        },
        getAppName: function () {
            var strPath = window.location.pathname;
            return strPath.substr(1, strPath.substr(1, strPath.length).indexOf('/'));
        },
        getRequestsUrl: function () {
            return location.protocol + '//' + location.hostname + ':' + location.port + '/' + this.getAppName() + '/json';
        },
        setSpinner: function (htmlSpinner) {
            spinner = htmlSpinner;
        },
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
        getSpinner: function () {
            return '<img src="images/ajax-loading.gif" alt="cargando..." />';
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
        htmlEncode: function (value) {
//create a in-memory div, set it's inner text(which jQuery automatically encodes)
//then grab the encoded contents back out.  The div never exists on the page.
            return $('<div/>').text(value).html();
        },
        htmlDecode: function (value) {
            return $('<div/>').html(value).text();
        },
        buttonBars: {
            loadButtons: function (id) {
                var botonera = "";
                botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
                botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
                botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
                botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
                botonera += '</div></div>';
                return botonera;
            },
            getPageLinks: function (url, page_number, total_pages, neighborhood) {
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
            getRppLinks: function (UrlFromParamsWithoutRpp, rpp) {
                var botonera = '<ul class="pagination">';
                if (rpp == 10)
                    botonera += '<li class="active">';
                else
                    botonera += '<li>';
                botonera += '<a class="rpp_link" id="10" href="' + UrlFromParamsWithoutRpp + '&rpp=10">10</a></li>';
                if (rpp == 50)
                    botonera += '<li class="active">';
                else
                    botonera += '<li>';
                botonera += '<a class="rpp_link" id="50" href="' + UrlFromParamsWithoutRpp + '&rpp=50">50</a></li>';
                if (rpp == 100)
                    botonera += '<li class="active">';
                else
                    botonera += '<li>';
                botonera += '<a class="rpp_link" id="100" href="' + UrlFromParamsWithoutRpp + '&rpp=100">100</a></li>';
//    if (objParams['rpp'] == 50)
//        botonera += '<li class="active">';
//    else
//        botonera += '<li>';
//    botonera += '<a class="rpp_link" id="50" href="jsp#/' + this.clase + '/list/' + UrlFromParamsWithoutRpp + '&rpp=50">50</a></li>';
                botonera += '</ul>';
                return botonera;
            },
        },
        tags: {
            p: function (strText) {
                return '<p>' + strText + '</p>';
            },
            h1: function (strText) {
                return '<h1>' + strText + '</h1>';
            }
        },
        modal: {
            getEmptyModal: function () {
                var modal = '<div id="modal01" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
                modal += '<div class="modal-dialog modal-lg">';
                modal += '<div class="modal-content">';
                modal += '<div class="modal-header" id="modal-header"></div>';
                modal += '<div class="modal-body" id="modal-body"></div>';
                modal += '<div class="modal-footer" id="modal-footer"></div>';
                modal += '</div>';
                modal += '</div>';
                modal += '</div>';
                return modal;
            },
            fillAndload: function (modalName, headerData, bodyData, footerData, keyb) {
                $(modalName + ' .modal-header').empty().append(headerData);
                $(modalName + ' .modal-body').empty().append(bodyData);
                $(modalName + ' .modal-footer').empty().append(footerData);
                $(modalName).modal({
                    keyboard: keyb
                })
            },
            load: function (modalName, keyb) {
                $(modalName).modal({
                    keyboard: keyb
                })
            },
        },
        form: {
            loadFormValues: function (valores, campos) {
                this.doFillForm(valores, campos);
            },
            getFormValues: function () {
                var valores = [];
                var disabled = $('#' + this.clase + 'Form').find(':input:disabled').removeAttr('disabled');
                valores = $('#' + this.clase + 'Form').serializeObject();
                disabled.attr('disabled', 'disabled');
                return valores;
            },
            getFormHeader: function (title) {
                cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
                cabecera += '<h1 id="myModalLabel">' + title + '</h1>';
                return cabecera;
            },
            getFormFooter: function () {
                return pie = '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
            },
            validation: {
                resetValidationForm: function () {
                    $(".feedback").remove();
                    $(".form-group").removeClass("has-success");
                    $(".form-group").removeClass("has-error");
                    $(".form-group").removeClass("has-feedback");
                },
                resetValidationControl: function (strIdAttr) {
                    $("#" + strIdAttr + "-group .feedback").remove();
                    $("#" + strIdAttr + "-group").removeClass("has-success");
                    $("#" + strIdAttr + "-group").removeClass("has-error");
                    $("#" + strIdAttr + "-group").removeClass("has-feedback");
                },
                showValidationErrorControl: function (strIdAttr, strMsg) {
                    $("#" + strIdAttr + "-group").addClass("has-error");
                    $("#" + strIdAttr + "-group").addClass("has-feedback");
                    $("#" + strIdAttr + "-group .control").append('<span class="feedback glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
                    $("#" + strIdAttr + "-group .control").append('<span class="feedback control-label" for="' + strIdAttr + '">' + strMsg + '</span>');
                },
                showValidationOKControl: function (strIdAttr) {
                    $("#" + strIdAttr + "-group").addClass("has-success");
                    $("#" + strIdAttr + "-group").addClass("has-feedback");
                    $("#" + strIdAttr + "-group .control").append('<span class="feedback glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
                },
                validateLeapYear: function (year) {
                    if ((year % 100 != 0) && ((year % 4 == 0) || (year % 400 == 0))) {
                        return true;
                    }
                    else {
                        return false;
                    }
                },
                validateSpanishDate: function (strDate) {
                    if (strDate != undefined && strDate.value != "") {
                        strDate = strDate.replace(/-/g, '/');
                        var expreg = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
                        if (!expreg.test(strDate)) {
                            return false;
                        }
                        //var intYear = parseInt(strDate.substring(0, 4));
                        //var strDay = strDate.substring(8, 10);
                        //var strMonth = strDate.substring(5, 7);

                        var intYear = parseInt(strDate.substring(6, 10));
                        var strDay = strDate.substring(0, 2);
                        var strMonth = strDate.substring(3, 5);
                        var nDays;
                        switch (strMonth) {
                            case "01":
                            case "03":
                            case "05":
                            case "07":
                            case "08":
                            case "10":
                            case "12":
                                nDays = 31;
                                break;
                            case "04":
                            case "06":
                            case "09":
                            case "11":
                                nDays = 30;
                                break;
                            case "02":
                                if (this.validateLeapYear(intYear)) {
                                    nDays = 29
                                } else {
                                    nDays = 28
                                }
                                ;
                                break;
                            default:
                                return false;
                        }

                        if (strDay > nDays || strDay == 0) {
                            return false;
                        }
                        return true;
                    }
                },
                validateNotempty: function (strString) {
                    if (strString) {
                        return true
                    } else {
                        return false;
                    }
                },
                validateEmail: function (strString) {
                    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
                    if (pattern.test(strString)) {
                        return true;
                    } else {
                        return false;
                    }
                },
                validateFloatNumber: function (strString) {
                    var pattern = /^-?\d+(\.\d+)?$/;
                    if (pattern.test(strString)) {
                        return true;
                    } else {
                        return false;
                    }
                },
                validateInteger: function (strString) {
                    var pattern = /^-?\d+$/;
                    if (pattern.test(strString)) {
                        return true;
                    } else {
                        return false;
                    }
                },
                validateMaxLength: function (intMaxLength, strString) {
                    if (strString.length > intMaxLength) {
                        return false;
                    } else {
                        return true;
                    }
                },
                validateMinLength: function (intMinLength, strString) {
                    if (strString.length < intMinLength) {
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            populateSelectBox: function (place, values, captions) {
                var combo = $(place);
                if (combo.is("select")) {
                    $.each(values, function (index) {
                        if (typeof captions === "undefined")
                            combo.append($("<option />").val(this).text(this));
                        else
                            combo.append($("<option />").val(this).text(captions[index]));
                    });
                }
            },
            doFillForm: function (meta, data) {
                var thisObject = this;
                $.each(meta, function (index, metaInfo) {
                    if (metaInfo.IsObjForeignKey) {
                        $('#' + metaInfo.MyObjIdName).val(decodeURIComponent(data[metaInfo.Name].id));
                        $('#' + metaInfo.MyObjIdName + "_desc").text(decodeURIComponent(data[metaInfo.Name].id + "desc"));
                    } else {

                        switch (metaInfo.Type) {
                            case 'Boolean':
                                if (data[metaInfo.Name]) {
                                    $('#' + metaInfo.Name).attr("checked", true);
                                } else {
                                    $('#' + metaInfo.Name).attr("checked", false);
                                }
                                break;
                            default:
                                ////$('#' + campos[index]).val(decodeURIComponent(datos[campos[index]]));
                                $('#' + metaInfo.Name).val(decodeURIComponent(data[metaInfo.Name]));
                        }
                    }


//                if (/obj_/.test(valor)) {
//                    $('#' + campos[index] + "_id").val(decodeURIComponent(datos[campos[index]].id));
//                    $('#' + campos[index] + "_desc").text(decodeURIComponent(util().getForeign(datos[campos[index]])));
//                    //$('#' + campos[index] + "_desc").text(decodeURIComponent(thisObject.getForeign(datos[campos[index]])));
//                } else {
//                    switch (datos[campos[index]]) {
//                        case true:
//                            $('#' + campos[index]).attr("checked", "checked");
//                            break;
//                        case false:
//                            $('#' + campos[index]).attr("checked", "");
//                            break;
//                        default:
//                            //$('#' + campos[index]).val(decodeURIComponent(datos[campos[index]]));
//                            $('#' + campos[index]).val(decodeURIComponent(thisObject.printValue(datos, valor, false)));
//                    }
//                    ;
//                }
//                ;
                });
            }
        },
        listGroup: {
            getListGroup: function (params) {
                var listg = '<div class="list-group">';
                $.each(params, function (index, value) {
                    listg += '<a href="' + value.url + '" class="list-group-item">';
                    listg += '<span class="liste' + index + '">' + value.badgeText + '</span>';
                    listg += '<i class="fa fa-fw ' + value.icon + '"></i> ' + value.listText;
                    listg += '</a>';
                });
                return listg + '</div>';
            }
        },
        tab: {
            getTab: function (params) {
                var tab1 = '';
                var tab2 = '';
                var ini = '<div role="tabpanel"><ul class="nav nav-tabs" role="tablist">';
                var midi = '</ul><div class="tab-content">';
                var fini = '</div></div>';
                $.each(params, function (index, value) {
                    if (index == 0) {
                        tab1 += '<li role="presentation" class="active"><a href="#pane' + index + '" aria-controls="pane' + index + '" role="tab" data-toggle="tab">' + value.name + '</a></li>';
                        tab2 += '<div role="tabpanel" id="pane' + index + '" class="tab-pane fade active in">' + value.content + '</div>';
                    } else {
                        tab1 += '<li role="presentation"><a href="#pane' + index + '" aria-controls="pane' + index + '" role="tab" data-toggle="tab">' + value.name + '</a></li>';
                        tab2 += '<div role="tabpanel" id="pane' + index + '" class="tab-pane fade">' + value.content + '</div>';
                    }
                });
                return (ini + tab1 + midi + tab2 + fini);
            }
        },
        panel: {
            getPanel: function (id, title, content) {
                return (
                        '<div class="panel panel-default">\n\
                            <div class="panel-heading">' + title + '</div>\n\
                            <div class="panel-body">\n\
                                <div class="text-center">\n\
                                    <div id="' + id + '">\n\
                            ' + content + '\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                        </div>'
                        );
            }
        },
        table: {
            getTable: function (headers, body) {
                return '<table class="table table-responsive table-bordered table-hover table-striped table-condensed dataTable no-footer">\
            <thead id="tableHeaders">' + headers + '</thead>\
            <tbody id="tableBody">' + body + '</tbody>\
            </table>';
            },
            getTableRow: function (row) {
                return '<tr>' + header + '</tr>';
            },
            getTableHeaderCell: function (header) {
                return '<th>' + header + '</th>';
            },
            getTableBodyCell: function (header) {
                return '<td>' + header + '</td>';
            },
            printValue: function (meta, valor, recortar) {
                var thisObject = this;
                var strResult = "";
                if (meta.IsObjForeignKey) {
                    strResult = "obj";
//        if (value[valor].id > 0) {
//            strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + util().getForeign(value[valor]) + '</a>';
//        } else {
//            strResult = '???';
//        }
                } else {
                    switch (meta.type) {
                        case "Boolean":
                            if (valor[meta.Name] == true) {
                                strResult = '<i class="glyphicon glyphicon-ok"></i>';
                            } else {
                                strResult = '<i class="glyphicon glyphicon-remove"></i>';
                            }
                            break;
                        default:
                            strResult = decodeURIComponent(valor[meta.Name]);
                            //if (typeof fieldContent == "string") {
                            if (recortar)
                                if (strResult.length > 50) //don't show too long fields
                                    strResult = strResult.substr(0, 20) + " ...";
                            //}
                    }
                    ;
                }
                ;
                return strResult;
            }
        },
    },
    param: {
        getUrlObjectFromUrlString: function (url) {
            var a;
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
        },
        getUrlObjectFromParamsWithoutParamArray: function (urlObj, nameParameterArray) {
            var newUrlObj = jQuery.extend(true, {}, urlObj); //http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
            $.each(nameParameterArray, function () {
                delete newUrlObj[this];
            })
            return newUrlObj;
        },
        getUrlStringFromParamsObject: function (urlObj) {
            var result = "";
            for (var key in urlObj) {
                result += "&" + key + "=" + urlObj[key];
            }
            return result.substring(1);
        },
        getStrSystemFilters: function (objFields) {
            var strResult = "";
            if (objFields['systemfilter'] != "") {
                strResult += objFields['systemfilter'];
                strResult += "=";
                strResult += objFields['systemfiltervalue'];
            }
            return strResult;
        },
        validateUrlObjectParameters: function (objParams) {
            //security borders comprobation, pendent of moving
            if (objParams["vf"] > 20) {
                objParams["vf"] = 20;
            }
            if (objParams["page"] > 100000) {
                objParams["page"] = 100000;
            }
            if (objParams["rpp"] > 100) {
                objParams["rpp"] = 100;
            }
            return objParams;
        },
        defaultizeUrlObjectParametersForLists: function (objParams) {
            if (typeof objParams["page"] == 'undefined')
                objParams["page"] = 1;
            if (typeof objParams["rpp"] == 'undefined')
                objParams["rpp"] = 10;
            if (typeof objParams["vf"] == 'undefined')
                objParams["vf"] = 10;
            return objParams;
        },
        defaultizeUrlObjectParameters: function (objParams) {
            if (typeof objParams["id"] == 'undefined')
                objParams["id"] = 1;
            return objParams;
        }
    },
    login: {
        loadLoginForm: function () {

            //$('#loginFormBroth').css('display', 'block');
            //$("#documentoForm").append(thisObject.getEmptyModal());
            $("#broth_login_modal_footer").html("");
            ns.html.modal.load('#broth_modal_login', true);
            //$('#broth_modal_login').css('width', '20%');


            $("#broth_button_login").unbind('click');
            $("#broth_button_login").click(function () {
                username = $("#broth_input_login").val();
                password = $("#broth_input_password").val();
                $("#broth_login_modal_footer").html("Please, wait while contacting server for authentication...");
                $.ajax({
                    type: "POST",
                    url: "json",
                    data: "ob=user&op=login&login=" + username + "&password=" + password,
                    success: function (response) {
                        if (response.status == 200) {
                            $("#broth_login_modal_footer").html("Welcome, you're allowed to enter the site!");
                            $('#broth_username_id').text(response.message);

                            $('.broth_show_when_logged_in').show();
                            $('.broth_show_when_logged_out').hide();

                            //$("#broth_username_menu_id").css('display', 'block', 'important');
                            ns.login.unloadLoginForm();
                            appInit();
                        } else {


                            $('.broth_show_when_logged_in').hide();
                            $('.broth_show_when_logged_out').show();

                            $("#broth_login_modal_footer").html("Login, password or both are incorrect. Please try it again.");
                        }
                    }
                });
                return false;
            });
        },
        unloadLoginForm: function () {
            //$("#login").unbind('click');
            //$('#loginFormBroth').css('display', 'none');
            $('#broth_modal_login').modal('hide');
        },
        checkAndUpdateUserConnectionState: function () {
            $.when(ns.promise.session()).done(function (data) {
                if (data['status'] == 200) {
                    $('#broth_username_id').text(data.message);

                    $('.broth_show_when_logged_in').show();
                    $('.broth_show_when_logged_out').hide();
                    //$("#broth_username_menu_id").css('display', 'block', 'important');
                    ns.login.unloadLoginForm();
                    appInit();


                } else {
                    $('#broth_username_id').text("Login");

                    $('.broth_show_when_logged_in').hide();
                    $('.broth_show_when_logged_out').show();

                    //$("#broth_username_menu_id").css('display', 'none', 'important');
                    ns.login.loadLoginForm();
                }
                fDocumentoRoutes();
                Path.listen();
            });
        }
    },
    promise: {
        session: function () {
            return ns.ajax.callSync(urlJson + '?op=status', 'GET', '');
        },
        one: function (strClass, id) {
            return ns.ajax.callSync(urlJson + '?ob=' + strClass + '&op=getaggregateviewone&id=' + id, 'GET', '');
        },
        meta: function (strClass, id) {
            return ns.ajax.callSync(urlJson + '?ob=' + strClass + '&op=getmetainformation', 'GET', '');
        }

    }
};






