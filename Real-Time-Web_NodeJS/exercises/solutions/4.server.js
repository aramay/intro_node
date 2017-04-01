function handleHTTP(req,res) {
	if (req.method === "GET") {
		if (req.url === "/") {
			res.writeHead(200,{
				"Content-type": "text/html"
			});
			res.end("Hello World: " + Math.random());
		}
		else {
			res.writeHead(404);
			res.end("Couldn't find it!");
		}
	}
	else {
		res.writeHead(403);
		res.end("No, no, don't do that!");
	}
}

var http = require("http");
var httpserv = http.createServer(handleHTTP);

httpserv.listen(8006,"localhost");
