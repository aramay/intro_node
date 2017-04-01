function greetings(args){
   console.log("hello ", args)
}

function init(params, cb){
   cb(params)
}

console.log(init("test", greetings))