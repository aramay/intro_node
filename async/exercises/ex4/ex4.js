function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}

// Request all files at once in
// "parallel" via `getFile(..)`.
//
// Render as each one finishes,
// but only once previous rendering
// is done.

// ???

// var p1 = getFile("file1")
// var p2 = getFile("file2")
// var p3 = getFile("file3")


// var x = ["file1", "file2", "file3"]
// x.map(console.log(x))

var numbers = ["file1", "file2", "file3"]
var roots = numbers.map(function(x){
	console.log(x);
}) 

// console.log(roots)
// Promise.all([p1, p2, p3])

	// .then(function(result){
	// 	console.log(result)
	// })