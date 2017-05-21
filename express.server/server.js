var express = require('express');
var serveIndex = require('serve-index');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', serveIndex(__dirname, {'icons': true}));
app.use('/', express.static(__dirname));

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});


/*
 you would have to do npm init on a new folder. put that code into serer.js

 then npm install --save express

 npm install --save serve-index

 then run it

 node server.js

 and http://localhost/ will load up in whatever folder server.js is on
 */