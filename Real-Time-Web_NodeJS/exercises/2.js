// write some node code finally!
function printHelp () {
  console.log('2.js (c) aramay')
  console.log('')
  console.log('usage:')
  console.log('--help        print this help')
  console.log('--file={name}        read the file of name {NAME} and output its content')
}
var args = require('minimist')(process.argv.slice(2), {string: 'file'})

console.log(args.file)

if (args.help || !args.file) {
  printHelp()
  process.exit(1)
}
// var name = process.argv[2]

var hello = require('./helloworld2.js')

// var contents = hello.say(args.file) -> this handles synchronous code

hello.say(args.file)
   .val(function (contents) {
     console.log(contents.toString())
   })
   .or(function (err) {
     console.log('ERROR: ' + err)
   })

// process.stdout.write("stdout ->")
