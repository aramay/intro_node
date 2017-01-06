var fs = require('fs')

var buf = fs.readFileSync('./zork.txt')

console.log(buf.toString().split())

var line = buf.toString().split()

while()