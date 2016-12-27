var set = new Set([1, 2, 3, 4, 4]);
console.log([...set])

var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size)

function divs() {
	return [... document.querySelectorAll('div')]
}

var set = new Set(divs())