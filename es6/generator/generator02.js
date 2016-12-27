function* f() {
	console.log('执行了')
}

var generator = f()
var st = new Date() * 1
setTimeout(function() {
	generator.next()
	console.log(new Date() * 1 - st, ' ms')
}, 200)

