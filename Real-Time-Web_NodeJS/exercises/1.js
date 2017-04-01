// write some node code finally!
function printHelp(){
   console.log("1.js (c) aramay")
   console.log("")
   console.log("usage:")
   console.log("--help        print this help")
   console.log("--name        say hello to {NAME}")
}
var args = require('minimist')(process.argv.slice(2), {string: "name"})

if (args.help || !args.name) {
   printHelp()
   process.exit(1)
}
// var name = process.argv[2]
var name = args.name

console.log("hello " + name)

// process.stdout.write("stdout ->")