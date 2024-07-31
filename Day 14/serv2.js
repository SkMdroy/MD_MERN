var url = require('url');

var adr = 'http://localhost:2442/default?year=2024&month=August';

//Parse the adress
var q = url.parse(adr,true);


console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);