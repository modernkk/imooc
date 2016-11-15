class MyArray extends Array {
	constructor(...args) {
		super(...args);
	}
}

var arr = new MyArray();
arr[0] = 12;
console.log(arr.length);

arr.length = 0;
console.log(arr[0]);

class VersionedArray extends Array {
	constructor() {
		super();
		this.history = [[]];
	}

	commit() {
		this.history.push(this.slice());
	}

	revert() {
		this.splice(0, this.length, ...this.history[this.history.length - 1]);
	}
}

var x = new VersionedArray();
x.push(1);
x.push(2);

console.log(x);
console.log(x.history);

x.commit();
console.log(x.history);

x.push(3);
console.log(x);

x.revert();
console.log(x);
