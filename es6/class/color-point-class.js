class Point {

}

var p = new Point();

class ColorPoint extends Point {
	constructor() {
		super();
	}
}

var cp = new ColorPoint(); // ReferenceError

console.log(cp instanceof Point);
console.log(cp instanceof ColorPoint);