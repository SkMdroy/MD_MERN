var http = require('http');
var uc = require('upper-case');
http.createServer(function (req,res) {
		res.writeHead(200,{'content-Type':'text/httml'});
		res.write(uc.upperCase("All success"));
		res.end();
}).listen(6587);