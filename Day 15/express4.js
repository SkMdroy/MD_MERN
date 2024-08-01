var express = require('express');
var app = express();

app.get('/154',function (req,res) {
 res.send('The id u specified is ' + req.params.id);
});
app.listen(4000);