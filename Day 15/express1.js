var express = require('express');
var app = express();
app.get('/md',function (req,res) {
	res.send("Welcome to express js world by MD");
});
app.listen(2442);