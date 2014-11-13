/* 
 * Copyright (C) 2014 rafa
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

var tipotemaControl = function (strClase) {
    this.clase = strClase;
};
tipotemaControl.prototype = new control('tipotema');
tipotemaControl.prototype.getClassNameTipotema = function () {
    return this.getClassName() + "Control";
};
var oTipotemaControl = new tipotemaControl('tipotema');

tipotemaControl.prototype.edit = function (place, id, oModel, oView) {
    var thisObject = this;
    $(place).empty();
    $(place).append(oView.getPanel("Edición de " + this.clase, oView.getEmptyForm()));
    var oDocumentoModel = oModel;
    oDocumentoModel.loadAggregateViewOne(id);
    oView.loadFormValues(oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames());
    $('#id').attr("disabled", true);
    nombre = $('#nombre').val();
    nombre = nombre.replace("<a href=\"jsp#/tema/list/systemfilter=id_tipotema&systemfilteroperator=equals&systemfiltervalue=" + $('#id').val() + "\">","").replace("</a>","");
    $('#nombre').val(nombre);
    oView.doEventsLoading();
    $('#submitForm').unbind('click');
    $('#submitForm').click(function () {
        oView.okValidation(function (e) {
            resultado = oModel.setOne({json: JSON.stringify(oView.getFormValues())});
            oView.doResultOperationNotifyToUser(place, resultado["status"], "Se ha actualizado el registro con id=" + resultado["message"], resultado["message"], true);
            e.preventDefault();
            return false;
        });
    });
};