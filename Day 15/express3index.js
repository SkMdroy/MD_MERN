var express = require('express');
var app = express();
var things = require('./express3.js');
//express3 & expressindex should be in same file
//if else ('./mern codes/express3.js')
app.use('/md',things);
app.listen(4000);