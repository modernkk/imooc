function* gen(x) {
	console.log("yield before")
	var y = yield x + 2;
	console.log("yield behind")
	return y;
}

var g = gen(1);
console.log("next 1st")
var obj = g.next();
console.log(g, obj);
console.log("next 2end")
obj = g.next(2);

console.log(g, obj);