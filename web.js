const express = require('express')
const app = express()
var http = require('http');

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
	response.json({userAgent:request.headers['user-agent'],method:request.method,fresh:request.fresh,xhr:request.xhr,protocol:request.protocol,ipAddress:getClientAddress(request),remoteAddress:request.connection.remoteAddress,forwarded:request.headers['x-forwarded-for']});
});

# Using built-in http library and public API from https://www.ipify.org/
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    console.log("My public IP address is: " + ip);
  });
});

var port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listening on " + port))
