// write some node code finally!
function printHelp(){
   console.log("1.js (c) aramay")
   console.log("")
   console.log("usage:")
   console.log("--help        print this help")
   console.log("--file={name}        read the file of name {NAME} and output its content")
}
var args = require('minimist')(process.argv.slice(2), {string: "file"})

if (args.help || !args.file) {
   printHelp()
   process.exit(1)
}
// var name = process.argv[2]

var hello = require('./helloworld.js')

// var contents = hello.say(args.file) -> this handles synchronous code

hello.say(args.file, function(err, contents){
   if (err) {
      console.log("ERROR:" + err)
   }
   else{
      console.log(contents.toString())
   }
})

// process.stdout.write("stdout ->")