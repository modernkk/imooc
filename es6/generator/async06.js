async function f() {
	try {
		await Promise.reject("出错了")
	} catch (e) {
		
	}
	return await Promise.resolve("hello world")
}

async function f() {
	await Promise.reject("出错了")
			.catch( e => console.log(e))
	return await Promise.resolve("hello world")
}

f()
.then( v => console.log(v))
.catch( e => console.log(e))

async function main() {
	try {
		var val1 = await firstStep()
		var val2 = await secondStep()
		var val3 = await thirdStep()
		return val3
	} catch (e) {
		console.error(e)
	}
}