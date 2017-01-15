var fs = require('fs')

var fileName = process.argv[2]
// console.log(fileName)

var numberOfLInes = undefined

function count(){
    fs.readFile(fileName, 'utf8', function(err, data){
        if (err){
            throw err;
        }

        numberOfLInes = data.split('\n').length - 1

        console.log(numberOfLInes)
        // console.log("number of new lines ", parseInt(numberOfLInes))

        return numberOfNewLInes
    })
}

count()