var fs = require('fs')
var fileName = process.argv[2]
// var fileBuffer = fs.readFileSync(fileName)
var fileBuffer = fs.readFileSync(fileName, 'utf8')



// var lines = fileBuffer.toString().split('\n').length - 1
var lines = fileBuffer.split('\n').length - 1
console.log(lines)

