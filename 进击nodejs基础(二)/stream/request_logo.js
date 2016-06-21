'use strict';

var http = require('http');
var fs = require('fs');

http
	.createServer(function(req, res) {
		// fs.readFile('../buffer/logo.png', function(err, data) {
		// 	if (err) {
		// 		res.end('file not exist!');
		// 		return;
		// 	} else {
		// 		res.writeHead(200, {'Context-Type': 'text/html'});
		// 		res.end(data);
		// 	}
		// });
		fs.createReadStream('../buffer/logo.png').pipe(res);
	})
	.listen(8090);