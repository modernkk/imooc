var a = require("./a.js");
var b = require("./b.js");
console.log("在main.js 中, a.done=%j, b.done=%j", a.done, b.done);

// result:
// 在 b.js 中, a.done=false
// b.js 执行完成
// 在 a.js 中, b.done =true
// a.js 执行完成
// 在main.js 中, a.done=true, b.done=true
// 