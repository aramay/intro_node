var greetings = function(name) {
    console.log("hello", name);
};

var start = function(cb, params) {
    cb(params);
};

start(greetings, "aaron");
