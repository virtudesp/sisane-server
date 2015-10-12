/* 
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 * AJAX web applications by using Java and jQuery
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
 * 
 */


table = {
    getTable: function (headers, body) {
        return '<table class="table table-responsive table-bordered table-hover table-striped table-condensed dataTable no-footer">\
            <thead id="tableHeaders">' + headers + '</thead>\
            <tbody id="tableBody">' + body + '</tbody>\
            </table>';
    },
    
    
    
//    getTableRow: function (row) {
//        return '<tr>' + header + '</tr>';
//    },
//    getTableHeaderCell: function (header) {
//        return '<th>' + header + '</th>';
//    },
//    getTableBodyCell: function (header) {
//        return '<td>' + header + '</td>';
//    },
//    printValue: function (meta, valor, recortar) {
//        var thisObject = this;
//        var strResult = "";
//        if (meta.IsObjForeignKey) {
//            strResult = "obj";
////        if (value[valor].id > 0) {
////            strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + util().getForeign(value[valor]) + '</a>';
////        } else {
////            strResult = '???';
////        }
//        } else {
//            switch (meta.type) {
//                case "Boolean":
//                    if (valor[meta.Name] == true) {
//                        strResult = '<i class="glyphicon glyphicon-ok"></i>';
//                    } else {
//                        strResult = '<i class="glyphicon glyphicon-remove"></i>';
//                    }
//                    break;
//                default:
//                    strResult = decodeURIComponent(valor[meta.Name]);
//                    //if (typeof fieldContent == "string") {
//                    if (recortar)
//                        if (strResult.length > 50) //don't show too long fields
//                            strResult = strResult.substr(0, 20) + " ...";
//                    //}
//            }
//            ;
//        }
//        ;
//        return strResult;
//    }
}