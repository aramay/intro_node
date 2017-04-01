function printHelp() {
	console.log("3.js usage:");
	console.log("");
	console.log("--help              print this help");
	console.log("--file={FILENAME}   which file to load");
	console.log("");
	console.log("");
}


var args = require("minimist")(process.argv.slice(2),{ string: "file" });

if ("help" in args || !args.file) {
	printHelp();
	process.exit(1);
}


var hello = require("./helloworld3.js");

hello.say(args.file)
.val(function(msg){
	console.log(msg.toString());
})
.or(function(err){
	console.error("Error: " + err);
});
