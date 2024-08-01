var express = require('express');
var app = express();
app.get('/md',function (req,res) {
	res.send("Welcome to express js world by SK_MD");
});
app.post('/cont',function (req,res) {
	res.send("u just called post method at '/contact'\n");
});
app.all('/test',function (req,res) {
	res.send("HTTP method dosent have any effect on this route!");
});
app.listen(2442);