/*!
 * ausiasDOM Library v1.0, July 2015
 * Copyright (C), Rafael Aznar
 * rafaaznar{at}gmail.com
 * CIPFP Ausias March, Valencia, Spain
 * Free to use & distribute under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function () {
    var attr = function (name, attr, _default) {
        if (attr) {
            return attr = ' ' + name + '="' + attr + '"';
        } else {
            if (_default) {
                return attr = ' ' + name + '="' + _default + '"';
            } else {
                return '';
            }
        }
    }
    var formatClass = function (_class) {
        if (_class)
            _class = ' class="' + _class + "'";
        else
            _class = '';
        return _class;
    }
    var formatId = function (_id) {
        if (_id)
            _id = ' id="' + _id + "'";
        else
            _id = '';
        return _id;
    }
    var ausiasDOM = window.ausiasDOM = {};
    ausiasDOM.dom = {
        _div: function (_class, _id, strText) {
            return '<div' + attr("class", _class) + attr("id", _id) + '>' + strText + '</div>';
        },
        _small: function (_class, _id, strText) {
            return '<small' + attr("class", _class) + attr("id", _id) + '>' + strText + '</small>';
        },
        _h1: function (_class, _id, strText) {
            return '<h1' + attr("class", _class) + attr("id", _id) + '>' + strText + '</h1>';
        },
        _h2: function (_class, _id, strText) {
            return '<h2' + attr("class", _class) + attr("id", _id) + '>' + strText + '</h2>';
        },
        _h3: function (_class, _id, strText) {
            return '<h3' + attr("class", _class) + attr("id", _id) + '>' + strText + '</h3>';
        },
        _h4: function (_class, _id, strText) {
            return '<h4' + attr("class", _class) + attr("id", _id) + '>' + strText + '</h4>';
        },
        _h5: function (_class, _id, strText) {
            return '<h5' + attr("class", _class) + attr("id", _id) + '>' + strText + '</h5>';
        },
        _h6: function (_class, _id, strText) {
            return '<h6' + attr("class", _class) + attr("id", _id) + '>' + strText + '</h6>';
        },
        _p: function (_class, _id, strText) {
            return '<p' + attr("class", _class) + attr("id", _id) + '>' + strText + '</p>';
        },
        _mark: function (_class, _id, strText) {
            return '<mark' + attr("class", _class) + attr("id", _id) + '>' + strText + '</mark>';
        },
        _del: function (_class, _id, strText) {
            return '<del' + attr("class", _class) + attr("id", _id) + '>' + strText + '</del>';
        },
        _s: function (_class, _id, strText) {
            return '<s' + attr("class", _class) + attr("id", _id) + '>' + strText + '</s>';
        },
        _i: function (_class, _id, strText) {
            return '<i' + attr("class", _class) + attr("id", _id) + '>' + strText + '</i>';
        },
        _u: function (_class, _id, strText) {
            return '<u' + attr("class", _class) + attr("id", _id) + '>' + strText + '</u>';
        },
        _strong: function (_class, _id, strText) {
            return '<strong' + attr("class", _class) + attr("id", _id) + '>' + strText + '</strong>';
        },
        _m: function (_class, _id, strText) {
            return '<m' + attr("class", _class) + attr("id", _id) + '>' + strText + '</m>';
        },
        _code: function (_class, _id, strText) {
            return '<code' + attr("class", _class) + attr("id", _id) + '>' + strText + '</code>';
        },
        _blockquote: function (_class, _id, strText) {
            return '<blockquote' + attr("class", _class) + attr("id", _id) + '>' + strText + '</blockquote>';
        },
        _footer: function (_class, _id, strText) {
            return '<footer' + attr("class", _class) + attr("id", _id) + '>' + strText + '</footer>';
        },
        _cite: function (_class, _id, title, strText) {
            return '<cite' + attr("class", _class) + attr("id", _id) + attr("title", _id) + '">' + strText + '</cite>';
        },
        _ul: function (_class, _id, strText) {
            return '<ul class="' + attr("class", _class) + attr("id", _id) + '">' + lilist + '</p>';
        },
        _button: function (_class, _id, strText) {
            return '<button type="button"' + attr("class", _class, "btn btn-primary") + attr("id", _id) + '>' + strText + '</button>';
        },
        _input: function (_class, _id, strText) {
            return '<input type="text"' + attr("class", _class, "form-control") + attr("value", strText) + attr("id", _id) + '>';
        },
        _table: function (_class, _id, strText) {
            return '<table' + attr("class", _class, "table table-bordered") + attr("id", _id) + '>' + strText + '</table>';
        },
        _tr: function (_class, _id, strText) {
            return '<tr' + attr("class", _class) + attr("id", _id) + '>' + strText + '</tr>';
        },
        _td: function (_class, _id, strText) {
            return '<td' + attr("class", _class) + attr("id", _id) + '>' + strText + '</td>';
        },
        _img: function (_class, _id, _src, _alt) {
            return '<td' + attr("class", _class) + attr("src", _src) + attr("alt", _alt) + attr("id", _id) + '>' + strText + '</td>';
        },
        _br: function () {
            return "<br>";
        },
        _formSimple: function (_class, _id, strText) {
            return '<form' + attr("class", _class, "form-horizontal") + attr("id", _id) + ' role="form" action="#" name="formulario">' + strText + '</form>';
        },
        _form: function (id, content) {
            return(
                    '<form class="form-horizontal" role="form" action="#" id="' + id + '" name="formulario">\n\
                    <div id="' + 'fields' + id + '">\n\
                        ' + content + '\n\
                    </div>\n\
                    <div class="form-group">\n\
                        <div class="col-sm-offset-2 col-sm-10">\n\
                            <div id="messages"></div>\n\
                        </div>\n\
                    </div>\n\
                    <div class="form-group">\n\
                        <div class="col-sm-offset-2 col-sm-10">\n\
                            <button class="btn btn-primary" id="submitForm">Guardar</button>\n\
                        </div>\n\
                    </div>\n\
                </form>'
                    );
        },
        _formInputTypeDate: function (fieldName, fieldShortName, fieldUltraShortName, controlWidth) {
            return(
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
        },
        _formForeign: function (fieldName, fieldShortName) {
            return(
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
        },
        _formCheckBox: function (fieldName, fieldShortName) {
            return("<div id=\"" + fieldName + "-group\" <div class=\"form-group\">"
                    + "<label class=\"col-sm-2 control-label\"  for=\"" + fieldName + "\">" + fieldShortName + ":</label>"
                    + "<div class=\"col-sm-1\">"
                    + "<input type=\"checkbox\" id=\"" + fieldName + "\" name=\"" + fieldName + "\" value=\"true\" />"
                    + "</div>"
                    + "</div>\n");
            return this;
        },
        _formInputTypeInteger: function (fieldName, fieldShortName, controlWidth) {
            return('<div id="' + fieldName + '-group" class="form-group  has-success has-feedback">'
                    + "<label class=\"col-sm-2 control-label\"  for=\"" + fieldName + "\">" + fieldShortName + ":</label>"
                    + "<div class=\"control col-sm-" + controlWidth + "\">    "
                    + "<input type=\"text\" id=\"" + fieldName + "\" class=\"form-control\"  name=\"" + fieldName + "\" size=\"15\" placeholder=\"" + fieldName + "\" />"
                    + "</div>"
                    + "</div>\n");
        },
        _formInputTypeText: function (fieldName, fieldShortName, controlWidth) {
            return("<div id=\"" + fieldName + "-group\" class=\"form-group has-feedback\">"
                    + "<label class=\"col-sm-2 control-label\"  for=\"" + fieldName + "\">" + fieldShortName + ":</label>"
                    + "<div class=\"control col-sm-" + controlWidth + "\">    "
                    + "<input type=\"text\" id=\"" + fieldName + "\" class=\"form-control\"  name=\"" + fieldName + "\" size=\"15\" placeholder=\"" + fieldName + "\" />"
                    + "</div>"
                    + "</div>\n");
        },
        /*,
         div: DOMCreator('div'),
         span: DOMCreator('span'),
         a: DOMCreator('a'),
         p: DOMCreator('p'),
         em: DOMCreator('em'),
         img: DOMCreator('img'),
         form: DOMCreator('form'),
         button: DOMCreator('button'),
         ul: DOMCreator('ul'),
         li: DOMCreator('li'),
         header: DOMCreator('header'),
         h1: DOMCreator('h1'),
         h2: DOMCreator('h2'),
         h3: DOMCreator('h3'),
         h4: DOMCreator('h4'),
         input: DOMCreator('input'),
         textarea: DOMCreator('textarea')
         */
    };
})();


