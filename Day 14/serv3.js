var http = require('http');
var fs = require('fs');//fs= file sysytem
http.createServer(function (req,res) 
	{
		fs.readFile('client.html',function(err,data){//es arrow function
		res.writeHead(200,{'content-Type':'text/httml'});
		res.write(data);
	});
	}
	).listen(4000);