function fakeAjax (url, cb) {
  var fake_responses = {
    'file1': 'The first text',
    'file2': 'The middle text',
    'file3': 'The last text'
  }
  var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000

  console.log('Requesting: ' + url)

  setTimeout(function () {
    cb(fake_responses[url])
  }, randomDelay)
}

function output (text) {
  console.log(text)
}

// **************************************

function getFile (file) {
	// what do we do here?
  return new Promise(function (resolve, reject) {
   fakeAjax(file, resolve)
	
	//  fakeAjax(file, function () {
   //    resolve(file)
   //  })
  })
}

// request all files at once in "parallel"
// ???
var p1 = getFile("file1")
var p2 = getFile("file2")
var p3 = getFile("file3")

p1
.then(output)
.then(function(){
	return p2
})
.then(output)
.then(function(){
	return p3
})
.then(output)
.then(function(){
	output("Completed..!!")
})

// console.log(p1)


// 1st atempt
// getFile('file1')
// 	.then(function (x) {
//   console.log('promise resolved ', x)
//   return getFile('file2')
// })
// 	.then(function (x) {
//   console.log('promise resolved ', x)
//   return getFile('file3')
// })
// 	.then(function (x) {
//   console.log('promise resolved ', x)
// })
// .error(function(err){
// 	console.log(err)
// })
