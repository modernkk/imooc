/*global require,console*/
// The 'readable' event indicates that the stream has new information: either new data is available or the end of the stream has been reached. 
// In the former case, stream.read() will return that data. 
// In the latter case, stream.read() will return null. 
// For instance, in the following example, foo.txt is an empty file:
'use strict';

const fs = require('fs');
var rr = fs.createReadStream('foo.txt');

// rr.on('readable', () => {
//   console.log('readable', rr.read());
// });

rr.on('end', () => {
  console.log('end');
});

rr.on('data', (chunk) => {
	console.log('got %d bytes of data', chunk.length);
	rr.pause();
	console.log('there will be no more data for 1 second');
	setTimeout(function() {
		console.log('now data will start flowing again')
		rr.resume();
	}, 1000);
});

var ww = fs.createWriteStream('file.txt');
rr.pipe(ww);
