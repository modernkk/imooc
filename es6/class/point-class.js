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

// extends
class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color;
	}

	toString() {
		return this.color + ' ' + super.toString();
	}
}

var cp = new ColorPoint(2, 3, 'red');
console.log(cp.toString());