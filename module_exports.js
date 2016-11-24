var PI = Math.PI;

module.exports = function (r) {
    return {
        area: function () {

            return PI * r * r;
        }
    };
};


// var circle = require('./module_exports.js');
