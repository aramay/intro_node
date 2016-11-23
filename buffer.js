// buffer object is a reference to a memory space outside of the V8 engine, but you will learn practical methods to access it, modify it, and convert it to standard Javascript objects that can be used by your code.

var fs = require('fs');

// fs.readFile('zrk.txt',function (err, data) {
//
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// });

// raw output
// output => <Buffer 62 75 66 66 65 72 20 6f 62 6a 65 63 74 20 69 73 20 61 20 72 65 66 65 72 65 6e 63 65 20 74 6f 20 61 20 6d 65 6d 6f 72 79 20 73 70 61 63 65 20 6f 75 74 ... >

fs.readFile('zork.txt',function (err, data) {

    if (err) {
        throw err;
    }
    console.log(data.toString());
});
