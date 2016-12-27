function* helloWorldGenerator() {
	yield 'hello'
	yield 'world'
	return 'ending'
}

var hw = helloWorldGenerator()
var genRtn = hw.next()
console.log("1. ", genRtn)
genRtn = hw.next()
console.log("2. ", genRtn)
genRtn = hw.next()
console.log("3. ", genRtn)
genRtn = hw.next()
console.log("4. ", genRtn)