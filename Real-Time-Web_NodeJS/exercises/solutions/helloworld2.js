function readTheFile (filename) {
  var sq = ASQ()

  fs.readFile(filename, sq.errfcb())

  return sq
}

function delayMsg (done, contents) {
  setTimeout(function () {
    done(contens)
  }, 1000)
}

function say (filename) {
  return readTheFile(filename)
	.then(delayMsg)
}

var fs = require('fs')

var ASQ = require('asynquence')
require('asynquence-contrib')

module.exports.say = say
