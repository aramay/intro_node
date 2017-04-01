function readTheFile(filename) {
	return ASQ(function(done){
		var stream = fs.createReadStream(filename);
		var data = "";

		stream.pipe(fs.createWriteStream(filename+".backup"));

		stream.on("data",function(chunk){
			data += chunk;
		});
		stream.on("end",function(){
			done(data);
		});
	});
}

function delayMsg(done,msg) {
	setTimeout(function(){
		done(msg);
	},1000);
}

function say(filename) {
	return readTheFile(filename)
	.then(delayMsg);
}

var fs = require("fs");

var ASQ = require("asynquence");
require("asynquence-contrib");

module.exports.say = say;
