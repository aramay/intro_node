var express = require('express');
var fs = require('fs');
var _ = require('lodash');

var app = express();


var users = [];


fs.readFile('users.json', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }else{
        JSON.parse(data).forEach(function (user) {
            user.name.full = _.startCase(user.name.first +" "+ user.name.last);

            users.push(user);
        });
    }
});
//call this function for http GET request for this path '/'
app.get('/', function (req, res) {

    var buffer = "";

    users.forEach(function (user) {

        buffer += '<a href="/' +user.username +'"> '+ user.name.full + ' </a><br>';
        // '<a href="/"' +user.username+' user.name.full + '<br>';
    });
    // res.send(JSON.stringify(users));
    res.send(JSON.stringify(buffer));

});



app.get('/yo', function (req, res) {
    res.send("yo !!");
});

// var server = app.listen(3000);
//pass this function a call back added info logging

var server = app.listen(3000, function () {
    console.log("Server running at localhost:" + server.address().port);
});
