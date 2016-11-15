const MyClass = class Me {
	getClassName() {
		console.log(Me.name);
	}
}

new MyClass().getClassName();

// console.log(Me.name);

// const MyClass = class {
// 	toString() {
// 		return "MyClass";
// 	}
// }

let person = new class {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}
}("modernkk");

person.sayName();