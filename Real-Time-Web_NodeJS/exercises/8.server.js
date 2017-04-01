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
  }
  else {
    res.writeHead(403)
    res.end()
  }
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

var io = require('socket.io')
// hijack existing http connection , and listen for socket.io connection
io.listen(httpserv)
