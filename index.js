var health = require('express-ping');
var express = require('express');
 
var app = express();
app.use(health.ping()); 
 
app.listen(3000);