// console.log("args passed ", process.argv)


var total = 0;

var argv = process.argv.slice(2, process.argv.length)

// console.log("argv ", argv);


argv.forEach(function(n){
    // console.log("argv in array ", parseInt(n));
    total += parseInt(n)
})

console.log(total)