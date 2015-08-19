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

var baseOperation = function () {


    this.errorStatus = undefined;
    this.errorMessage = undefined;


};


//baseOperation.prototype.init = function () {
//};
//baseOperation.prototype.postPickData = function () {
//};
//baseOperation.prototype.getData = function () {
////    var thisObject = this;
////    $.when(this.gettingData).done(function (jsonData) {
////        if (jsonData.status == "200") {
////            thisObject.jsonData = jsonData;
////            thisObject.pickData();
////            thisObject.postPickData();
////            thisObject.printTemplate();
////        } else {
////            thisObject.errorStatus = jsonData.status;
////            thisObject.errorMessage = jsonData.message;
////            thisObject.notifyException();
////        }
////    })
//};
//baseOperation.prototype.printTemplate = function () {
//    this.strPlace.appendForm('<h1>Application error: no template</h1>');
//}
baseOperation.prototype.notifyException = function (errorStatus, errorMessage) {
    this.strPlace.html("Error " + errorStatus + ": " + errorMessage);
    console.log("Error " + errorStatus + ": " + errorMessage)
}


//getData = function (oPromise) {
//    $.when(oPromise).done(function (jsonData) {
//        if (jsonData.status == "200") {
//            return jsonData;
//        } else {
//            return {
//                errorStatus: jsonData.status,
//                errorMessage: jsonData.message
//            }
//        }
//    })
//}