let s = new Set();
s.add(1).add(2).add(2)
console.log(s.size)

let r = s.has(2)
r = s.has(1)
r = s.has(3)
s.delete(2)
r = s.has(2)
console.log(r)