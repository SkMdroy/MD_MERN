var fs = require('fs');
fs.rename('apple.txt','banaa.txt',function(err){
	if(err) throw err;
	console.log('File Renamed!!!');
});