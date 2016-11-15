class Foo {
	static classMethod() {
		return 'hello';
	}	
}
Foo.prop = 1;

console.log(Foo.classMethod());
console.log(Foo.prop);

var foo = new Foo();
// foo.classMethod();

class Bar extends Foo {

}

console.log(Bar.classMethod());

class Baz extends Foo {
	static classMethod() {
		return super.classMethod() + ', Baz';
	}
}

console.log(Baz.classMethod());