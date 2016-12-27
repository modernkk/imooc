var ws = new WeakSet();
ws.add({})

const foos = new WeakSet();
class Foo {
	constructor() {
		foos.add(this)
	}
	method() {
		if (!foos.has(this)) {
			throw new Error('Foo.prototype.method can only used in Foo\'s instance')
		}
	}
}