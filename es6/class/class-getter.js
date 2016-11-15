class MyClass {
	constructor() {

	}

	get prop() {
		return 'getter';
	}

	set prop(value) {
		console.log('setter: ' + value);
	}
}

let inst = new MyClass();
console.log(inst.prop);
inst.prop = 123;


class CustomHTMLElement {
	constructor(element) {
		this.element = element;
	}

	get html() {
		return this.element.innerHTML;
	}

	set html(value) {
		this.element.innerHTML = value; 
	}
}

var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html');

console.log('get' in descriptor);
console.log('set' in descriptor);