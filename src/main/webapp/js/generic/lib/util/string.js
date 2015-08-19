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

string = {
    clipString: function (strResult, charsToClipStart) {
        charsToClipStart = broth.defaultizeParameter(charsToClipStart, 30);
        if (typeof strResult === 'string') {
            if (strResult.length > charsToClipStart)
                return strResult.substr(0, charsToClipStart).trim() + " ...";
            else
                return strResult.trim();
        } else {
            return strResult;
        }
    },
    replaceAll: function (str, search, rpl) {
        return str.split(search).join(rpl);
    }
}