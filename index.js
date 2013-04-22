"use strict";

module.exports = function(arr, needle) {
    if (Array.prototype.indexOf) {
        return Array.prototype.indexOf.call(arr, needle);
    }

    for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === needle) {
            return i;
        }
    }

    return -1;
};
