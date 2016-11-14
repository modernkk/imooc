// class
let methodName = 'getSize';
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}

	[methodName]() {
		return this.x * this.y;
	}
}

var p = new Point(2, 3);
var p2 = new Point(1, 2);

console.log(p.toString());
console.log(p.hasOwnProperty('x'));
console.log(p.hasOwnProperty('y'));
console.log(p.hasOwnProperty('toString'));
console.log(p.__proto__.hasOwnProperty('toString'));

console.log(p.__proto__ === p2.__proto__);