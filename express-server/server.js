var express = require('express');
var app = express();
var request = require('request');


app.get('/', function (req, res) {
  res.send('Hello World') 
});

app.get('/test', function(req, res) {
    console.log(req.header);
    res.send('Hello2'); 
});

app.get('/request', function(req, res) {
    request('http://www.naver.com', function (error, response, body) {
        res.send(body);
    });
});

app.listen(3000);
