var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response){
	var getClientAddress = function (req) {
	    return (req.headers['x-forwarded-for'] || '').split(',')[0] 
	        || req.connection.remoteAddress;
	};
	response.send(getClientAddress(request));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
