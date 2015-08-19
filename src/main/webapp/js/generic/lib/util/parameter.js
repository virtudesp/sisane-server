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

var parameter = {
    getUrlObjectFromUrlString: function (url) {
        var a;
        if (typeof url == 'undefined') {
            return {};
        } else {
            if (url == "") {
                return {};
            } else {
                a = url.split('&');
            }
        }
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p = a[i].split('=');
            if (p.length != 2)
                p = ['id', p[0]]; //id parameter by default
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    },


    getStrSystemFilters: function (objFields) {
        var strResult = "";
        if (objFields['systemfilter'] != "") {
            strResult += objFields['systemfilter'];
            strResult += "=";
            strResult += objFields['systemfiltervalue'];
        }
        return strResult;
    },
    validateUrlObjectParameters: function (objParams) {
        //security borders comprobation, pendent of moving
        if (objParams["vf"] > 20) {
            objParams["vf"] = 20;
        }
        if (objParams["page"] > 100000) {
            objParams["page"] = 100000;
        }
        if (objParams["rpp"] > 100) {
            objParams["rpp"] = 100;
        }
        return objParams;
    },
    defaultizeUrlObjectParametersForPaginatedLists: function (objParams) {
        if (typeof objParams["page"] == 'undefined')
            objParams["page"] = 1;
        if (typeof objParams["rpp"] == 'undefined')
            objParams["rpp"] = 10;
        if (typeof objParams["vf"] == 'undefined')
            objParams["vf"] = 10;
        return objParams;
    },
    defaultizeUrlObjectParametersForLists: function (objParams) {
        if (typeof objParams["vf"] == 'undefined')
            objParams["vf"] = 99;
        return objParams;
    },    
    defaultizeUrlObjectParameters: function (objParams) {
        if (typeof objParams["id"] == 'undefined')
            objParams["id"] = 1;
        return objParams;
    }
}