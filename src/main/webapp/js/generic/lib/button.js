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
button = {
    getIcon: function (strIcon) {
        return html.dom('i', '', 'class="glyphicon ' + strIcon + '"');
    },
    getTableHeaderButtons: function (strClase, strOperation, UrlFromParamsWithoutOrder) {
        var strUp = html.dom('a', button.getIcon('glyphicon-arrow-up', 'class="orderAsc" id="' + strOperation + '" href="#/' + strClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + strOperation + '&ordervalue=asc"'));
        var strDown = html.dom('a', button.getIcon('glyphicon-arrow-down', 'class="orderDesc" id="' + strOperation + '" href="#/' + strClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + strOperation + '&ordervalue=desc"'));
        return strUp + strDown;
        //'<a class="orderAsc" id="' + meta.Name + '" href="#/' + strClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + meta.Name + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
    },
    getTableToobarButton: function (strClass, strOperation, strId, strIcon) {
        return html.dom('a', button.getIcon(strIcon), 'class="btn btn-default ' + strOperation + '" id="' + strId + '" href="#/' + strClass + '/' + strOperation + '/' + strId + '"')
    },
    getToolbarBar: function (strContent) {
        return html.dom('div', html.dom('div', strContent, 'class="btn-group btn-group-xs"'), 'class="btn-toolbar" role="toolbar"');
    }
}