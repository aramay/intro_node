var net = require('net');

var server = net.createServer(function (c) {

    console.log("server connected ..");

    c.on('data',function (data) {
        console.log("data received: " + data.toString());
    });

    c.on('end', function () {
        console.log("clinet disconnected ..");
    });
    c.on('error', function (c) {
        throw c;
    });


});

server.listen(3000, function () {
    console.log("server started .. ");
});
