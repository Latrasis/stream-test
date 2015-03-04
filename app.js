var http = require('http');
var express = require('express');


var app = express();

app.use(express.static(__dirname+'/public'));

app.listen(5000)

console.info('Listening on Port 5000')