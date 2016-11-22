/*
type global on node repl -> list og global objects

type:

var foo = "this is test"

type global again: it will create a global foo object

*/


var globalFoo;

exports.setFoo = function (val) {
    globalFoo = val;
};

//mkae these functions available to any application that includes this file - via the require statement

exports.getFoo = function () {
    return globalFoo;
};


// node cmd line type

// var modFoo = require ('./global_object.js');
//
// > modFoo.setFoo(42)
// undefined
// > modFoo.getFoo
// [Function]
// > modFoo.getFoo()
// 42
// >
