// common
function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function() {
	return '(' + this.x + ', ' + this.y + ')';
}

var p = new Point(1, 2);

console.log(typeof Point);
console.log(Point === Point.prototype.constructor);
console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));