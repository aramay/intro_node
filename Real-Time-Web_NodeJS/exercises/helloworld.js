function say (filename, cb) {
//   var contents = fs.readFileSync(filename)
//   return fs.readFile(filename, cb)

//different implementation 

   fs.readFile(filename, function(err, contents){
      if (err) {
         cb(err)
      }
      else{
         //if we want to make an ajax request based on the contents of the file ... 
         setTimeout(function(){
            cb(null, contents)
         }, 1000)
      }
   })
}

var fs = require('fs')
module.exports.say = say
