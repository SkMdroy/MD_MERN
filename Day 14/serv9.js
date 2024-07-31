var http = require('http');
var fs = require('fs');//fs= file sysytem
http.createServer(function (req,res) 
	{
		fs.readFile('banaa.txt',function(err,data){//es arrow function
		res.writeHead(200,{'content-Type':'text/httml'});
		res.write(data);
		return res.end();
	});
	}
	).listen(4000);