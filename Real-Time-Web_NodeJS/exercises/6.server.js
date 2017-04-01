
function handleHttp (req, res) {
  if (req.method === 'GET') {
    if (req.url === '/') {
      //   console.log(req)

       ASQ(function (done) {
        setTimeout(function () {
          var num = Math.random()
          done(num)
        }, 1000)
      })
      .then(function (done, num) {
        setTimeout(function () {
          // res.end("async request" + )
          done('async request ' + num)
        }, 1000)
      })
      .val(function (mesg) {
        res.end(mesg)
      })
     }// end if req.url

     else{
       res.writeHead(403)
       res.end("bad request")
     }
  }
}

var port = 8080
var host = 'localhost'

var http = require('http')
var http_serv = http.createServer(handleHttp).listen(port, host)

var ASQ = require('asynquence')
