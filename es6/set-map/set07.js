let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);

let intersect = new Set([...a].filter(x => b.has(x)));

let difference = new Set([...a].filter(x => !b.has(x)));

console.log(union)
console.log(intersect)
console.log(difference)
