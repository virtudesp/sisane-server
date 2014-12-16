/* 
 * Copyright (C) 2014 raznara
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


var proyectoView = function (strClase) {
    this.clase = strClase;
};
proyectoView.prototype = new view('proyecto');
proyectoView.prototype.getClassNameEstadoproyecto = function () {
    return this.getClassName() + "Vista";
};
var oProyectoView = new proyectoView('proyecto');

proyectoView.prototype.printValue = function (value, valor, recortar) {
    var thisObject = this;
    var strResult = "";
    if (/obj_usuario/.test(valor)) {
        if (value[valor].id > 0) {
            strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + value[valor].login + '</a>';
        } else {
            strResult = '???';
        }
    } else if (/obj_tipoproyecto/.test(valor)) {
        if (value[valor].id > 0) {
            strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + value[valor].nombre + '</a>';
        } else {
            strResult = '???';
        }        
    } else if (/obj_/.test(valor)) {
        if (value[valor].id > 0) {
            strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + util().getForeign(value[valor]) + '</a>';
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
                
                if (recortar) 
                    if (strResult.length > 50) //don't show too long fields
                        strResult = strResult.substr(0, 20) + " ...";
                
                if (/nombre/.test(valor)) {
                    strResult = '<a href="jsp#/post/list/' + 'systemfilter=id_proyecto&systemfilteroperator=equals&systemfiltervalue=' + value.id + '">' + decodeURIComponent(value[valor]) + '</a>';
                }
            };
    };
    return strResult;
};

proyectoView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#proyectoForm #obj_usuario_button').unbind('click');
    $("#proyectoForm #obj_usuario_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar documento
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documento");

        $("#proyectoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#proyectoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#proyectoForm #obj_tipoproyecto_button').unbind('click');
    $("#proyectoForm #obj_tipoproyecto_button").click(function () {
        var oControl = oEstadoproyectoControl;

        $("#proyectoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de proyecto'), "", thisObject.getFormFooter(), true);

        $('#proyectoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipoproyectoModel, oTipoproyectoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipoproyecto_id').val(id).change();
            $('#obj_tipoproyecto_desc').text(decodeURIComponent(oTipoproyectoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oTipoproyectoModel, oTipoproyectoView);
        return false;
    });
};