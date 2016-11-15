class A {
	constructor() {
		this.p = 2;
	}
}

class B extends A {
	constructor() {
		super();
	}
	get m() {
		return super.p;
	}
}

let b = new B();
console.log(b.m);