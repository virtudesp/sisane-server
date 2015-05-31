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




(function ($) {

    $.fn._p = function (strText) {
        return this.append('<p>' + strText + '</p>');
    };
    $.fn._i = function (strText) {
        return this.append('<i>' + strText + '</i>');
    };
    $.fn._h1 = function (strText) {
        return this.append('<h1>' + strText + '</h1>');
    };    
    $.fn.appendForm = function (id) {
        this.append(
                '<form class="form-horizontal" role="form" action="#" id="' + id + '" name="formulario">\n\
                    <div id="' + 'fields' + id + '"></div>\n\
                    <div class="form-group">\n\
                        <div class="col-sm-offset-2 col-sm-10">\n\
                            <div id="messages"></div>\n\
                            </div>\n\
                        </div>\n\
                    <div class="form-group">\n\
                    <div class="col-sm-offset-2 col-sm-10">\n\
                        <button class="btn btn-primary" id="submitForm">Guardar</button>\n\
                    </div>\n\
                </form>'
                );
        return $('#fields' + id);
    };

    $.fn.appendInputTypeDate = function (fieldName, fieldShortName, fieldUltraShortName, controlWidth) {
        this.append(
                '<div id="' + fieldName + '-group" class="form-group">\n\
                    <label class="col-sm-2 control-label" for="' + fieldName + '">' + fieldShortName + ':</label>\n\
                        <div class="control col-sm-' + controlWidth + '">\n\
                            <div class="input-group date" id="' + fieldName + '_group">\n\
                                <span class="input-group-addon">\n\
                                    <span class="glyphicon glyphicon-calendar"></span>\n\
                                </span>\n\
                                <input type="text" class="form-control" id="' + fieldName + '" name="' + fieldName + '" placeholder="' + fieldUltraShortName + '" />\n\
                            </div>\n\
                        </div>\n\
                </div>\n'
                );
        return this;
//        strHtml += "<script type=\"text/javascript\">"
//                + "jQuery(function ($) {"
//                + "$('#" + field.getName() + "').datetimepicker({"
//                + "pickTime: false,"
//                + "language: 'es',"
//                + "showToday: true"
//                + "});"
//                + "});"
//                + "</" + "script>";
//        strHtml += "<script type=\"text/javascript\">jQuery(function ($) {"
//                + "$(\"#" + field.getName() + "\").bind('keyup',function(event) {"
//                + "if (validateSpanishDate($(\"#" + field.getName() + "\").val())){"
//                + "resetValidationControl('" + field.getName() + "');"
//                + "showValidationOKControl('" + field.getName() + "');"
//                //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-error\").addClass(\"has-success\")"
//                + "} else {"
//                + "resetValidationControl('" + field.getName() + "');"
//                + "showValidationErrorControl('" + field.getName() + "','Error al validar la fecha');"
//                + "showValidationOKControl('" + field.getName() + "');"
//                //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-success\").addClass(\"has-error\")"
//                + "}"
//                + "});"
//                + "});"
//                + "</" + "script>";
//        strHtml += "<script type=\"text/javascript\">jQuery(function ($) {"
//                + "$(\"#" + field.getName() + "\").bind('change',function(event) {"
//                + "if (validateSpanishDate($(\"#" + field.getName() + "\").val())){"
//                + "resetValidationControl('" + field.getName() + "');"
//                //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-error\").addClass(\"has-success\")"
//                + "} else {"
//                + "resetValidationControl('" + field.getName() + "');"
//                + "showValidationErrorControl('" + field.getName() + "','Error al validar la fecha');"
//                //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-success\").addClass(\"has-error\")"
//                + "}"
//                + "});"
//                + "});"
//                + "</" + "script>";
//
//        return strHtml;
    };


    $.fn.appendForeign = function (fieldName, fieldShortName) {

        this.append(
                '<div class="form-group">\n\
                    <label class="col-sm-2 control-label" for="' + fieldName + '">' + fieldShortName + ':</label>\n\
                    <div class="control col-sm-3">\n\
                        <div class="input-group foreign" id="' + fieldName + '_group">\n\
                            <span class="input-group-addon" id="' + fieldName + '_button">\n\
                                <span class="glyphicon glyphicon-search"></span>\n\
                            </span>\n\
                            <input readonly="true" class="form-control" id="' + fieldName + '" class="input-mini" name="' + fieldName + '" type="text" size="5" maxlength="5" />\n\
                        </div>\n\
                    </div>\n\
                    <label class="col-sm-7" for="' + fieldName + '_desc" id="' + fieldName + '_desc"></label>\n\
                </div>\n'
                );
        return this;
    };

    $.fn.appendCheckBox = function (fieldName, fieldShortName) {
        this.append("<div id=\"" + fieldName + "-group\" <div class=\"form-group\">"
                + "<label class=\"col-sm-2 control-label\"  for=\"" + fieldName + "\">" + fieldShortName + ":</label>"
                + "<div class=\"col-sm-1\">"
                + "<input type=\"checkbox\" id=\"" + fieldName + "\" name=\"" + fieldName + "\" value=\"true\" />"
                + "</div>"
                + "</div>\n");
        return this;

    };



    $.fn.appendInputTypeInteger = function (fieldName, fieldShortName, controlWidth) {

        this.append('<div id="' + fieldName + '-group" class="form-group  has-success has-feedback">'
                + "<label class=\"col-sm-2 control-label\"  for=\"" + fieldName + "\">" + fieldShortName + ":</label>"
                + "<div class=\"control col-sm-" + controlWidth + "\">    "
                + "<input type=\"text\" id=\"" + fieldName + "\" class=\"form-control\"  name=\"" + fieldName + "\" size=\"15\" placeholder=\"" + fieldName + "\" />"
                + "</div>"
                + "</div>\n");
        return this;
    }

    $.fn.appendInputTypeText = function (fieldName, fieldShortName, controlWidth) {
        //var controlWidth = 3;
        //  controlWidth = getInputTypeTextLenght(methodAnnotation.MaxLength());
        this.append("<div id=\"" + fieldName + "-group\" class=\"form-group  has-success has-feedback\">"
                + "<label class=\"col-sm-2 control-label\"  for=\"" + fieldName + "\">" + fieldShortName + ":</label>"
                + "<div class=\"control col-sm-" + controlWidth + "\">    "
                + "<input type=\"text\" id=\"" + fieldName + "\" class=\"form-control\"  name=\"" + fieldName + "\" size=\"15\" placeholder=\"" + fieldName + "\" />"
                + "</div>"
                + "</div>\n");
        return this;
//        strHtml += "<script type=\"text/javascript\">jQuery(function ($) {"
//                + "$(\"#" + field.getName() + "\").bind('keyup',function(event) {"
//                + "if ( validateMaxLength(" + methodAnnotation.MaxLength() + ", $(\"#" + field.getName() + "\").val())){"
//                + "if ( validateMinLength(" + methodAnnotation.MinLength() + ", $(\"#" + field.getName() + "\").val())){"
//                + "resetValidationControl('" + field.getName() + "');"
//                + "showValidationOKControl('" + field.getName() + "');"
//                //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-error\").addClass(\"has-success\")"
//                + "} else {"
//                + "resetValidationControl('" + field.getName() + "');"
//                + "showValidationErrorControl('" + field.getName() + "','Debes introducir más caracteres');"
//                + "showValidationOKControl('" + field.getName() + "');"
//                //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-success\").addClass(\"has-error\")"
//                + "}"
//                + "} else {"
//                + "resetValidationControl('" + field.getName() + "');"
//                + "showValidationErrorControl('" + field.getName() + "','Excedido el máximo de caracteres');"
//                + "showValidationOKControl('" + field.getName() + "');"
//                //+ "$(\"#" + field.getName() + "-group\").removeClass(\"has-success\").addClass(\"has-error\")"
//                + "}"
//                + "});"
//                + "});"
//                + "<" + "/script>";

    }
























}(jQuery));

