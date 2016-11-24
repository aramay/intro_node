var http = require('http');

var server = http.createServer(function (request, response) {
    console.log("server running .. ");


    if (request.url === '/') {
        response.writeHead(200,{"Content-Type": "text/html"});

        response.end("hello <strong>world</strong>");

    }else if (request.url === '/goodbye') {

        if (request.method === "GET") {

            response.writeHead(200,{"Content-Type": "text/html"});

            response.end("goodbye <strong>world</strong>");

        }
        
         if (request.method === "POST") {
            response.writeHead(200,{"Content-Type": "text/html"});

            response.end("posting goodbye cruel <strong>world</strong>");

        }
    }
});

server.listen(3000);
