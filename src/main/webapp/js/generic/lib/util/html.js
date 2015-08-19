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
    getPageHeader: function (icon, title, subtitle) {
        

        return dom._div('row', '',
                dom._div('col-xs-9 text-left', '',
                        dom._h1('', "broth_title", title) +
                        dom._h1('', '', dom._small('', "broth_subtitle", subtitle))
                        ) +
                dom._div("col-xs-3 text-right", "broth_operationicon", icon)
                )
//        return(
//                '<div class="row">\n\
//                    <div class="col-xs-9 text-left">\n\
//                        <h1 id="broth_title">' + title + '</h1>\n\
//                        <h1><small id="broth_subtitle">' + subtitle + '</small></h1>\n\
//                    </div>\n\
//                    <div class="col-xs-3 text-right" id="broth_operationicon">\n\
//                        ' + icon + '\n\
//                    </div>\n\
//                </div>'
//                );
    }

}