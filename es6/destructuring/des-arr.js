// var a = 1;
// var b = 2;
// var c = 3;

var [a, b, c] = [1, 2, 3];
console.log(a, b, c);

let [foo, [bar, [baz]]] = [1, [2, [3]]];
console.log(foo, bar, baz);

let [, , third] = ['foo', 'bar', 'baz'];
console.log(third);

let [x, , y] = [1, 2, 3];
console.log(x, y);

let [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);

let [m, n, ...z] = [1];
console.log(m, n, z);

var [r] = [];
var [s,t] = [1, 2, 3];
console.log(r, s, t);
