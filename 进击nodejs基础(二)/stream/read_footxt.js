/*global require,console*/
// The 'readable' event indicates that the stream has new information: either new data is available or the end of the stream has been reached. 
// In the former case, stream.read() will return that data. 
// In the latter case, stream.read() will return null. 
// For instance, in the following example, foo.txt is an empty file:
'use strict';

const fs = require('fs');
var rr = fs.createReadStream('foo.txt');

rr.on('readable', () => {
  console.log('readable', rr.read());
});

rr.on('end', () => {
  console.log('end');
});
