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

$.fn.serializeObject = function ()
{
    // http://jsfiddle.net/davidhong/gP9bh/
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = encodeURIComponent(this.value) || '';
        }
    });
    return o;
};

form = {
    form: function (id, content) {


        var strGuardar = html.dom('button', 'Guardar', 'class="btn btn-primary" id="submitForm"');
        var strDiv2 = html.dom('div', strGuardar, 'class="col-sm-offset-2 col-sm-10"');
        var strFormGroupButtons = html.dom('div', strDiv2, 'class="form-group"');

        var strMsg = html.dom('div', '', 'id="messages"');
        var strDiv1 = html.dom('div', strMsg, 'class="col-sm-offset-2 col-sm-10"');
        var strFormGroupMessages = html.dom('div', strDiv1, 'class="form-group"');

        var strContent = html.dom('div', content, 'id="fields' + id + '"');

        var strForm = html.dom('form', strContent + strFormGroupMessages + strFormGroupButtons, 'class="form-horizontal" role="form" action="#" id="' + id + '" name="formulario"');
        return strForm;


//        return(
//                '<form class="form-horizontal" role="form" action="#" id="' + id + '" name="formulario">\n\
//                    <div id="' + 'fields' + id + '">\n\
//                        ' + content + '\n\
//                    </div>\n\
//                    <div class="form-group">\n\
//                        <div class="col-sm-offset-2 col-sm-10">\n\
//                            <div id="messages">\n\
//                            </div>\n\
//                        </div>\n\
//                    </div>\n\
//                    <div class="form-group">\n\
//                    <div class="col-sm-offset-2 col-sm-10">\n\
//                        <button class="btn btn-primary" id="submitForm">Guardar</button>\n\
//                    </div>\n\\n\
//                    </div>\n\
//                </form>'
//                );
    },
    formInputTypeDate: function (fieldName, fieldShortName, fieldUltraShortName, controlWidth) {


//        return html.dom('div', 'id="' + fieldName + '-group" class="form-group"',
//                html.dom('label', 'class="col-sm-2 control-label" for="' + fieldName + '"', fieldShortName + ':') +
//                html.dom('div', 'class="control col-sm-' + controlWidth + '"',
//                        html.dom('div', 'class="input-group date" id="' + fieldName + '_group"',
//                                html.dom('span', 'class="input-group-addon"',
//                                        html.dom('span', 'class="glyphicon glyphicon-calendar"', '')
//                                        ) +
//                                html.dom('input', 'type="text" class="form-control" id="' + fieldName + '" name="' + fieldName + '" placeholder="' + fieldUltraShortName + '"', '')
//                                )
//                        )
//                )



        var spanIcon = html.dom('span', '', 'class="glyphicon glyphicon-calendar"');
        var spanGroup = html.dom('span', spanIcon, 'class="input-group-addon"');
        var inputText = html.dom('input', '', 'type="text" class="form-control" id="' + fieldName + '" name="' + fieldName + '" placeholder="' + fieldUltraShortName + '"')
        var inputGroup = html.dom('div', spanGroup + inputText, 'class="input-group date" id="' + fieldName + '_group"');
        var controlDiv = html.dom('div', inputGroup, 'class="control col-sm-' + controlWidth + '"');
        var label = html.dom('label', fieldShortName + ':', 'class="col-sm-2 control-label" for="' + fieldName + '"');
        var divGroup = html.dom('div', label + controlDiv, 'id="' + fieldName + '-group" class="form-group"');
        var inputTypeDate = divGroup + '<script type="text/javascript">$("#' + fieldName + '_group").datetimepicker({format:"DD/MM/YYYY",locale:"es"});</script>'





        return inputTypeDate;


//        return(
//                '<div id="' + fieldName + '-group" class="form-group">\n\
//                    <label class="col-sm-2 control-label" for="' + fieldName + '">' + fieldShortName + ':</label>\n\
//                        <div class="control col-sm-' + controlWidth + '">\n\
//                            <div class="input-group date" id="' + fieldName + '_group">\n\
//                                <span class="input-group-addon">\n\
//                                    <span class="glyphicon glyphicon-calendar"></span>\n\
//                                </span>\n\
//                                <input type="text" class="form-control" id="' + fieldName + '" name="' + fieldName + '" placeholder="' + fieldUltraShortName + '" />\n\
//                            </div>\n\
//                        </div>\n\
//                </div>\n\n\
//\n\
// <script type="text/javascript">\n\
//$("#' + fieldName + '_group").datetimepicker({\n\
//            format: "DD/MM/YYYY",\n\
//            locale: "es"\n\
//        });\n\
//</script>\n\
//\n\
//');
    },
    formForeign: function (fieldName, fieldShortName) {





//        return(
//                '<div class="form-group">\n\
//                    <label class="col-sm-2 control-label" for="' + fieldName + '">' + fieldShortName + ':</label>\n\
//                    <div class="control col-sm-3">\n\
//                        <div class="input-group foreign" id="' + fieldName + '_group">\n\
//                            <span class="input-group-addon" id="' + fieldName + '_button">\n\
//                                <span class="glyphicon glyphicon-search"></span>\n\
//                            </span>\n\
//                            <input readonly="true" class="form-control" id="' + fieldName + '" class="input-mini" name="' + fieldName + '" type="text" size="5" maxlength="5" />\n\
//                        </div>\n\
//                    </div>\n\
//                    <label class="col-sm-7" for="' + fieldName + '_desc" id="' + fieldName + '_desc"></label>\n\
//                </div>\n'
//                );




//        return html.dom('div', 'class="form-group"',
//                html.dom('label', 'class="col-sm-2 control-label" for="' + fieldName + '"', fieldShortName + ':') +
//                html.dom('div', 'class="control col-sm-3"',
//                        html.dom('div', 'class="input-group foreign" id="' + fieldName + '_group"',
//                                html.dom('span', 'class="input-group-addon" id="' + fieldName + '_button"',
//                                        html.dom('span', 'class="glyphicon glyphicon-search"', '')
//                                        ) +
//                                html.dom('input', 'readonly="true" class="form-control" id="' + fieldName + '" class="input-mini" name="' + fieldName + '" type="text" size="5" maxlength="5"', '')
//                                )
//                        ) +
//                html.dom('div', 'class="col-sm-7" for="' + fieldName + '_desc" id="' + fieldName + '_desc"', '')
//                )



        var strSpanIcon = html.dom('span', '', 'class="glyphicon glyphicon-search"');
        var strSpanGroup = html.dom('span', strSpanIcon, 'class="input-group-addon" id="' + fieldName + '_button"');
        var strInput = html.dom('input', '', 'readonly="true" class="form-control" id="' + fieldName + '" class="input-mini" name="' + fieldName + '" type="text" size="5" maxlength="5"');
        var strDivForeign = html.dom('div', strSpanGroup + strInput, 'class="input-group foreign" id="' + fieldName + '_group"');
        var strDivCol = html.dom('div', strDivForeign, 'class="control col-sm-3"');
        var strLabel = html.dom('label', fieldShortName + ':', 'class="col-sm-2 control-label" for="' + fieldName + '"');
        var strDivDesc = html.dom('div', '', 'class="col-sm-7" for="' + fieldName + '_desc" id="' + fieldName + '_desc"')
        var strFormGroup = html.dom('div', strLabel + strDivCol + strDivDesc, 'class="form-group"')
        return strFormGroup;

//        return(
//                '<div class="form-group">\n\
//                        <label class="col-sm-2 control-label" for="' + fieldName + '">' + fieldShortName + ':</label>\n\
//                        <div class="control col-sm-3">\n\
//                            <div class="input-group foreign" id="' + fieldName + '_group">\n\
//                                <span class="input-group-addon" id="' + fieldName + '_button">\n\
//                                    <span class="glyphicon glyphicon-search"></span>\n\
//                                </span>\n\
//                                <input readonly="true" class="form-control" id="' + fieldName + '" class="input-mini" name="' + fieldName + '" type="text" size="5" maxlength="5" />\n\
//                            </div>\n\
//                        </div>\n\
//                        <div class="col-sm-7" for="' + fieldName + '_desc" id="' + fieldName + '_desc"></div>\n\
//                    </div>\n'
//                );
    },
    formCheckBox: function (fieldName, fieldShortName) {

        return  (
                html.dom2('div', 'id="' + fieldName + '-group" class="form-group"',
                        html.dom2('label', 'class="col-sm-2 control-label"  for="' + fieldName + '"', fieldShortName + ":") +
                        html.dom2('div', 'class="control col-sm-1"',
                                html.dom2('input', 'type="checkbox" id="' + fieldName + '" name="' + fieldName + '" value="true"', '')
                                )
                        )
                );



//        var strLabel = html.dom('label', fieldShortName + ":", 'class="col-sm-2 control-label"  for="' + fieldName + '"');
//        var strInput = html.dom('input', '', 'type="checkbox" id="' + fieldName + '" class="form-control" name="' + fieldName + '" value="true"');
//        var strDiv = html.dom('div', strInput, 'class="control col-sm-1"');
//        var strInputCheckBox = html.dom('div', strLabel + strDiv, 'id="' + fieldName + '-group" class="form-group"');
//        return strInputCheckBox;



//        return("<div id=\"" + fieldName + "-group\" <div class=\"form-group\">"
//                + "<label class=\"col-sm-2 control-label\"  for=\"" + fieldName + "\">" + fieldShortName + ":</label>"
//                + "<div class=\"col-sm-1\">"
//                + "<input type=\"checkbox\" id=\"" + fieldName + "\" name=\"" + fieldName + "\" value=\"true\" />"
//                + "</div>"
//                + "</div>\n");
//        return this;
    },
    formInputTypeInteger: function (fieldName, fieldShortName, controlWidth) {
        var strLabel = html.dom('label', fieldShortName + ":", 'class="col-sm-2 control-label"  for="' + fieldName + '"');
        var strInput = html.dom('input', '', 'type="text" id="' + fieldName + '" class="form-control" name="' + fieldName + '" size="15" placeholder="' + fieldName + '"');
        var strDiv = html.dom('div', strInput, 'class="control col-sm-' + controlWidth + '"');
        var strInputInteger = html.dom('div', strLabel + strDiv, 'id="' + fieldName + '-group" class="form-group  has-success has-feedback"');
        return strInputInteger;



//        return('<div id="' + fieldName + '-group" class="form-group  has-success has-feedback">'
//                + "<label class=\"col-sm-2 control-label\"  for=\"" + fieldName + "\">" + fieldShortName + ":</label>"
//                + "<div class=\"control col-sm-" + controlWidth + "\">    "
//                + "<input type=\"text\" id=\"" + fieldName + "\" class=\"form-control\"  name=\"" + fieldName + "\" size=\"15\" placeholder=\"" + fieldName + "\" />"
//                + "</div>"
//                + "</div>\n");
    },
    formInputTypeText: function (fieldName, fieldShortName, controlWidth) {
        var strLabel = html.dom('label', fieldShortName + ":", 'class="col-sm-2 control-label"  for="' + fieldName + '"');
        var strInput = html.dom('input', '', 'type="text" id="' + fieldName + '" class="form-control" name="' + fieldName + '" size="15" placeholder="' + fieldName + '"');
        var strdivInput = html.dom('div', strInput, 'class="control col-sm-' + controlWidth + '"');
        var strLabelInput = html.dom('div', strLabel + strdivInput, 'id="' + fieldName + '-group" class="form-group has-feedback"');
        return strLabelInput;
//        return("<div id=\"" + fieldName + "-group\" class=\"form-group has-feedback\">"
//                + "<label class=\"col-sm-2 control-label\"  for=\"" + fieldName + "\">" + fieldShortName + ":</label>"
//                + "<div class=\"control col-sm-" + controlWidth + "\">    "
//                + "<input type=\"text\" id=\"" + fieldName + "\" class=\"form-control\"  name=\"" + fieldName + "\" size=\"15\" placeholder=\"" + fieldName + "\" />"
//                + "</div>"
//                + "</div>\n");
    },
    getFormTemplate: function (strClass, jsonMeta) {
        var matrix_form = _.map(jsonMeta, function (value, index) {
            if (value.IsIdForeignKey == false && value.IsObjForeignKey == false) {
                if (value.Type == "String") {
                    return form.formInputTypeText(value.Name, value.ShortName, ns.util.getInputTypeTextLenght(value.MaxLength));
                }
                if (value.Type == "Boolean") {
                    return form.formCheckBox(value.Name, value.ShortName);
                }
                if (value.Type == "Integer") {
                    return form.formInputTypeInteger(value.Name, value.ShortName, ns.util.getInputTypeTextLenght(value.MaxInteger.toString().length));
                }
                if (value.Type == "Date") {
                    return form.formInputTypeDate(value.Name, value.ShortName, value.ShortName, ns.util.getInputTypeTextLenght(10));
                }
            } else {
                if (value.IsObjForeignKey) {
                    return form.formForeign(value.Name, value.ShortName);
                }
            }
        });
        var string_form = _.reduce(matrix_form, function (memo, control) {
            return memo + control;
        });
        return form.form(strClass + 'Form', string_form);
    },
    getFormValues: function (strClass) {
        var valores = [];
        var disabled = $('#' + strClass + 'Form').find(':input:disabled').removeAttr('disabled');
        valores = $('#' + strClass + 'Form').serializeObject();
        disabled.attr('disabled', 'disabled');
        return valores;
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
    }
}
