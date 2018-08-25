const express = require('express')
const app = express()

app.get('/', function(request, response){
	var getClientAddress = function (req) {
	    return (req.headers['x-forwarded-for'] || '').split(',')[0] 
	        || req.connection.remoteAddress;
	};
	response.send(getClientAddress(request));
});

app.get('/api/ipaddress.json', function(request, response){
	var getClientAddress = function (req) {
	    return (req.headers['x-forwarded-for'] || '').split(',')[0] 
	        || req.connection.remoteAddress;
	};
	// response.send(getClientAddress(request));
	response.json({ipAddress:getClientAddress(request),remoteAddress:request.connection.remoteAddress,forwarded:request.headers['x-forwarded-for']});
});

var port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listening on " + port))
