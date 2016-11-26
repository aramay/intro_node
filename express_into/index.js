var express = require('express');

var app = express();

//call this function for http GET request for this path '/'
app.get('/', function (req, res) {
    res.send("hello, world!");

});

app.get('/yo', function (req, res) {
    res.send("yo !!");
});

// var server = app.listen(3000);
//pass this function a call back added info logging

var server = app.listen(3000, function () {
    console.log("Server running at localhost:" + server.address().port);
});
