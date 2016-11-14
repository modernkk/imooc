class Foo {
	constructor() {
		return Object.create(null);
	}
}

console.log(new Foo() instanceof Foo);

Foo();