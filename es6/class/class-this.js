class Logger {
	constructor() {
		this.printName = this.printName.bind(this);
	}

	printName(name = 'there') {
		this.print(`Hello ${name}`);
	}

	print(text) {
		console.log(text)
	}
}

// const logger = new Logger();
// const {printName} = logger;
// printName();

// 箭头函数
class Logger2 {
	constructor() {
		this.printName = (name = 'here') => {
			this.print(`Hello ${name}`);
		}
	}

	print(text) {
		console.log(text);
	}
}

const logger2 = new Logger2();
// const {printName} = logger2;
// printName();

// proxy
function selfish(target) {
	const cache = new WeakMap();
	const handler = {
		get (target, key) {
			const value = Reflect.get(target, key);
			if (typeof value !== 'function') {
				return value;
			}
			if (!cache.has(value)) {
				cache.set(value, value.bind(target));
			}
			return cache.get(value);
		}
	};
	const proxy = new Proxy(target, handler);
	return proxy;
}

const logger = selfish(new Logger());
const {printName} = logger;
printName();
