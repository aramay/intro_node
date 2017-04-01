
function handleHttp (req, res) {
  if (req.method === 'GET') {
     if (req.url === '/') {
      //   console.log(req)
        res.writeHead(200, {'Content-type': 'text/plain' })
        res.end('Node server running' + Math.random(10))
      }      else {
        res.writeHead(403)
        res.end('Forbidden')
      }
   }   else {
     res.writeHead(403)
     res.end('Forbidden')
   }
}

var port = 8080
var host = 'localhost'

var http = require('http')
var http_serv = http.createServer(handleHttp).listen(port, host)
