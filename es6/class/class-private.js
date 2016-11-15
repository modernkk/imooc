// use _bar
class Wiget {
	// public
	foo(baz) {
		this._bar(baz);
	}

	// private
	_bar(baz) {
		this.snaf = baz;
	}
}

// external function
class Wiget2 {
	foo(baz) {
		bar.call(this, baz);
	}
}

function bar(baz) {
	return this.snaf = baz;
}

// symbol
const bar = Symbol("bar");
const snaf = Symbol("snaf");

class Wiget3 {
	foo(baz) {
		this[bar](baz);
	}

	[bar](baz) {
		return this[snaf] = baz;
	}
}
