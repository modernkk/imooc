var [foo = true] = [];
console.log(foo);

// var [x, y = 'b'] = [1];
// var [x, y = 'b'] = [1, undefined];
var [x, y = 'b'] = [1, null];
console.log(x, y);