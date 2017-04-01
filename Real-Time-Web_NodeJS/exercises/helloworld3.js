function readTheFile (filename) {
//   var contents = fs.readFileSync(filename)
//   return fs.readFile(filename, cb)

// different implementation

  return ASQ(function (done) {
    var stream = fs.createReadStream(filename)

    var contents = ''

    //pipe into a different process
    stream.pipe(fs.createWriteStream(filename + 'backup'))
    
    // listen for events
    stream.on('data', function (chunks) {
      console.log('data')
      contents += chunks
    })

    stream.on('end', function () {
      done(contents)
    })
  })
}

function displayMesg (done, contents) {
  setTimeout(function () {
    done(contents)
  }, 1000)
}

function say (filename) {
  return readTheFile(filename)
      .then(displayMesg)
}

var fs = require('fs')

var ASQ = require('asynquence')
require('asynquence-contrib')

module.exports.say = say
