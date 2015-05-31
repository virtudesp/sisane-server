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


var newOperation = function (strClase, strPlace, objParams) {

    this.strClase = strClase;
    this.strPlace = strPlace;
    this.objParams = objParams;

    this.jsonMeta = 'error';
       
};
newOperation.prototype = Object.create(baseOperation.prototype);
newOperation.prototype.constructor = newOperation;
newOperation.prototype.prepareData = function () {
    this.gettingData = ns.promise.meta(this.strClase,this.objParams['id']); 
};

newOperation.prototype.pickData=function(){
    this.jsonMeta = this.jsonData.message;
}

newOperation.prototype.printTemplate = function () {
    var formFieldsId = this.strPlace.appendForm('oform');
    $.each(this.jsonMeta, function (index, value) {
        if (value.IsIdForeignKey == false && value.IsObjForeignKey == false) {
            if (value.Type == "String") {
                formFieldsId.appendInputTypeText(value.Name, value.ShortName, ns.util.getInputTypeTextLenght(value.MaxLength));
            }
            if (value.Type == "Boolean") {
                formFieldsId.appendCheckBox(value.Name, value.ShortName);
            }
            if (value.Type == "Integer") {
                formFieldsId.appendInputTypeInteger(value.Name, value.ShortName, ns.util.getInputTypeTextLenght(value.MaxInteger.toString().length));
            }
            if (value.Type == "Date") {
                formFieldsId.appendInputTypeDate(value.Name, value.ShortName, value.ShortName, ns.util.getInputTypeTextLenght(10));
            }
        } else {
            if (value.IsObjForeignKey == false) {
                formFieldsId.appendForeign(value.Name, value.ShortName);
            }
        }
    });
}
newOperation.prototype.loadValues = function () {
    $('#id').val('0').attr("disabled", true);
    if (this.objParams) { //soporte claves ajenas pte revision
        var selector;
        selector = this.objParams["systemfilter"];
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
            $('#' + selector + "_id").val(this.objParams["systemfiltervalue"]).attr("disabled", true);
            $('#' + selector + "_button").attr("disabled", true).hide();
            var oModelo = "o" + selector3.charAt(0).toUpperCase() + selector3.slice(1) + "Model";
            $('#' + selector + '_desc').text(decodeURIComponent(window[oModelo].getMeAsAForeignKey(this.objParams["systemfiltervalue"])));
        }
    }
};
newOperation.prototype.bindEvents = function () {
    $('#submitForm').unbind('click');
    $('#submitForm').click(function () {
        //oView.okValidation(function (e) {
        resultado = oModel.setOne({json: JSON.stringify(oView.getFormValues())});
        oView.doResultOperationNotifyToUser(place, resultado["status"], this.actionOkMessage(resultado["message"]), resultado["message"], true);
        e.preventDefault();
        return false;
        //});
    });
};
newOperation.prototype.actionOkMessage = function (id) {
    return 'Se ha creado el registro con id=' + resultado["message"];
}