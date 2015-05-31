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


Array.prototype.map = function (projectionFunction) {
    var results = [];
    this.forEach(function (itemInArray) {
        results.push(projectionFunction(itemInArray));

    });

    return results;
};

Array.prototype.filter = function (predicateFunction) {
    var results = [];
    this.forEach(function (itemInArray) {
        if (predicateFunction(itemInArray)) {
            results.push(itemInArray);
        }
    });

    return results;
};
Array.prototype.concatAll = function () {
    var results = [];
    this.forEach(function (subArray) {
        results.push.apply(results, subArray);
    });

    return results;
};

Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
    return this.
            map(function (item) {
                return projectionFunctionThatReturnsArray(item);
            }).
            // apply the concatAll function to flatten the two-dimensional array
            concatAll();
};
Array.prototype.reduce = function (combiner, initialValue) {
    var counter,
            accumulatedValue;

    // If the array is empty, do nothing
    if (this.length === 0) {
        return this;
    }
    else {
        // If the user didn't pass an initial value, use the first item.
        if (arguments.length === 1) {
            counter = 1;
            accumulatedValue = this[0];
        }
        else if (arguments.length >= 2) {
            counter = 0;
            accumulatedValue = initialValue;
        }
        else {
            throw "Invalid arguments.";
        }

        // Loop through the array, feeding the current value and the result of
        // the previous computation back into the combiner function until
        // we've exhausted the entire array and are left with only one function.
        while (counter < this.length) {
            accumulatedValue = combiner(accumulatedValue, this[counter])
            counter++;
        }

        return [accumulatedValue];
    }
};
Array.zip = function (left, right, combinerFunction) {
    var counter,
            results = [];

    for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
        results.push(combinerFunction(left[counter], right[counter]));
    }

    return results;
};
        	