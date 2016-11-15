class A {
	p() {
		return 2;
	}
}

class B extends A {
	constructor() {
		super();
		this.p = 3;
	}
	get m() {
		return this.p * super.p();
	}
	set m(value) {
		throw new Error('read only');
	}
}

let b = new B();
console.log(b.m);