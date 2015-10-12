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

html = {
    escapeHtml: function (str) {
        return str.replace(/[&<>]/g, function (tag) {
            var tagsToReplace = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            }
            return tagsToReplace[tag] || tag;
        });
    },
    escapeHtml2: function (str) {
        if (typeof (str) === 'string') {
            return strclipString
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
        } else {
            return str;
        }

    },
    htmlEncode: function (value) {
//create a in-memory div, set it's inner text(which jQuery automatically encodes)
//then grab the encoded contents back out.  The div never exists on the page.
        return $('<div/>').text(value).html();
    },
    htmlDecode: function (value) {
        return $('<div/>').html(value).text();
    },
    print: function (value) {
        return string.clipString(html.escapeHtml(decodeURIComponent(value)));
    },
    printObject: function (value) {
        var arr_metadata = _.map(value.data.meta, function (oMeta) {
            if (oMeta.IsForeignKeyDescriptor) {
                return  value.data.bean[oMeta.Name];
            } else {
                return "";
            }
        });
        var strForeign = arr_metadata.join(' ');
        return '<a href="#/' + value.meta.ReferencesTable + '/view/' + value.data.bean.id + '">' + value.data.bean.id + ": " + html.print(strForeign) + '</a>';
    },
    printObject2: function (strClass, value) {
        var arr_metadata = _.map(value.meta.message, function (oMeta) {
            if (oMeta.IsForeignKeyDescriptor) {
                return  oMeta.Name + ': ' + value.bean.message[oMeta.Name] + ';';
            } else {
                return "";
            }
        });
        var strForeign = _.without(arr_metadata, '').join(' ');
        return '<a href="#/' + strClass + '/view/' + value.bean.message.id + '">' + value.bean.message.id + ": " + html.print(strForeign) + '</a>';
    },
    printValue: function (value) {
        switch (value.meta.Type) {
            case 'Boolean':
                if (value.data == true) {
                    return '<i class="glyphicon glyphicon-ok"></i>';
                } else {
                    return '<i class="glyphicon glyphicon-remove"></i>';
                }
                break;
            default:
                return html.print(value.data);
        }
    },
    printPrincipal: function (value) {
        if (value.meta.IsObjForeignKey) {
            return  html.printObject(value);
        } else {
            return   html.printValue(value);
        }
    },
    dom: function (strLabel, strText, strAttr) {
        if (!strAttr)
            strAttr = '';
        else
            strAttr = ' ' + strAttr;
        return '<' + strLabel + strAttr + '>' + strText + '</' + strLabel + '>\n';
    },
    dom2: function (strLabel, strAttr, strText) {
        if (!strAttr)
            strAttr = '';
        else
            strAttr = ' ' + strAttr;
        return '<' + strLabel + strAttr + '>' + strText + '</' + strLabel + '>\n';
    },
    getPageHeader: function (icon, title, subtitle) {
        var subtitleHTML = html.dom('h1', html.dom('small', subtitle, 'id="broth_subtitle"'));
        var titleHTML = html.dom('h1', title, 'id="broth_title"');
        var iconHTML = html.dom('div', icon, 'class="col-xs-3 text-right" id="broth_operationicon"');
        var titlesHTML = html.dom('div', titleHTML + subtitleHTML, 'class="col-xs-9 text-left"');
        return html.dom('div', titlesHTML + iconHTML, 'class="row"');
    },
    
    getSpinner: function () {
        return '<img src="images/ajax-loading.gif" alt="cargando..." />';
    },
    
//    getPageHeader: function (icon, title, subtitle) {
//        var subtitleHTML = dom._h1(dom._small(subtitle, '', "broth_subtitle"));
//        var titleHTML = dom._h1(title, '', "broth_title");
//        var iconHTML = dom._div(icon, "col-xs-3 text-right", "broth_operationicon");
//        var titlesHTML = dom._div(titleHTML + subtitleHTML, 'col-xs-9 text-left');
//        return dom._div(titlesHTML + iconHTML, 'row');
////        return(
////                '<div class="row">\n\
////                    <div class="col-xs-9 text-left">\n\
////                        <h1 id="broth_title">' + title + '</h1>\n\
////                        <h1><small id="broth_subtitle">' + subtitle + '</small></h1>\n\
////                    </div>\n\
////                    <div class="col-xs-3 text-right" id="broth_operationicon">\n\
////                        ' + icon + '\n\
////                    </div>\n\
////                </div>'
////                );
//    }

}