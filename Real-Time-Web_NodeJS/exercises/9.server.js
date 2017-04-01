function handleHTTP (req, res) {
  if (req.method == 'GET') {
    if (/^\/\d+(?=$|[\/?#])/.test(req.url)) {
      req.addListener('end', function () {
        req.url = req.url.replace(/^\/(\d+).*$/, '/$1.html')
        static_files.serve(req, res)
      })
      req.resume()
    }	 else {
      res.writeHead(403)
      res.end()
    }
  }  else {
    res.writeHead(403)
    res.end()
  }
}

function handleIO(socket){

  
  function serverDisconnect(){
    console.log("client disconnected")

    clearInterval(intrv)//clear interval
  }

  console.log("client connected")

  //setup interval to send message every second
  var intrv = setInterval(function(){

    socket.emit("hello", Math.random())
  }, 1000)

  socket.on("disconnect", serverDisconnect)

}


var http = require('http'),
  httpserv = http.createServer(handleHTTP),

  port = 8080,
  host = '127.0.0.1',

  ASQ = require('asynquence'),
  node_static = require('node-static'),
  static_files = new node_static.Server(__dirname)

require('asynquence-contrib')

httpserv.listen(port, host)

// hijack existing http connection , and listen for socket.io connection
var io = require('socket.io').listen(httpserv)

io.on('connection', handleIO)

// configure socket.io
io.configure(function(){
	io.enable("browser client minification"); // send minified client
	io.enable("browser client etag"); // apply etag caching logic based on version number
	io.set("log level", 1); // reduce logging
	io.set("transports", [
		"websocket",
		"xhr-polling",
		"jsonp-polling"
	]);
});