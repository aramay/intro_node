var express = require('express');
var app = express();

var fs = require('fs');
var _ = require('lodash');

var engines = require('consolidate');

var users = [];

app.engine("hbs", engines.handlebars);
app.set("views", "./views");
app.set("view engine", "hbs");

app.use(express.static("images"));


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

    res.render("index", {users: users});
    // var buffer = "";
    //
    // users.forEach(function (user) {
    //
    //     buffer += '<a href="/' +user.username +'"> '+ user.name.full + ' </a><br>';
        // '<a href="/"' +user.username+' user.name.full + '<br>';
    // });
    // res.send(JSON.stringify(users));
    // res.send(buffer);

});

app.get(/big.*/, function (req, res, next) {

    console.log("big user");

    next();
});

app.get('/:username', function (req, res) {

    var username = req.params.username;

    console.log("username ", username);

    res.render("user", {username: username});
});


app.get('/yo', function (req, res) {
    res.send("yo !!");
});

// var server = app.listen(3000);
//pass this function a call back added info logging

var server = app.listen(3000, function () {
    console.log("Server running at localhost:" + server.address().port);
});
