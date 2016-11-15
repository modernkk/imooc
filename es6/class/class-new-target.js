// function Person(name) {
// 	if (new.target !== undefined) {
// 		this.name = name;
// 	} else {
// 		throw new Error('must use new')
// 	}
// }

// or
function Person(name) {
	if (new.target === Person) {
		this.name = name;
	} else {
		throw new Error('must use new');
	}
}

var person = new Person('modernkk');
// var otherPerson = Person('mtimekk');

class Rectangle {
	constructor(length, width) {
		console.log(new.target ===Rectangle);
		this.length = length;
		this.width = width;
	}
}

var obj = new Rectangle(3, 4);

class Square extends Rectangle {
	constructor(length) {
		super(length, length);
	}
}

var obj2 = new Square(5);

class Shape {
	constructor() {
		if (new.target === Shape) {
			throw new Error('can not instance');
		}
	}
}

class Rect extends Shape {
	constructor(length, width) {
		super();
	}
}
var x = new Shape(); // error
var y = new Rect(3, 4); // right
