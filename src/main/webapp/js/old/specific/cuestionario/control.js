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

var cuestionarioControl = function (strClase) {
    this.clase = strClase;
};
cuestionarioControl.prototype = new control('cuestionario');
cuestionarioControl.prototype.getClassNameCuestionario = function () {
    return this.getClassName() + "Control";
};
cuestionarioControl.prototype.make = function (place, id, oModel, oModelSet, oView) {
    var thisObject = this;
    $(place).empty();
    var oCuestionarioModel = oModel;
    var oRespuestaModel = oModelSet;
    var oCuestionarioView = oView;
    data = oCuestionarioModel.getGenericOperation("getallpreguntas", id);
    formularioHTML = oCuestionarioView.getCuestionarioForm(data);
    validadorHTML = oCuestionarioView.getValidationForm(data);
    $(place).append(oView.getPanel("Realizar cuestionario de " + data[0].obj_pregunta.obj_cuestionario.tipo,
            oCuestionarioView.getEmptyView("cuestionarioForm", 1)));
    $("#formularioCuestionario").html(formularioHTML);
    $("#validadorCuestionario").html(validadorHTML);
    
    $('#submitForm').click(function () {
        oView.okValidation(function (e) {
            var valores = [];
            valores = $('#cuestionarioForm').serializeObject();
            resultado = oRespuestaModel.setGenericOperation("setform", {json: JSON.stringify(valores)});
            oView.doResultOperationNotifyToUser(place, resultado["status"], "Se han creado los registros con id=" + resultado["message"], resultado["message"], true);
            e.preventDefault();
            return false;
        });
    });
};

var oCuestionarioControl = new cuestionarioControl('cuestionario');
