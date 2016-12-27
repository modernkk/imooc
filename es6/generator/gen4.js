var fs = require("fs")

var readFile = function(fileName) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fileName, function(error, data) {
			if (error) {
				reject(error)
			}
			resolve(data)
		})
	})
}

var gen = function* () {
	var f1 = yield readFile('./gen1.js')
	var f2 = yield readFile('./gen2.js')
	console.log(f1.toString())
	console.log(f2.toString())
}

var asyncReadFile = async function () {
	var f1 = await readFile('./gen1.js')
	var f2 = await readFile('./gen2.js')
	console.log(f1.toString())
	console.log(f2.toString())
}

var result = asyncReadFile()

