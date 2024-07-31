var fs = require('fs');
fs.appendFile('apple.txt','yeah white crows do fly',function(err,file){
	if(err) throw err;
	console.log('saved!!!');
})