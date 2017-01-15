var fs = require('fs')

var dirPath = process.argv[2]
var fileExt = "."
fileExt += process.argv[3]

// console.log("args ", dirPath)
// console.log("args ", fileExt)

function listOfFiles(){
    fs.readdir(dirPath, function(err, files){
        if(err){
            throw err
        }

        // console.log("files ", files)
        files.filter(function(file){
            // console.log("no filter files ", file)
            // return file.includes(fileExt)
            // console.log(file.includes(fileExt))
            // var x = file.includes(fileExt)
            if(file.includes(fileExt)){
                console.log(file)
            }

            // console.log(x)
        })
    })
}

listOfFiles()

/* different implementation 

var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/