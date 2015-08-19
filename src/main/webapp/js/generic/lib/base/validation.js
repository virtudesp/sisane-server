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
function resetValidationForm() {
    $(".feedback").remove();
    $(".form-group").removeClass("has-success");
    $(".form-group").removeClass("has-error");
    $(".form-group").removeClass("has-feedback");
}

function resetValidationControl(strIdAttr) {
    $("#" + strIdAttr + "-group .feedback").remove();
    $("#" + strIdAttr + "-group").removeClass("has-success");
    $("#" + strIdAttr + "-group").removeClass("has-error");
    $("#" + strIdAttr + "-group").removeClass("has-feedback");
}

function showValidationErrorControl(strIdAttr, strMsg) {
    $("#" + strIdAttr + "-group").addClass("has-error");
    $("#" + strIdAttr + "-group").addClass("has-feedback");
    $("#" + strIdAttr + "-group .control").append('<span class="feedback glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
    $("#" + strIdAttr + "-group .control").append('<span class="feedback control-label" for="' + strIdAttr + '">' + strMsg + '</span>');
}

function showValidationOKControl(strIdAttr) {
    $("#" + strIdAttr + "-group").addClass("has-success");
    $("#" + strIdAttr + "-group").addClass("has-feedback");
    $("#" + strIdAttr + "-group .control").append('<span class="feedback glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
}

function validateLeapYear(year) {
    if ((year % 100 != 0) && ((year % 4 == 0) || (year % 400 == 0))) {
        return true;
    }
    else {
        return false;
    }
}

function validateSpanishDate(strDate) {
    if (strDate != undefined && strDate.value != "") {
        strDate = strDate.replace(/-/g, '/');
        var expreg = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        if (!expreg.test(strDate)) {
            return false;
        }
        //var intYear = parseInt(strDate.substring(0, 4));
        //var strDay = strDate.substring(8, 10);
        //var strMonth = strDate.substring(5, 7);

        var intYear = parseInt(strDate.substring(6, 10));
        var strDay = strDate.substring(0, 2);
        var strMonth = strDate.substring(3, 5);


        switch (strMonth) {
            case "01":
            case "03":
            case "05":
            case "07":
            case "08":
            case "10":
            case "12":
                nDays = 31;
                break;
            case "04":
            case "06":
            case "09":
            case "11":
                nDays = 30;
                break;
            case "02":
                if (validateLeapYear(intYear)) {
                    nDays = 29
                } else {
                    nDays = 28
                }
                ;
                break;
            default:
                return false;
        }

        if (strDay > nDays || strDay == 0) {
            return false;
        }
        return true;
    }
}
function validateNotempty(strString) {
    if (strString) {
        return true
    } else {
        return false;
    }
}

function validateEmail(strString) {
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (pattern.test(strString)) {
        return true;
    } else {
        return false;
    }
}

function validateFloatNumber(strString) {
    var pattern = /^-?\d+(\.\d+)?$/;
    if (pattern.test(strString)) {
        return true;
    } else {
        return false;
    }
}
function validateInteger(strString) {
    var pattern = /^-?\d+$/;
    if (pattern.test(strString)) {
        return true;
    } else {
        return false;
    }
}
function validateMaxInteger(intMaxInteger, intInteger) {
    if (intInteger > intMaxInteger) {
        return false;
    } else {
        return true;
    }
}
function validateMaxLength(intMaxLength, strString) {
    if (strString.length > intMaxLength) {
        return false;
    } else {
        return true;
    }
}

function validateMinLength(intMinLength, strString) {
    if (strString.length < intMinLength) {
        return false;
    } else {
        return true;
    }
}

var loadValidationCallbacks = function (meta) {
    resetValidationForm();
    var validationFunctionArray = broth.getFormValidationCode(meta);
    _.each(validationFunctionArray, function (validationFunction) {
        if (typeof (validationFunction) === "function") {
            validationFunction();
        }
    });
}