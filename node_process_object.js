// the process object, part of then node.js global namespace. The process object is extremely useful for identifying information about the runtime environment of your node app such as the version of node, the arguments passed to the node executable, the current working directory, and the nextTick function.

// var logger = function (d) {
//     process.stdout.write(d + '\n');
// };
//
// logger("hello");


// process.argv.forEach(function (val, index) {
//     console.log(index +" : "+ val );
// });

console.log("start");

process.nextTick(function () {
    console.log("nextTick callback");
});

console.log("scheduled");
