function* gen(x) {
	try {
		console.log("yield before")
		var y =  yield x + 1;
		console.log("yield behind")
	} catch(err) {
		console.log(err);
	}
}

var g = gen(1);
console.log("next")
g.next();
console.log("throw")
g.throw("出错了");