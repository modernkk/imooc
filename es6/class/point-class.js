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

var p = new Point(1, 2);

console.log(typeof Point);
console.log(Point === Point.prototype.constructor);
console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));