'use strict';

var fs = require('fs');

fs.createReadStream('1.mpg').pipe(
	fs.createWriteStream('1-pipe.mpg'));