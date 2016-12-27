var fetch = require("node-fetch")

function* gen() {
	var url = "https://api.github.com/users/github";
	var result = yield fetch(url)
	console.log(result.bio)
}

var g = gen()
console.log(typeof g)
console.log(typeof g.next)
var result = g.next()
console.log(result)

result.value.then(data => {
	// console.log(data)
	return data.json()
}).then(data => {
	// console.log(data)
	var obj = g.next(data)
	console.log(obj);
})