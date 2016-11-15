class ExtendableError extends Error {
	constructor(message) {
		super();
		this.message = message;
		this.stack = (new Error()).stack;
		this.name = this.constructor.name;
	}
}

class MyError extends ExtendableError {
	constructor(m) {
		super(m);
	}
}

var myErr = new MyError('11');
console.log(myErr.message);
console.log(myErr instanceof Error);
console.log(myErr.name);
console.log(myErr.stack);