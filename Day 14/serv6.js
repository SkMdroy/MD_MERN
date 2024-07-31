var fs = require('fs');
fs.writeFile('apple.txt','This is wt i have written using server into notepad',function(err,file){
	if(err) throw err;
	console.log('saved!!!');
})