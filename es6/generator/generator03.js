function* dataConsumer() {
	console.log('started')
	console.log(`1. ${yield}`)
	console.log(`2. ${yield}`)
	return 'result'
}
let genObj = dataConsumer()
genObj.next()
genObj.next('a')
console.log(genObj.next('b'))
console.log(genObj.next('b'))