function readTheFile (filename) {
//   var contents = fs.readFileSync(filename)
//   return fs.readFile(filename, cb)

//different implementation 

   var sq = ASQ()

   fs.readFile(filename, sq.errfcb() )

   return sq
}

function displayMesg(done, contents){
   setTimeout(function() {
      done(contents)
   }, 1000);
}

function say(filename){
   return readTheFile(filename)
      .then(displayMesg)
}


var fs = require('fs')

var ASQ = require('asynquence')
require('asynquence-contrib')

module.exports.say = say
