var md=require('http');
md.createServer(function (req,res) { //es arrow function
	res.writeHead(200,{'content-Type':'text/httml'});
	res.write('This is MD');
	res.end();
}).listen(2442);