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
var editModule = function () {
    //baseOperation.call(this, url, strClass);
    //ns.login.checkAndUpdateUserConnectionState();
    var jsonData;
    var strClass;
    var parametersObject;
}
editModule.prototype = Object.create(baseModule.prototype);
editModule.prototype.loadFormValues = function (objParams) {

    if (objParams) { //soporte claves ajenas pte revision
        var selector;
        selector = objParams["systemfilter"];
        if (selector) {
            if (selector.split("_").length - 1 >= 2) {
                selector = selector.replace('id_', 'obj_');
                selector2 = selector.substring(0, selector.lastIndexOf('_'))
                selector3 = selector2.replace('obj_', '');
            } else {
                selector = selector.replace('id_', 'obj_');
                selector2 = selector;
                selector3 = selector2.replace('obj_', '')
            }
            $('#' + selector + "_id").val(objParams["systemfiltervalue"]).attr("disabled", true);
            $('#' + selector + "_button").attr("disabled", true).hide();
            var oModelo = "o" + selector3.charAt(0).toUpperCase() + selector3.slice(1) + "Model";
            $('#' + selector + '_desc').text(decodeURIComponent(window[oModelo].getMeAsAForeignKey(objParams["systemfiltervalue"])));
        }
    }
};
editModule.prototype.fillForm = function (meta, data) {
    arr_meta_data = _.map(meta, function (value) {
        return  {meta: value, data: data[value.Name]};
    });
    $.each(arr_meta_data, function (index, v) {
        if (v.meta.IsObjForeignKey) {
            $('#' + v.meta.Name).val(v.data.bean.id);
            $('#' + v.meta.Name + "_desc").html(html.printPrincipal(v));
        } else {
            switch (v.meta.Type) {
                case 'Boolean':
                    if (data[v.meta.Name]) {
                        $('#' + v.meta.Name).attr("checked", true);
                    } else {
                        $('#' + v.meta.Name).attr("checked", false);
                    }
                    break;
                default:
                    $('#' + v.meta.Name).val(decodeURIComponent(v.data));
            }
        }
    });
};
editModule.prototype.defaultizeUrlObjectParameters = function (objParams) {
    if (typeof objParams["id"] === 'undefined') {
        objParams["id"] = 1;
    }
    return objParams;
};
editModule.prototype.initialize = function () {
    strClass = ausiasFLOW.editModule_class;
    parametersObject = this.defaultizeUrlObjectParameters(ausiasFLOW.editModule_paramsObject);

};
editModule.prototype.getData = function () {
    $.when(this.getOnePromise(strClass, parametersObject['id'])).done(function (jsonDataReceived) {
        if (jsonDataReceived.status == "200") {
            jsonData = jsonDataReceived;
        }
    })
}
editModule.prototype.render = function () {
    if (jsonData.status == "200") {
        return broth.getFormTemplate(strClass, jsonData.message.meta);
    } else {
        return broth.notifyException(jsonData.status, jsonData.message);
    }
}
editModule.prototype.fill = function () {
    if (jsonData.status == "200") {
        this.fillForm(jsonData.message.meta, jsonData.message.bean);
        this.loadFormValues(parametersObject); //edit operation can load forced foreigns
    }
}
editModule.prototype.bind = function () {
    if (jsonData.status == "200") {
        loadValidationCallbacks(jsonData.message.meta);
        //bindForeigns mediante meta
        $('#id').attr("disabled", true);
        $('#submitForm').unbind('click');
        $('#submitForm').click(function (e) {
            //oView.okValidation(function (e) {
            var result = broth.setOne(strClass, {json: JSON.stringify(broth.getFormValues(strClass))});
            broth.doResultOperationNotifyToUser($('#broth_content'), result["status"], broth.actionEditOkMessage(result["message"]), result["message"], true);
            e.preventDefault();
            return false;
            //});
        });
    }

}