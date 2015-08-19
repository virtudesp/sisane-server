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
    var paramsObject;

}
editModule.prototype = Object.create(baseModule.prototype);
editModule.prototype.initialize = function () {
    strClass = ausiasFLOW.editModule_class;
    paramsObject = ausiasFLOW.editModule_paramsObject;
    $.when(this.getOnePromise(strClass, paramsObject['id'])).done(function (jsonDataReceived) {
        if (jsonDataReceived.status == "200") {
            jsonData = jsonDataReceived;
        }
    })
};
editModule.prototype.render = function () {
    if (jsonData.status == "200") {
        return broth.getFormTemplate(strClass, jsonData.message.meta);
    } else {
        return broth.notifyException(jsonData.status, jsonData.message);
    }
}
editModule.prototype.fill = function () {
    if (jsonData.status == "200") {
        ns.html.form.doFillForm(jsonData.message.meta, jsonData.message.bean);
        broth.loadFormValues(); //edit operation can load forced foreigns
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