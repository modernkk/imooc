/*global require*/
'use strict';
const http = require('http');

var server = http.createServer((req, res) => {
  // req is an http.IncomingMessage, which is a Readable Stream
  // res is an http.ServerResponse, which is a Writable Stream

  var body = '';

  // we want to get the data as utf8 strings
  // if you don't set an encoding, then you'll get Buffer objects
  req.setEncoding('utf8');

  // Readable Stream emit 'data' events once a listener is added
  req.on('data', (chunk) => {
    body += chunk;
  });

  // the end event tells you that you have entire body
  req.on('end', () => {
  	var data;
    try {
      data = JSON.parse(body);
    } catch (err) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${err.message}`);
    }

    // write back something interesting to the user
    res.write(typeof data);
    res.end();
  });

});

server.listen(1337);

// $ curl localhost:1337 -d '{}'
// object
// $ curl localhost:1337 -d '"foo"'
// string
// $ curl localhost:1337 -d 'not json'
// error: Unexpected token o
